import React, {Component} from 'react';
import {
  Button,
  Modal,
  Input,
  FormLayout,
} from 'components/index.jsx';
import style from 'style/containers/components.scss';
class UserList extends Component {
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
      <h2 className="form-title">用户搜索</h2>
      <FormLayout left="姓  名">
        <Input 
          type="search" 
          searchList={this.userInfo} 
          placeHolder="请输入姓名" 
          filterProp="name"
          onChange={this.getFilterUsers}
          onEnter={()=>{alert("yes")}}
          minLength={3}
          maxLength={8}
          require={true}
        />
      </FormLayout>
      <div>
        {

        }
      </div>
    </form>
  }
}

export default UserList;