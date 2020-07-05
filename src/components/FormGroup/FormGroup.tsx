import React, { ReactElement, ErrorInfo, ChangeEventHandler, ReactNode } from 'react';
import './FormGroup.scss';
import autosize from 'autosize';
import { v4 as uuidv4 } from 'uuid';

export interface FormGroupParams {
  children?: React.ReactNode,
  attrs?: React.HTMLProps<Element>,
  data?: Object,
  events?: React.DOMAttributes<ReactNode>,
  onChange: ChangeEventHandler,
  label?: string,
  type?: string,
  style?: React.CSSProperties,
  classes?: string,
  value: any,
  invalid?: Boolean,
  invalidFeedback?: string,
  validFeedback?: string,
  [index: string]: any,
  aria?: React.AriaAttributes
}

/** Creates an input FormControl
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
  aria = {

  },
}: FormGroupParams): ReactElement => {

  const id = uuidv4();
  const props: FormGroupParams = {
    id,
    type,
    value,
    onChange,
    className: `form-control ${invalid ? 'is-invalid' : 'is-valid'} ${classes}`,
    ...attrs,
    ...events,
    style,
    ...aria
  }

  // if (aria) {
  //   props.aria = { ...aria }
  // }

  if (data) {
    for (let entry of Object.entries(data)) {
      const [key, value] = entry;
      props[`data-${key}`] = value;
    }
  }

  const FormControl = type === "textarea" ? <textarea {...props} ref={(e: any) => autosize(e)} /> :
    type === "select" ? <select {...props}>{children}</select> :
      <input {...props} />;

  return (
    <div className={`form-group ${type}`}>
      <ErrorBoundary>
        {label && <label className="form-label" htmlFor={id}>{label}</label>}
        {FormControl}
        {validFeedback && <div className="valid-feedback"> {validFeedback} </div>}
        {invalidFeedback && <div className="invalid-feedback"> {invalidFeedback} </div>}
      </ErrorBoundary>
    </div>
  )
}

interface Props {
  children: React.ReactNode
}

type State = {
  hasError: boolean,
  error: Error | null,
  errorInfo: ErrorInfo | null,
}

class ErrorBoundary extends React.Component<Props, State> {

  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };

  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
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