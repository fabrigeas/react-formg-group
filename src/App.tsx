import React, { useState, ChangeEvent } from 'react';
import './App.scss';
import FormGroup from "./components/FormGroup/FormGroup"

function App() {
  const [value, setValue] = useState("true");
  const [color, setColor] = useState("#661515");
  const [textarea, setTextarea] = useState("");
  const [selected, setSelected] = useState("Beta");
  const [date, setDate] = useState("1989-09-23");
  const [number, setNumber] = useState(0);
  const [week, setWeek] = useState("");

  return (
    <div className="App" style={{
      padding: "2rem",
      margin: "auto",
      width: "80%",
    }}
    >

      <ul>
        <li>Text: {value}</li>
        <li>Textarea: {textarea}</li>
        <li>Datepicker: {date}</li>
        <li>ColorPicker: {color}</li>
        <li>Select: {selected} </li>
        <li>Date: {date}</li>
      </ul>
      <FormGroup
        value={value}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setValue(target.value)}
        label="Some label:"
        invalid={value.length < 1}
        invalidFeedback={"This is wrong"}
        validFeedback={"I like this"}
        data={{
          name: "fabrigeas",
          age: 30,
        }}
        attrs={{
          required: true,
          autoComplete: "off",
          name: "Name"
        }}
        style={{
          background: "none"
        }}
        aria={{
          "aria-details": "Well-aria-works fine"
        }}
        classes="green red yellow blue"
        events={{
          // onKeyUp: (event) => setValue(event.key)
        }}
      />

      <FormGroup
        label="Textarea"
        type="textarea"
        value={textarea}
        onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>) => setTextarea(target.value)}
        attrs={{
          placeholder: "Some placeholder. This textarea will auto increase it's own size"
        }}
      >
      </FormGroup>

      <FormGroup
        label="Date picker"
        type="date"
        value={date}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setDate(target.value)}
      />

      <FormGroup
        label="Color picker"
        type="color"
        value={color}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setColor(target.value)}
      />

      <FormGroup
        label="Select"
        type="select"
        value={value}
        onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) => setSelected(target.value)}
      >
        <option>Alpha</option>
        <option>Beta</option>
        <option>Charly</option>
      </FormGroup>

      <div className="flex">
        <div>
          <FormGroup type="number"
            label="Number picker"
            invalid={number == 3}
            value={number}
            attrs={{
              min: 0,
              max: 7
            }}
            onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>) => setNumber(Number(target.value))}
          />
        </div>

        <div>
          <FormGroup type="week"
            label="Week picker"
            value={week}
            validFeedback="Looks good"
            invalidFeedback="You need to pick a week"
            attrs={{
              required: true
            }}
            onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>) => setWeek(target.value)}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
