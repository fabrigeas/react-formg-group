# @fabrigeas/react-form-group

This is a react single component that mimics most of the HTMLInputElements.

A Single component that can be used as:
- input of all the types i.e text, datepicked, colorpicker, numberpicker, name it yourself.
- textarea with autoresize. This means the size increases as the textarea fills up
- checkbox, radio button switch, name it yourself

## Demo

- [Codesandbox](https://codesandbox.io/s/github/fabrigeas/react-formg-group)

## Usage

    npm install @fabrigeas/react-form-group

    import FormGroup from "react-form-group"

    <FormGroup value={value} onChange={onChange}
      label="Hello"
        invalid={value.length < 3}
        invalidFeedback={"This is wrong"}
        validFeedback={"I like this"}
        data={{
          name: "fabrigeas",
          age:30,
        }}
        events={{
          onKeyUp: console.error
        }}
        attrs = {{
          required: true,
          autoComplete: "off",
          name: "Name"
        }}

        classes="green red yellow blue"
      />

## Parameters

    <FormGroup params:FormGroupParams />

    FormGroupParams {
      value: any,
      onChange: any,
      type?: string,
      label?: string,
      children?: any,
      attrs?: any,
      data?: Object,
      events?: Object,
      style?: Object,
      classes?: string,
      invalid?: Boolean,
      invalidFeedback?: string,
      validFeedback?: string,
    }


### value: {any}[Required] - the value of the input

    <FormGroup 
      value={value} 
      onChange={onChange}
    />

### onChange: {function}[Required] - the callback function to handle changes

    <FormGroup 
      value={value} 
      onChange={onChange}
    />

### type: {String}[optional] default is input type="text"

    <FormGroup 
      value={value} 
      onChange={onChange}
      label="Some label"
    />

### label: {String}[optional]

    <FormGroup 
      value={value} 
      onChange={onChange}
      label="Some label"
    />

### children: {JSX[]} [Optional] Only for select (i.e. the options)

    <FormGroup type="select" value={value} onChange={onChange} >
      <option>Alpha</option>
      <option>Beta</option>
      <option>Charly</option>
    </FormGroup>

### attrs: {Object}[Optional] contains your html attributes

    <FormGroup 
      value={value} 
      onChange={onChange}
      attrs = {{
        required: true,
        autoComplete: "off",
        name: "Name"
      }}
    />

### data: {Object}[Optional] contains your dataset properties

    <FormGroup 
      value={value} 
      onChange={onChange}
      data={{
          name: "fabrigeas",
          age:30,
        }}
    />

### events: {Object}[Optional] contains your React.Events

    <FormGroup 
      value={value} 
      onChange={onChange}
       events={{
          onKeyUp: console.log,
          onKeyDown: console.log,
        }}
    />


### style: {Object}[Optional] contains the styles for the input

    <FormGroup 
      value={value} 
      onChange={onChange}
      label="Some label"
    />

### classes {String}[Optional] a space or comma separated string of 

    <FormGroup 
      value={value} 
      onChange={onChange}
      classes="alpha beta"
    />

### invalid {Boolean} [optional] default is false

Determines the color of the input border.
green for valid, red for invalid

    <FormGroup 
      value={value} 
      onChange={onChange}
      classes="alpha beta"
    />

### invalidFeedback {String} [optional]

An error message to display below the input
Must be combined with invalid=true
    <FormGroup 
      value={value} 
      onChange={onChange}
      invalidFeedback="Please fill this input"
    />

### validFeedback {String} [optional]

A success message to display below the input
Must be combined with invalid=false
    <FormGroup 
      value={value} 
      onChange={onChange}
      validFeedback="looks good"
    />

## wari {Object}[optional] (comming soon)

Web accessibility attributes


## Todo

- Implement Wari attributes

- Optimise css becase too many redundant rules

- Implement Storybook

- Add Error boundary
