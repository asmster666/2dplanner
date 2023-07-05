import { 
  DashboardOutlined,
  TeamOutlined,
  BuildOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]

const appsNavTree = [{
  key: 'apps',
  path: `${APP_PREFIX_PATH}/clients`,
  title: 'Apps',
  icon: TeamOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'Clients',
      icon: TeamOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'clients-user-list',
          path: `${APP_PREFIX_PATH}/clients/user-list`,
          title: 'User List',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: '2d_planner',
      path: `${APP_PREFIX_PATH}/planner`,
      title: '2d planner',
      icon: BuildOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...appsNavTree
]

export default navigationConfig;
