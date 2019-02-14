import CoreAdmin from 'ra-core/lib/CoreAdmin';
import DefaultLayout from '@bootstrap-styled/ra-ui/lib/components/layout/Layout';
import Loading from '@bootstrap-styled/ra-ui/lib/components/layout/Loading';
import NotFound from '@bootstrap-styled/ra-ui/lib/components/layout/NotFound';
import Login from '@bootstrap-styled/ra-ui/lib/components/auth/Login';
import Logout from '@bootstrap-styled/ra-ui/lib/components/auth/Logout';

const Admin = CoreAdmin;

Admin.defaultProps = {
  appLayout: DefaultLayout,
  catchAll: NotFound,
  loading: Loading,
  loginPage: Login,
  logoutButton: Logout,
};

export default Admin;
