import React, { FC, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { navigate } from '@reach/router';
import { MenuInfo } from 'rc-menu/lib/interface.d';
import { LogoutOutlined } from '@ant-design/icons';

import styles from './Navbar.module.less';
import { useStoreActions } from '../../../store';

import Logo from './../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faStickyNote } from '@fortawesome/free-solid-svg-icons';

const Navbar: FC = () => {
  const [Collapse, SetCollapsed] = useState(false);
  const { Sider } = Layout;

  const handleClick = (info: MenuInfo): void => {
    switch (info.key) {
      case 'logout':
        logoutCurrentMember(null);
        break;
      case 'overview':
        navigate('/dashboard/');
        break;
    }

    // It needs 5ms delay because yes.
    setTimeout(() => {
      moveActivePage();
    }, 5);
  };

  useEffect(() => {
    // It needs 5ms delay because yes.
    setTimeout(() => {
      moveActivePage();
    }, 5);
  });

  const logoutCurrentMember = useStoreActions(
    (actions) => actions.member.logoutCurrentMember
  );

  const getOffset = (el) => {
    const rect = el.getBoundingClientRect();

    return rect.top + 0;
  };

  const moveActivePage = () => {
    const element: any = document.querySelector('.ant-menu-item-selected');
    const moveElement: any = document.querySelector(
      `.${styles.moveActiveThing}`
    );

    if (moveElement == null || element === null) return;

    moveElement.style.top = `${getOffset(element)}px`;
  };

  return (
    <Sider
      breakpoint="lg"
      collapsed={Collapse}
      onCollapse={SetCollapsed}
      className={styles.dashboardNavbar}
      width={256}
    >
      <div className={styles.companySection}>
        <img src={Logo} alt="" />
        <div className={styles.companySection__info}>
          <span>Shiro</span>
        </div>
      </div>
      <div className={styles.moveActiveThing}></div>
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={['overview']}
        mode="inline"
        className={styles.dashboardMenu}
        style={{ height: '100vh', borderRight: 0 }}
      >
        <Menu.Item
          className={styles.menuItem}
          key="overview"
          icon={<FontAwesomeIcon icon={faServer} />}
        >
          Servers
        </Menu.Item>
        <Menu.Item
          className={styles.menuItem}
          key="home"
          icon={<FontAwesomeIcon icon={faStickyNote} />}
        >
          Appeals
        </Menu.Item>
        <Menu.Item
          className={styles.menuItemLogout}
          key="logout"
          icon={<LogoutOutlined />}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;
