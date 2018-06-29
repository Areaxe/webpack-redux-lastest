import React, {Component} from 'react';
import {Button,Modal,Input,FormLayout} from 'components/index.jsx';
import style from 'style/containers/components.scss';
class ComponentTest extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
  }
  showModal(state){
    this.setState({
      showModal: state,
    });
  }
  render() {
    return <div>
      <div>
        <Button  name="success" onClick={()=>this.showModal(true)}>显示Modal</Button>
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

        <Button  name="light-success" onClick={()=>this.showModal()}>显示Modal</Button>
        <Button  name="light-info" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-indigo" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-purple" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-pink" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-orange" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-secondary" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-green" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-yellow" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-gray-dark" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-danger" onClick={()=>alert("点击事件")}>显示Modal</Button>
        <Button  name="light-dark" onClick={()=>alert("点击事件")}>显示Modal</Button>
      </div>
      {
        this.state.showModal
        ? <Modal insertRoot={true} onClose={()=>this.showModal(false)}>
            <form className="form-test">
              <h2 className="form-header">表单提交</h2>
              <FormLayout left="姓  名"><Input /></FormLayout>
              <FormLayout left="手机号"><Input /></FormLayout>
              <FormLayout left="密  码"><Input type="password" /></FormLayout>
              <Button type="button">发送</Button>
            </form>
        </Modal>
        : null
      }
    </div>
  }
}

export default ComponentTest;