/**
 * Code your first module here
 */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class ReactDemo extends React.Component {
  static propTypes = {
    testProps: PropTypes.bool,
  }

  static defaultProps = {
    testProps: true,
  }

  render() {
    const {
      testProps,
      ...rest
    } = this.props;
    return (
      <div {...rest}>
        Hello
        {testProps}
      </div>
    );
  }
}
