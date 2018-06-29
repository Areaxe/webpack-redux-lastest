import React,{Component} from 'react';
import classnames from 'util/classnames.js';
import FaIcon from 'components/faIcon.jsx';

const popComponent = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.getIcon = this.getIcon.bind(this);
      this.onConfirm = this.onConfirm.bind(this);
      this.onCancel = this.onCancel.bind(this);
    }

    getIcon() {
      let { icon, type } = this.props;
      let typeIcon = {
        "info": "info-circle",
        "success": "check-circle",
        "error": "close",
        "warning": "info-circle",
      }
      if (icon) {
        return icon;
      }
      else if (type) {
        let className = classnames("type-icon", {
          [`icon-${type}`]: type,
        })
        return <FaIcon name={typeIcon[type]} className={className} />
      }
      return null;
    }

    onCancel(e){
      this.props.onCancel && this.props.onCancel(e);
    }

    onConfirm(e){
      this.props.onConfirm && this.props.onConfirm(e);
    }

    render() {
      return <WrappedComponent {...this.props} onConfirm={this.onConfirm} getIcon={this.getIcon} />
    }
  }
}
export default popComponent;