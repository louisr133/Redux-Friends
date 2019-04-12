import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Login from './components/Login';
import {loginChange} from './actions'
import Protected from './components/Protected';
import ProtectedRoute from './components/ProtectedRoute'
import {connect} from 'react-redux';
import {getData,deleteData, updateFriendField, updateFriend} from './actions'
import './css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        App
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login' >Login</Link>
          <Link to='/protected'>Protected Page</Link>
        </nav>

        <Route exact path='/login' render={(props) => {
          return(
            <Login
              {...props}
              loginChange={this.props.loginChange} 
              loginField={this.props.loginField}
              />
          )
        }}/>
        <ProtectedRoute 
        updateFriend= {this.props.updateFriend}
        updateFriendField={this.props.updateFriendField}
        updateField={this.props.updateField}
        deleteData={this.props.deleteData}
        data={this.props.data}
        getData={this.props.getData}
        exact path='/protected' 
        component={Protected}

        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    ...state,
    loginField: {...state.loginField},
    data: state.data,
    updateField: {...state.updateField}

  })
}
export default connect(mapStateToProps, {updateFriend, updateFriendField, deleteData,getData,loginChange})(App);
