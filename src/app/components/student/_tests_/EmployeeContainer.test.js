import React from 'react';

import { shallow } from 'enzyme'
import EmployeeContainer from "../EmployeeContainer"
describe("Test EmployeeContainer", () => {
  it("should render my component", () => {
    expect(shallow(<EmployeeContainer></EmployeeContainer>).toMatchSnapshot());  
 
  });

}); 