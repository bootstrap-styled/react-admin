// import { shallow } from 'enzyme';
// import React from 'react';
// import Admin from '../Admin';
//
// // eslint-disable-next-line
// const renderComponent = (props = {}) => shallow(<Admin {...props} />);
//
// describe('<Admin />', () => {
//   it('should render an <Admin /> tag', () => {
//     const renderedComponent = renderComponent();
//     expect(renderedComponent.length).toBe(1);
//   });
// });
const exported = require('../index');

describe('exported', () => {
  Object.keys(exported).forEach((key) => {
    it(`${key} should be exported`, () => {
      expect(exported[key]).toBeDefined();
    });
  });
  it('Admin should be exported', () => {
    expect(exported.Admin).toBeDefined();
  });
  it('AdminRouter should be exported', () => {
    expect(exported.AdminRouter).toBeDefined();
  });
});
