import React from 'react';
import {attemptLogin} from '../actions'
import {connect} from 'react-redux'

class Login extends React.Component {

    render(){
        return(
            
            <div>
                <form>
                    <input
                        type='text'
                        name='username'
                        value={this.props.loginField.username}
                        placeholder='username'
                        onChange = {(e) => {this.props.loginChange(e)}}
                    />
                    
                    <input
                         type='text'
                         name='password'
                         value={this.props.loginField.password}
                         placeholder='password'
                         onChange = {(e) => {this.props.loginChange(e)}}
                    />
                    <button type='button' onClick={() => this.props.attemptLogin(this.props.loginField).then(() => this.props.history.push('/protected')) }>Login</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {attemptLogin})(Login);