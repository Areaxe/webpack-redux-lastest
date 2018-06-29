import React from 'react';
import style from 'style/components/input.scss';
import FaIcon from 'components/faIcon.jsx';
import classnames from 'util/classnames.js';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showClose: false,
      init: true,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.state.init && nextProps.defaultValue) {
      this.setState({
        value: defaultValue,
        init: false
      })
    }
  }
  dataValidate() {  //策略模式
    let validateList = {
      minLength: function () {

      },
      maxLength: function () {

      },

      isRequire: function () {

      }
    }
  }
  onChange(e) {
    let text = e && e.target.value||"";
    this.setState({
      value: text,
      showClose: text ? true : false,
    });
  }
  clearText() {
    this.setState({
      value: ""
    });
    this.onChange();
    // this.refs.input.value = "";
  }
  render() {
    let { value,showClose } = this.state;
    let { name, className, children, type = "text", onFocus, onBlur, autocomplete, placeholder, defaultValue, disabled } = this.props;
    return <div className={classnames('input-container', { [className]: className })} >
      <input
        ref="input"
        className="com-input"
        type={type}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => this.onChange(e)}
        name={name}
        autoCapitalize={autocomplete}
        placeholder={placeholder}
        value={value}
      />
      <FaIcon name="close" className={showClose ? "close-icon" : "close-icon-hide"} onClick={(e) => { this.clearText(e) }} />
    </div>
  }
}
Input.propTypes = {

}
export default Input;