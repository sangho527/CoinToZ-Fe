import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('거래소', 'sub1', <MailOutlined />),
  getItem('매매일지', 'sub2', <AppstoreOutlined />),
  getItem('커뮤니티', 'sub4', <SettingOutlined />)
];
const SideMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default SideMenu;