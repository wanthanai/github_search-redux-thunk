import React from 'react'
import './App.css';
import { connect } from 'react-redux';
import { thunk_action_creator } from './actions/index';
import UserInfo from './UserInfo';


function App(props) {
  let getUsername;

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = getUsername.value;
    props.dispatch(thunk_action_creator(username))
    getUsername.value = "";
    console.log(username);
  }
  

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Github Search Profile</h2>
        <input 
          type="text" 
          placeholder="Enter github username"
          required
          ref={input => (getUsername = input)}
        />
        <button className="button">Submit</button>
      </form>
        
      {/* fetching */}
      {props.data.isFetching 
        ? <div className="fetching_loading"></div> 
        : null
      }

      {/* error */}
      {props.data.isError 
        ? <h3 className="error">No such user exists.</h3>   
        : null
      }


      {/* receive data */}
      {props.data.receiveData === true
        ? <UserInfo user={props.data.userData} />
        : null
      }
    </div>
  );
}

//! map state to props
const mapStateToProps = state => {
  return {
    data: state  
  }
}

// export and connect
export default connect(mapStateToProps)(App);
