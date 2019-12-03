import { CoreAdminUI } from 'ra-core';
import {
  Layout as DefaultLayout,
  Loading,
  Login,
  Logout,
  NotFound,
} from '@bootstrap-styled/ra-ui';

const AdminUI = CoreAdminUI;

AdminUI.defaultProps = {
  layout: DefaultLayout,
  catchAll: NotFound,
  loading: Loading,
  loginPage: Login,
  logout: Logout,
};

AdminUI.displayName = 'AdminUI';

export default AdminUI;
