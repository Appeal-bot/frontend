import React, { FC } from 'react'
import { Menu } from 'antd';
import { navigate } from '@reach/router'
import { MenuInfo } from 'rc-menu/lib/interface.d';
import {  LogoutOutlined, HomeOutlined } from '@ant-design/icons';
import styles from './Navbar.module.less'
import { useStoreActions } from '../../../store';
import { Member } from '../../../store/member';

interface Prop {
  member: Member
}

const Navbar: FC<Prop> = ({ member }) => {
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
      <Menu
        onClick={handleClick}
        className={ styles.navbar }
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <div className={ styles.userSection }>
            <img src={ member.ProfileURL } alt=""/>
            <div className={styles.userSection__info}>
              <span>{ member.Username }</span>
            </div>
        </div>
        <Menu.Item className={styles.logout} key="home" icon={<HomeOutlined />}>
          Appeal overview
        </Menu.Item>
        <Menu.Item className={styles.logout} key="logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
  )
}

export default Navbar;
