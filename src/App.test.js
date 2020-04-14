import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Rick & Morty App/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('render component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});