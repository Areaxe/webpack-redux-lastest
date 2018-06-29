import React, {Component} from 'react';
import {Button,Modal,Input,FormLayout,Confirm,FaIcon} from 'components/index.jsx';
import style from 'style/containers/components.scss';
class ComponentTest extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
  }
  showComponent(show,state){
    this.setState({
      [show]: state,
    });
  }
  render() {
    let {showModal,showConfirm} = this.state;
    let requireIcon = <span className="red">*</span>
    return <div>
      <div>
        <Button  name="success" onClick={()=>this.showComponent("showModal",true)}>显示Modal</Button>
        <Button  name="info" onClick={()=>this.showComponent("showConfirm",true)}>显示Confirm</Button>
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

        <Button  name="light-success" onClick={()=>this.showComponent("showModal",true)}>显示Modal</Button>
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
        showModal
        ? <Modal insertRoot={true} onClose={()=>this.showComponent("showModal",false)}>
            <form className="form-test">
              <h2 className="form-title">表单提交</h2>
              <FormLayout left={<span>姓  名{requireIcon}</span>}>
                <Input placeholder="请输入姓名" />
              </FormLayout>
              <FormLayout left="手机号"><Input /></FormLayout>
              <FormLayout left="密  码"><Input type="password" /></FormLayout>
              <FormLayout><Button type="button">发送</Button></FormLayout>
            </form>
        </Modal>
        : null
      }
      {
        showConfirm
        ?<Confirm 
          title="This is a confirm" 
          onClose={()=>this.showComponent("showConfirm",false)}
          onCancel={()=>{console.log("点击了取消");this.showComponent("showConfirm",false)}}
          onConfirm={()=>{console.log("点击了确定");this.showComponent("showConfirm",false)}}
          type="success"
        >
          来自confirm的内容
        </Confirm>
        :null
      }
    </div>
  }
}

export default ComponentTest;