This package is an adapter for [ra-core](https://www.npmjs.com/package/ra-core) and [@bootstrap-styled/ra-ui](https://www.npmjs.com/package/@bootstrap-styled/ra-ui)

It produce an equivalent package as [react-admin](https://www.npmjs.com/package/react-admin), except it use Bootstrap Styled by default.

You must use a `<BootstrapProvider />` to edit the `theme`.

This is how you can do using the prop [`appLayout`](https://marmelab.com/react-admin/Admin.html#applayout) on `<Admin />`:


```js static
import React from 'react';
import PropTypes from 'prop-types';
import Admin from '$PACKAGE_NAME/lib/Admin';
import DefaultLayout from '@bootstrap-styled/ra-ui/lib/components/layout/Layout';
import { REDUX_BS_KEY } from '@bootstrap-styled/redux/lib/constants';
import ConnectedBootstrapProvider from '@bootstrap-styled/redux/lib/ConnectedBootstrapProvider';
import themeReducer from '@bootstrap-styled/redux/lib/reducer';

export class App extends React.Component {
  static propTypes = {
    appLayout: PropTypes.any,
    theme: PropTypes.object,
    themes: PropTypes.object,
    initialState: PropTypes.object,
    customReducers: PropTypes.object,
  };
  static defaultProps = {
    appLayout: DefaultLayout,
    theme: undefined,
    themes: undefined,
    initialState: undefined,
    customReducers: undefined,
  };

  getAppLayout() {
    const { appLayout: Layout } = this.props;
    return (props) => (
        <ConnectedBootstrapProvider
            injectGlobal={process.env.NODE_ENV !== 'test'}
            reset={process.env.NODE_ENV !== 'test'}
        >
          <Layout {...props} />
        </ConnectedBootstrapProvider>
    );
  }
  
  render() {
    const { theme, themes, customReducers, initialState, ...rest } = this.props;
    return (
      <Admin
        appLayout={this.getAppLayout()}
        customReducers={Object.assign( { [REDUX_BS_KEY]: themeReducer }, customReducers)}
        initialState={Object.assign( { [REDUX_BS_KEY]: { theme, themes } }, initialState)}
        {...rest}
      />
    );
  }
}
```
