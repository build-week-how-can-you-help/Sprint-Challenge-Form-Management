import React from 'react';
import ReactDOM from 'react-dom';
import FormikLoginForm from './FormikLoginForm';
import * as rtl from '@testing-library/react';
// import 'jest-dom/extend-expect';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormikLoginForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('renders "Technique" text', () => {
    const wrapper = rtl.render(<FormikLoginForm />);
    const hasKittensText = wrapper.queryByText(/technique/i);
  });

  describe("ControlledForm", () => {
    let wrapper;
    let mockSubmit;  beforeEach(() => {
      mockSubmit = jest.fn();
      wrapper = shallow(<ControlledForm submit={mockSubmit} />);
    });

    describe("handleChange", () => {
      it("should call setState on title", () => {
        const mockEvent = {
          target: {
            name: "title",
            value: "test"
          }
        };    const expected = {
          title: "test",
          description: "",
          submitActive: false
        };    wrapper.instance().handleChange(mockEvent);
        
        expect(wrapper.state()).toEqual(expected);
      });
    });
 
  }
  )