import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import styles from './navbar.module.less';
import { Button } from 'antd';
import Logo from './../../../../core/logo.png';

type Props = RouteComponentProps;

const Navbar: FC<Props> = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['header__logo']}>
        <img src={Logo} alt="Logo" />
        <h2>Shiro</h2>
      </div>
      <div className={styles['header__links']}>
        <Button type="link">About</Button>
        <Button type="link">Benefits</Button>
        <Button type="link">Plans</Button>
      </div>
    </div>
  );
};

export default Navbar;
