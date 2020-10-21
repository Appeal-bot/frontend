import React, { FC, useState } from 'react'
import { Layout, Menu } from 'antd';
import { navigate } from '@reach/router'
import { MenuInfo } from 'rc-menu/lib/interface.d';
import {  LogoutOutlined, HomeOutlined  } from '@ant-design/icons';
import styles from './Navbar.module.less'
import { useStoreActions } from '../../../store';
import { Member } from '../../../store/member';

interface Prop {
  member: Member
}

const Navbar: FC<Prop> = ({ member }) => {
  const [ Collapse, SetCollapsed ] = useState(false);
  const { Sider } = Layout;

  const handleClick = (info: MenuInfo): void => {
    switch (info.key) {
      case 'logout':
        logoutCurrentMember(null)
        break;
      case 'home':
        navigate('/dashboard/')
        break;
    }
  }

  const logoutCurrentMember = useStoreActions(
    (actions) => actions.member.logoutCurrentMember
  );

  return (
    <Sider
    breakpoint="lg"
    collapsible
    collapsed={Collapse}

    onBreakpoint={broken => {
      console.log(broken);
    }}

    onCollapse={SetCollapsed}

    width={256}
    >
      <div className={ styles.userSection }>
        <img src={ member.ProfileURL } alt=""/>
        <div className={styles.userSection__info}>
          <span>{ member.Username }</span>
        </div>
      </div>
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        style={{ height: '100vh', borderRight: 0 }}
      >
        <Menu.Item className={styles.logout} key="home" icon={<HomeOutlined />}>
          Appeal overview
        </Menu.Item>
        <Menu.Item className={styles.logout} key="logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Navbar;
