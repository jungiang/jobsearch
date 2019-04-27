import React, {Component} from 'react';
import SignUpForm from './sign_up';
import Header from '../../general/header';
import './sign_up.scss';
import {connect} from 'react-redux';


class SignUp extends Component{
    signUp=values=>{
        console.log(values);
    }
    render(){
        return(
        <div className="signup-container row">
            <div className="signup-box col m6 offset-m3 s10 offset-s1">
                <div className="signup-content">
                    <div className="photo"></div>
                </div>
                <Header alignment = "left-align" title="Sign Up" newClass = "teal-text text-darken-1"/>
                <SignUpForm signUp={this.signUp}/>
            </div>
        </div>
        )
    }
    
}

export default SignUp
// export default connect(null,{
//     signUp:signUp
// })(SignUp);