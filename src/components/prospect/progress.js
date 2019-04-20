import React, { Component, Fragment, FormSection } from 'react';
import { Field } from 'redux-form';

class DropDown extends Component {
    state = {
        fontColor: false
    }

    handleDropDownOpened(){
        var dropdown = M.FormSelect.getInstance(this.progress);
    }

    toggleClass(){
        const {fontColor} = this.state;
        this.setState({fontColor: !fontColor});
    }

    componentDidMount() {
        //console.log(this.progress);
        M.FormSelect.init(this.progress);

    }

    renderSelect = (props) =>{
        return(
        <select {...props.input} ref={(element) => { this.progress = element }}>
            <option value="" disabled>Application Status</option>
            <option value="Started Application">Started Application</option>
            <option value="Waiting for Response">Waiting for Response</option>
            <option value="Follow-up Needed">Follow-up Needed</option>
            <option value="Archived">Archived</option>
        </select>
    );
    }

    render() {
        return (
            <div className="input-field dropdown col s10">
                <Field defaultValue="" name="progress" component={this.renderSelect}/>
            </div>
        );
    }

}

export default DropDown;