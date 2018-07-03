import React from 'react';
import style from 'style/components/input.scss';
import FaIcon from 'components/faIcon.jsx';
import classnames from 'util/classnames.js';
import isType from 'util/isType.js';
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showClose: false,
      init: true,
      searchResult: [],
      showSearchResult: false,
      error: [],
    };
    let eventList = [
      'onFocus',
      'onBlur',
      'onKeyDown',
      'onOptionClick',
    ];
    eventList.forEach(event => {
      this[event] = this[event].bind(this);
    });
  }
  componentWillReceiveProps(nextProps) {
    if (!this.state.init && nextProps.defaultValue) {
      this.setState({
        value: defaultValue,
        init: false
      })
    }
  }
  dataValidate(text) {  //策略模式
    let { minLength, maxLength, require, validReg, errorText = {} } = this.props;
    // let props = this.props;
    let error = this.state.error, errorMsg;
    let validates = {
      require: function (value) {
        return require ? value.trim().length : true;
      },
      minLength: function (value) {
        return minLength && value.length ? value.length > minLength : true;
      },
      maxLength: function (value) {
        return maxLength ? value.length < maxLength : true;
      },
      validReg: function(value){
        if(validReg){
          if(!isType(validReg,'RegExp')){
            throw new Error('validReg error: is not a valid RegExp');
          }
          return validReg.test(value);
        }
        return validReg && isType(this.validReg)
      }
    }

    Object.keys(validates).map(validItem => {
      let index = error.findIndex((err) => err == validItem);
      if (!validates[validItem].call(this, text)) {
        index < 0 && error.push(validItem);
        errorMsg = isType(errorText, 'String') ? errorText : errorText[validItem]
      } else {
        index >= 0 && error.splice(index, 1);
      }
    });
    this.setState({
      error,
      errorText: errorMsg
    });
    return validates;
  }

  onChange(e) {
    let { type } = this.props;
    let text = e && e.target.value || "";
    this.setState({
      value: text,
      showClose: text ? true : false,
    });
    if (type === 'search') {
      if (text) {
        this.setState({
          showSearchResult: true
        });
      } else {
        this.setState({
          showSearchResult: false
        });
      }
      this.handleSearch(text);
    } else {
      this.props.onChange && this.props.onChange(text, e);
    }
    this.dataValidate(text);
  }

  clearText() {
    this.setState({
      value: ""
    });
    this.onChange();
    // this.refs.input.value = "";
  }

  handleSearch(value) {
    let { searchList, filterProp } = this.props;
    let filtItems = [];
    if (isType(searchList, 'Array')) {
      filtItems = searchList.filter(item => {
        if (!item[filterProp]) {
          return false;
        }
        return item[filterProp].indexOf(value) >= 0;
      });
    }
    this.setState({
      searchResult: filtItems
    });
  }
  onKeyDown(e) {
    const keyCode = e && e.keyCode;
    let { onEnter } = this.props;
    if (keyCode === 13) {
      onEnter && onEnter(e);
    }
  }
  onFocus(e) {
    this.props.onFocus && this.onFocus(e);
  }

  onBlur(e) {
    let { onBlur, type } = this.props;
    if (type == 'search') {
      setTimeout(() => {
        onBlur && onBlur(e);
        this.setState({
          showSearchResult: false
        });
      }, 150);
    }
  }
  onOptionClick(e, item) {
    this.setState({
      value: e.target.innerText
    });
    this.props.onOptionClick && this.props.onOptionClick(e, item);
  }
  render() {
    let { value, showClose, searchResult, showSearchResult, error,errorText } = this.state;
    let { name, className, children, type = "text", onFocus, onBlur, autoComplete, placeholder,
      defaultValue, disabled, autoCapitalize, onEnter, autoSearch = true,
    } = this.props;
    let isSearch = type == 'search';
    return <div className={classnames('input-container', { [className]: className })} >
      <div className="input-main">
        {
          type == "search"
            ? <FaIcon name="search" className="search-icon" />
            : null
        }
        <input
          ref="input"
          className={classnames("com-input", { "search-input": isSearch,"error":errorText })}
          type={isSearch ? "text" : type}
          disabled={disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={(e) => this.onChange(e)}
          name={name}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onKeyDown={this.onKeyDown}
        />
        <FaIcon name="close" className={showClose ? "close-icon" : "close-icon-hide"} onClick={(e) => { this.clearText(e) }} />
        {
          showSearchResult ?
            <ul className="search-list">
              {
                searchResult.map((item, i) => {
                  return <li className="search-item" onClick={(e) => this.onOptionClick(e, item)} key={item.id || item.name}>{isType(item, 'String') ? item : (item.name)}</li>
                })
              }
            </ul>
            : null
        }
        {
          error
            ? <p className="error-text">{errorText}</p>
            : null
        }
      </div>
    </div>
  }
}
Input.propTypes = {}
export default Input;