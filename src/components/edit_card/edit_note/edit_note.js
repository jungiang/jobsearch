import React, { Component } from 'react';
import Modal from '../../general/modals/modal';
import { reduxForm, Field, initialize } from 'redux-form';
import Header from '../../general/header';
import TextArea from '../../general/textarea';
import './edit_note.scss';
import axios from 'axios';
import DeleteModal from '../../general/modals/delete_confirmation';
import { connect } from 'react-redux';

class EditNote extends Component {
    constructor(props){
        super(props);
        this.state={
            deleteConfirmationOpen:false,
            error: false,
            errorMsg: '',
            
        }
    }
    componentDidMount() {
        const actions = initialize('add-note', { note: this.props.fieldInput });
        this.props.dispatch(actions);
    }
    handleEditNote = async values => {
        const { id } = this.props
        const editNoteValues = {
            id: id,
            note: values.note
        }
        const resp = await axios.post('/api/update_note_item.php', editNoteValues);
        
        if(resp.data.success){
            this.props.update();
            this.props.closeModal();
        }else{
            if (resp.data.error === ""){
                this.props.update();
            } else {
                this.setState({
                    errorMsg: resp.data.error,
                    error: true
                })
            }
            
        }
    }
    handleDeleteNote = async () => {
        const { id } = this.props;
        const resp = await axios.post('/api/delete_note_item.php', { "id": id });
        if(resp.data.success){
            this.props.update();
            this.props.closeModal();
        }else{
            this.setState({
                errorMsg: resp.data.error,
                error: true
            })
        }
    }

    deleteConfirmation=()=>{
        this.setState({
            deleteConfirmationOpen:true
        })
    }
    closeConfirmation=()=>{
        this.setState({
            deleteConfirmationOpen:false
        })
    }
    closeErrorModal = ()=>{
        this.setState({
            error: false
        })
    }
    render() {
        const { handleSubmit, closeModal, fieldInput } = this.props;
        return (
            <div className="action row">
                {this.state.deleteConfirmationOpen ? <DeleteModal handleDelete={this.handleDeleteNote} closeModal={this.closeConfirmation} modalClass="edit-note-modal" mscss="note"/>:
                <Modal modalClass="edit-note-modal" mscss="note">
                    <div>
                        <button className="exit" onClick={closeModal}><i className="material-icons">close</i></button>
                    </div>
                    <Header title="Edit Note" newClass="col s10 offset-s1" alignment="center"/>
                    <form className="center" onSubmit={handleSubmit(this.handleEditNote)} >
                        <Field id="note" col="s10 offset-s1" name="note" component={TextArea} label='Notes' />
                        <button className="btn save">SAVE</button>
                    </form>
                    <button className="trash right" onClick={this.deleteConfirmation}><i className="material-icons">delete</i></button>
                    {this.state.error &&
                    <div className='errorNoteMsg row'>
                        <div className="col s10 offset-s1 left-align" >
                            <i className='material-icons prefix'>warning</i>
                            {this.state.errorMsg}
                        </div>
                    </div>}
                </Modal>}
            </div>
        )
    }
}

export default connect()(reduxForm({
    form: 'add-note',
})(EditNote));