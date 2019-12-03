import { CoreAdminRouter } from 'ra-core';
import { Loading } from '@bootstrap-styled/ra-ui';

const AdminRouter = CoreAdminRouter;

AdminRouter.defaultProps = {
  loading: Loading,
};

export default AdminRouter;
