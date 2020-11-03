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
    // this.show();
  }

  // show = () => {
  //   console.log("data to be read", this.props.resultData)
  // }

  render(){
    return(
      <div>
        <Button type={"submit"} onClick={this.onWriteClick} name={"write"}/>
        <Button type={"submit"} onClick={this.onReadClick} name={"read"}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    resultData: state.resultStore ? state.resultStore : ''
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(Object.assign({}, jsonAction), dispatch)
// }

export default connect(mapStateToProps, jsonAction)(App)