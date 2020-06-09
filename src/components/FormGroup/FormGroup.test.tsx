import React from 'react';
import { mount, shallow } from "enzyme";
import { expect } from "chai";
import FormGroup from './FormGroup';
import { FormGroupParams } from './FormGroup';


describe("<FormGroup/>", () => {

  const onChange = console.log;

  it("Should create an input ", () => {

    const value = "Hello";
    const formGroupParams: FormGroupParams = {
      onChange,
      value,
    }
    const wrapper = mount(
      <FormGroup {...formGroupParams} />
    );

    expect(wrapper.find("input")).to.have.lengthOf(1);
    expect(wrapper.find(`input[value='${value}']`)).to.have.lengthOf(1);

  });

  it("Should create a textarea", () => {
    const value = "Hello";
    const type = "textarea";
    const formGroupParams: FormGroupParams = {
      onChange,
      value,
      type,
    }
    const wrapper = mount(
      <FormGroup {...formGroupParams} />
    );

    expect(wrapper.find("textarea")).to.have.lengthOf(1);
    expect(wrapper.find(`textarea[value='${value}']`)).to.have.lengthOf(1);
  });

  it("Should create a datepicker", () => {
    const value = "23.09.1989";
    const type = "date";
    const formGroupParams: FormGroupParams = {
      onChange,
      value,
      type,
    }
    const wrapper = mount(
      <FormGroup {...formGroupParams} />
    );

    expect(wrapper.find("input")).to.have.lengthOf(1);
    expect(wrapper.find(`input[type='${type}']`)).to.have.lengthOf(1);
    expect(wrapper.find(`input[value='${value}']`)).to.have.lengthOf(1);
  });

  it("Should create a Checkbox", () => {
    const value = "true";
    const type = "checkbox";
    const formGroupParams: FormGroupParams = {
      onChange,
      value,
      type,
    }
    const wrapper = mount(
      <FormGroup {...formGroupParams} />
    );

    expect(wrapper.find("input")).to.have.lengthOf(1);
    expect(wrapper.find(`input[type='${type}']`)).to.have.lengthOf(1);
    expect(wrapper.find(`input[value='${value}']`)).to.have.lengthOf(1);
  });

  it("Should accept classes", () => {
    const value = true;
    const type = "checkbox";
    const alpha = "alpha";
    const beta = "beta";
    const classes = `${alpha} ${beta} charly delta`;
    const formGroupParams: FormGroupParams = {
      onChange,
      value,
      type,
      classes,
    }
    const wrapper = mount(
      <FormGroup {...formGroupParams} />
    );

    const input = wrapper.find("input");

    expect(input).to.have.lengthOf(1);
    expect(input.hasClass(alpha)).to.equal(true);
    expect(input.hasClass(beta)).to.equal(true);
    expect(input.hasClass("form-control")).to.equal(true);

  });

  describe("Should accept invalid", () => {

    it("Should be valid by default", () => {
      const value = "fabrigeas";
      let formGroupParams: FormGroupParams = {
        onChange,
        value,
      }
      const wrapper = mount(
        <FormGroup {...formGroupParams} />
      );

      const input = wrapper.find("input");

      expect(input.hasClass("is-valid")).to.equal(true);
      expect(input.hasClass("is-invalid")).to.equal(false);

    });

    it("Should be invalid", () => {
      const value = "";
      let formGroupParams: FormGroupParams = {
        onChange,
        value,
        invalid: true
      }
      const wrapper = mount(
        <FormGroup {...formGroupParams} />
      );

      const input = wrapper.find("input");

      expect(input.hasClass("is-invalid")).to.equal(true);
      expect(input.hasClass("is-valid")).to.equal(false);

    });

    it("Should be valid", () => {
      const value = "";
      let formGroupParams: FormGroupParams = {
        onChange,
        value,
        invalid: false
      }
      const wrapper = mount(
        <FormGroup {...formGroupParams} />
      );

      const input = wrapper.find("input");

      expect(input.hasClass("is-invalid")).to.equal(false);
      expect(input.hasClass("is-valid")).to.equal(true);

    });
  });

  it("Should accept attrs", () => {
    const value = "Hello";
    const autoComplete = "off";
    const pattern = "[A-Z]"
    const required = true;
    const autoFocus = true;
    let formGroupParams: FormGroupParams = {
      onChange,
      value,
      attrs: {
        autoComplete,
        required,
        pattern,
        autoFocus,
      }
    }
    const wrapper = shallow(
      <FormGroup {...formGroupParams} />
    );

    expect(wrapper.find(`input[autoComplete='${autoComplete}']`)).to.have.lengthOf(1);
    expect(wrapper.find(`input[required]`).exists()).to.equal(true);
    expect(wrapper.find(`input[autoFocus]`).exists()).to.equal(true);
    expect(wrapper.find(`input[pattern='${pattern}']`)).to.have.lengthOf(1);

  });

  it("Should accept style", () => {
    const value = "Hello";
    const padding = "10rem";
    const style = {
      padding
    };
    let formGroupParams: FormGroupParams = {
      onChange,
      value,
      style
    }
    const wrapper = shallow(
      <FormGroup {...formGroupParams} />
    );

  });

  it("Should accept data", () => {
    const value = "Hello";
    const name = "fabrigeas";
    const age = "30";
    const data = {
      name,
      age,
    };
    let formGroupParams: FormGroupParams = {
      onChange,
      value,
      data,
    }
    const wrapper = shallow(
      <FormGroup {...formGroupParams} />
    );

    expect(wrapper.find(`input[data-name='${name}']`).exists()).to.equal(true);
    expect(wrapper.find(`input[data-age='${age}']`).exists()).to.equal(true);

  });

  it("Should render children", () => {
    const children = [
      <option key="alpha">Alpha</option>,
      <option key="beta">beta</option>,
      <option key="charly">Charly</option>,
    ]

    const value = "Hello";
    let formGroupParams: FormGroupParams = {
      type:"select",
      onChange,
      value,
      children
    }
    const wrapper = shallow(
      <FormGroup {...formGroupParams} />
    );

    expect(wrapper.find("option") ).to.have.lengthOf(children.length)

  });

  describe("events", () => {
    it("Should have defined events", () => {
      let value = "Hello";
      const events = {
        onKeyDown: (event: any) => value = event.target.value,
        onKeyUp: (event: any) => value = event.target.value,
      };
      let formGroupParams: FormGroupParams = {
        onChange,
        value,
        events,
      }
      const wrapper = shallow(
        <FormGroup {...formGroupParams} />
      );

      const input = wrapper.find("input");

      expect( input.at(0).prop("onKeyUp") ).not.to.be.undefined
      expect( input.at(0).prop("onKeyDown") ).not.to.be.undefined
      // expect( input.at(0).prop("onKeyUp") ).to.have.lengthOf(1);
      // expect( input.at(0).prop("onKeyDown") ).to.have.lengthOf(1);
      expect( input.at(0).prop("onFocus") ).to.be.undefined

    });

    it("Should trigger onKeyUp", () => {
      let value = "Hello";
      const events = {
        onKeyDown: (event: any) => value = event.target.value,
        onKeyUp: (event: any) => value = event.target.value,
      };
      let formGroupParams: FormGroupParams = {
        onChange,
        value,
        events,
      }
      const wrapper = shallow(
        <FormGroup {...formGroupParams} />
      );

      wrapper.find("input").at(0).simulate('keyup', { 
        target: { 
          key: 'up', 
          value: "U" 
        } 
      }
      );
      expect( value ).equal( "U");

    });

    it("Should trigger onKeyDown", () => {
      let value = "Hello";
      const events = {
        onKeyDown: (event: any) => value = event.target.value,
        onKeyUp: (event: any) => value = event.target.value,
      };
      let formGroupParams: FormGroupParams = {
        onChange,
        value,
        events,
      }
      const wrapper = shallow(
        <FormGroup {...formGroupParams} />
      );

      wrapper.find("input").at(0).simulate('keyup', { 
        target: { 
          key: 'down', 
          value: "D" 
        } 
      }
      );
      expect( value ).equal( "D");

    });

  });


  // describe("invalidFeedback", () => {

  //   it("Should have no feedback", () => {
  //     const value = "Hello";
  //     let formGroupParams: FormGroupParams = {
  //       onChange,
  //       value,
  //     }
  //     const wrapper = shallow(
  //       <FormGroup {...formGroupParams} />
  //     );

  //     expect(wrapper.find(".invalid-feedback").exists()).to.equal(false);
  //     expect(wrapper.find(".valid-feedback").exists()).to.equal(false);

  //   });

  //   it("Should have valid-feedback", () => {
  //     const value = "Hello";
  //     const validFeedback = "Perfect";
  //     let formGroupParams: FormGroupParams = {
  //       onChange,
  //       value,
  //       invalid: true,
  //       validFeedback
  //     }
  //     const wrapper = shallow(
  //       <FormGroup {...formGroupParams} />
  //     );

  //     const feedback = wrapper.find(".valid-feedback");

  //     expect(feedback.exists()).to.equal(true);
  //     expect(feedback.text()).to.contain(validFeedback);
  //     expect(wrapper.find(".invalid-feedback").exists()).to.equal(false);

  //   });

  //   it("Should have invalid-feedback", () => {
  //     const value = "Hello";
  //     const invalidFeedback = "Not again !!";
  //     let formGroupParams: FormGroupParams = {
  //       onChange,
  //       value,
  //       invalid: true,
  //       invalidFeedback
  //     }
  //     const wrapper = shallow(
  //       <FormGroup {...formGroupParams} />
  //     );

  //     const feedback = wrapper.find(".invalid-feedback");

  //     expect(feedback.exists()).to.equal(true);
  //     expect(feedback.text()).to.contain(invalidFeedback);

  //     expect(wrapper.find(".valid-feedback").exists()).to.equal(false);

  //   });

  // });



});