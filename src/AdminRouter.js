import CoreAdminRouter from 'ra-core/lib/CoreAdminRouter';
import Loading from '@bootstrap-styled/ra-ui/lib/components/layout/Loading';

const AdminRouter = CoreAdminRouter;

AdminRouter.defaultProps = {
  loading: Loading,
};

export default AdminRouter;
