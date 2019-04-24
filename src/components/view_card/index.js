import React, { Component } from 'react';
import axios from 'axios';
import ViewDetails from './view_details';

class ViewCard extends Component {
    state = {
        isLoaded: false,
        respData: null,
        editable:false
    }
    componentDidMount() {
        this.getRespData();
    }
    async getRespData() {
        const { params } = this.props.match;
        console.log('param', params)
        console.log('params id', params.id)
        const resp = await axios.get(`/api/get_tracker_item.php?tracker_id=${params.id}`);
        console.log("reap", resp)
        this.setState({
            respData: resp.data.data,
            isLoaded: true
        })
    }
    editMode=()=>{
        const {params} = this.props.match;
        this.props.history.push(`/tracker/edit/${params.id}`);
    }
    render() {
        console.log("Resp Data",this.state.respData);
        if (!this.state.isLoaded) {
            return (
                <div className="row Loading">Loading...</div>
            )
        } else {
            return (
                <div className="details-container">
                    {!this.state.editable && <ViewDetails handleEdit={this.editMode} {...this.state.respData}/>}
                </div>
            )
        }
    }

}

export default ViewCard;