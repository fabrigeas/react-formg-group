import React from 'react';
import './FormGroup.scss';
import autosize from 'autosize';
import { v4 as uuidv4 } from 'uuid';

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
export default ({
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
}: FormGroupParams) => {

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


  const component = type === "textarea" ? <textarea {...props} ref={(e:any) =>  autosize(e)}/> :
                    type === "select"   ? <select {...props}>{children}</select> :
                                          <input {...props}/>;

  return (
    <div className={`form-group ${type}`}>
      {label && <label className="form-label" htmlFor={id}>{label}</label>}
      {component}
      {validFeedback && <div className="valid-feedback"> {validFeedback} </div>}
      {invalidFeedback && <div className="invalid-feedback"> {invalidFeedback} </div>}
    </div>
  )
}