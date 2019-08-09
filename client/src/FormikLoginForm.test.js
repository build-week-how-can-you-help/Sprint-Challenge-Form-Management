import React from 'react';
import ReactDOM from 'react-dom';
import FormikLoginForm from './FormikLoginForm';
import * as rtl from '@testing-library/react';
import enzyme from 'enzyme';
import 'jest-dom/extend-expect';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormikLoginForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('renders "Techxnique" text', () => {
    const wrapper = rtl.render(<FormikLoginForm />);
    const hasKittensText = wrapper.queryByText(/techxnique/i);
  });

//   it("onChange param is the same value as the input element's value property", () => {
//     const mockFn = jest.fn();
//     const input = enzyme.shallow(<InputBox 
//                                     value=""
//                                     placeholder="" 
//                                     className="" 
//                                     onSearch={mockFn}/>);

//     input.find('input').simulate('change', {target: {value: 'matched'} });
//     expect(mockFn.mock.calls[0][0]).toBe('matched');
// });

// it('calls "onClick" prop on button click', () => {
//   // Render new instance in every test to prevent leaking state
//   const onClick = jest.fn();
//   const { getByText } = render(<button onClick={onClick} />);

//   fireEvent.click(getByText(/click me nao/i));
//   expect(onClick).toHaveBeenCalled();
// });


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
