import React, { useState, ChangeEvent } from 'react';
import './App.scss';
import FormGroup from "./components/FormGroup/FormGroup"

function App() {
  const [value, setValue] = useState("true");
  const [color, setColor] = useState("#661515");
  const [textarea, setTextarea] = useState("");
  const [selected, setSelected] = useState("Beta");
  const [date, setDate] = useState("1989-09-23");

  return (
    <div className="App" style={{
      padding: "2rem",
      margin: "auto",
      width: "80%",
    }}
    >
      <FormGroup
        value={value}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setValue(target.value)}
        label="Hello"
        invalid={value.length < 3}
        invalidFeedback={"This is wrong"}
        validFeedback={"I like this"}
        data={{
          name: "fabrigeas",
          age: 30,
        }}
        events={{
          onKeyUp: (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
        }}
        attrs={{
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
        onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>) => setTextarea(target.value)}
      >
      </FormGroup>


      Datepicker: {date}
      <FormGroup
        type="date"
        value={date}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setDate(target.value)}
      />

      ColorPicker: {color}
      <FormGroup
        type="color"
        value={color}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setColor(target.value)}
      />

      Select: {selected}
      <FormGroup
        type="select"
        value={value}
        onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) => setSelected(target.value)}
      >
        <option>Alpha</option>
        <option>Beta</option>
        <option>Charly</option>
      </FormGroup>

    </div>
  );
}

export default App;
