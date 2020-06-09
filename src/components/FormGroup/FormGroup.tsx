import React from 'react';
import './FormGroup.scss';
import autosize from 'autosize';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export interface FormGroupParams {
  children?: any,
  attrs?: any,
  data?: Object,
  events?: Object,
  onChange: any,
  label?: string,
  type?: string,
  style?: Object,
  classes?: string,
  value: any,
  invalid?: Boolean,
  invalidFeedback?: string,
  validFeedback?: string,
}

/** Creates an input component
 * 
 * @param {Object} props
 * 
 * @returns {Component}
 */
const FormGroup = ({
  children,
  label,
  type = "text",
  invalid = false,
  value,
  onChange,
  invalidFeedback = undefined,
  validFeedback = undefined,
  attrs = { required: false },
  data,
  events,
  style,
  classes = "",
}: FormGroupParams): any => {

  const id = uuidv4();
  const props = {
    id,
    type,
    value,
    onChange,
    className: `form-control ${invalid ? 'is-invalid' : 'is-valid'} ${classes}`,
    ...attrs,
    ...events,
    style,
  }

  if (data) {
    for (let entry of Object.entries(data)) {
      const [key, value] = entry;
      props[`data-${key}`] = value;
    }
  }

  const component = type === "textarea" ? <textarea {...props} ref={(e: any) => autosize(e)} /> :
    type === "select" ? <select {...props}>{children}</select> :
      <input {...props} />;

  return (
    <div className={`form-group ${type}`}>
      <ErrorBoundary>
        {label && <label className="form-label" htmlFor={id}>{label}</label>}
        {component}
        {validFeedback && <div className="valid-feedback"> {validFeedback} </div>}
        {invalidFeedback && <div className="invalid-feedback"> {invalidFeedback} </div>}
      </ErrorBoundary>
    </div>
  )
}

FormGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  invalid: PropTypes.bool,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  invalidFeedback: PropTypes.string,
  validFeedback: PropTypes.string,
  attrs: PropTypes.object,
  data: PropTypes.object,
  events: PropTypes.object,
  style: PropTypes.object,
  classes: PropTypes.string,
};

FormGroup.defaultProps = {
  type: "text",
  invalid: false,
  invalidFeedback: undefined,
  validFeedback: undefined,
  attrs: {
    required: false,
  },
  classes: ""
};

class ErrorBoundary extends React.Component {

  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error,
    };

  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error-boundary">Something went wrong. </h1>;
    } else {
      return this.props.children;
    }

  }
}

export default FormGroup;