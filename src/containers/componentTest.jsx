import React, {Component} from 'react';
import {Button,Modal} from 'components/index.jsx';
class ComponentTest extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
  }
  showModal(){
    console.log("modal");
    this.setState({
      showModal: true
    })
  }
  render() {
    return <div>
      <Button  name="success" onClick={()=>this.showModal()}>显示Modal</Button>
      <Button  name="info" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="indigo" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="purple" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="pink" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="orange" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="secondary" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="green" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="yellow" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="gray-dark" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="danger" onClick={()=>alert("点击事件")}>显示Modal</Button>
      <Button  name="dark" onClick={()=>alert("点击事件")}>显示Modal</Button>
      {
        this.state.showModal
        ? <Modal>aaaa</Modal>
        : null
      }
    </div>
  }
}

export default ComponentTest;