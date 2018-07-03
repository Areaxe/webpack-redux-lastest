import React, {Component} from 'react';
import {
  Button,
  Modal,
  Input,
  FormLayout,
} from 'components/index.jsx';
import style from 'style/containers/components.scss';
class FormComponents extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterUser: [],
    };
    this.userInfo = [
      {
        name:"modal",
        value:"modal",
      },
      {
        name:"model",
        value:"model",
      },
      {
        name:"oodal",
        value:"oodal",
      },
    ]
  }
  getFilterUsers(users){
    console.log(users);
    this.setState({
      filterUser: users
    })
  }
  componentDidMount(){
    this.setState({
      filterUsers : this.getFilterUsers()
    })
  }
  render() {
    let {showModal, showConfirm} = this.state;
    let requireIcon = <span className="red">*</span>
    return <form className="form-test">
      <h2 className="form-title">Form表单展示</h2>
      <FormLayout left="搜索">
        <Input 
          type="search" 
          searchList={this.userInfo} 
          placeHolder="请输入搜索内容" 
          filterProp="name"
          onChange={this.getFilterUsers}
          onEnter={()=>{alert("yes")}}
          minLength={3}
          maxLength={8}
          require={true}
        />
       
      </FormLayout>
      <FormLayout left="字符串error">
        <Input 
          placeHolder="enter事件" 
          onEnter={()=>{alert("onEnter事件")}}
          minLength={3}
          maxLength={8}
          require={true}
          errorText="数据错误"
        />
      </FormLayout>
      <FormLayout left="自定义error">
        <Input 
          placeHolder="enter事件" 
          onEnter={()=>{alert("onEnter事件")}}
          minLength={3}
          maxLength={8}
          require={true}
          validReg={/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/}
          errorText={
            {
              "minLength":"最小长度不能小于3",
              "maxLength":"最大长度不能小于8",
              "require":"该输入为必填项",
              "validReg":"输入正确的邮箱"
            }
            
          }
        />
      </FormLayout>
      <FormLayout left="邮箱正则">
        <Input 
          require={true}
          validReg={/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/}
          errorText={
            {
              "require":"该输入为必填项",
              "validReg":"输入正确的邮箱"
            }
          }
        />
      </FormLayout>
      <FormLayout left="搜索">
        <Input 
          type="search" 
          searchList={this.userInfo} 
          placeHolder="请输入搜索内容" 
          filterProp="name"
          onChange={this.getFilterUsers}
          onEnter={()=>{alert("yes")}}
          minLength={3}
          maxLength={8}
          require={true}
        />
       
      </FormLayout>
    </form>
  }
}

export default FormComponents;