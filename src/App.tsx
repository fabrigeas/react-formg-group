import React, { useState } from 'react';
import './App.scss';
import FormGroup from "./components/FormGroup/FormGroup"

function App() {
  const [value, setValue] = useState("true");
  const [color, setColor] = useState("#661515");
  const [textarea, setTextarea] = useState("");
  const [selected, setSelected] = useState("Beta");
  const [date, setDate] = useState("1989-09-23");
  const onChange = ({ target }: any) => setValue(target.value)

  return (
    <div className="App" style={{
      padding: "2rem",
      margin: "auto",
      width: "80%",
    }}
    >
      <FormGroup 
        value={value} 
        onChange={onChange}
        label="Hello"
        invalid={value.length < 3}
        invalidFeedback={"This is wrong"}
        validFeedback={"I like this"}
        data={{
          name: "fabrigeas",
          age:30,
        }}
        events={{
          onKeyUp: (event: any) => console.log(event.target.value)
        }}
        attrs = {{
          required: true,
          autoComplete: "off",
          name: "Name"
        }}

        classes="green red yellow blue"
      />
  
      Textarea: {textarea}
      <FormGroup 
        type="textarea" 
        value={textarea} 
        onChange={({target}: any) => setTextarea(target.value)} 
      >
      </FormGroup>


      Datepicker: {date}
      <FormGroup 
        type="date" 
        value={date} 
        onChange={({target}: any) => setDate(target.value)} 
      />

      ColorPicker: {color}
      <FormGroup 
        type="color" 
        value={color} 
        onChange={({target}: any) => setColor(target.value)} 
      />

      Select: {selected}
      <FormGroup 
        type="select" 
        value={value} 
        onChange={({target}: any) => setSelected(target.value)} 
      >
        <option>Alpha</option>
        <option>Beta</option>
        <option>Charly</option>
      </FormGroup>

    </div>
  );
}

export default App;
