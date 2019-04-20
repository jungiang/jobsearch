import React from 'react';
import './button.scss';

export default function AddButton(props){
    return (
        <span className="addbutton" onClick={props.goToProspect}>
            <i className="material-icons center">{props.icon}</i>
        </span>
    )
}