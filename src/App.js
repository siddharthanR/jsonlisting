import './App.css';
import Button from '../src/components/Button'
import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as jsonAction from '../src/actions/Actions'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }
  
  onWriteClick = () => {
    fetch('./data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response => response.json()
    .then(response => this.setState({
      data : response
    }, () => this.props.storeJson(this.state.data))))
  }

  onReadClick = () => {
    this.props.readJson();
  }

  display = () => {
    console.log(this.props.text);
    console.log(this.props.email);
  }

  render(){
    return(
      <div>
        <Button type={"submit"} onClick={this.onWriteClick} name={"write"}/>
        <Button type={"submit"} onClick={this.onReadClick} name={"read"}/>
        <Button type={"submit"} onClick={this.display} name={"show"}/>
      {this.props.resultData ? this.props.resultData.map((data,i,arr) =>(
         <ul>
        <li key ={i}>{data.id}</li>
        <li key ={i}>{data.username}</li>
        <li key ={i}>{data.name}</li>
      <li key ={i}>{data.email}</li>
      </ul>
    )):null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    resultData: state.readData ? state.readData : [],
    text: state.text ? state.text : '',
    email: state.email ? state.email : ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, jsonAction), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)