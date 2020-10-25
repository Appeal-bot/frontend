import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Button, Space } from 'antd';
import styles from './introduction.module.less';
import { DiscordIcon, DashboardIcon } from '../../../../core/components/Icons';

type Props = RouteComponentProps;

const Introduction: FC<Props> = () => {
  return (
    <div className={styles['introduction']}>
      <h1>Ban appeal</h1>
      <p>
        An in-depth appeal system that allows you to take full control over your
        <br />
        banned members appeals.
      </p>
      <Space size="middle">
        <Button
          className={styles.invite_bot_btn}
          size="large"
          type="primary"
          href={process.env.REACT_APP_DISCORD_APP_INVITE}
          icon={<DiscordIcon />}
        >
          ADD TO DISCORD
        </Button>
        <Button
          type="primary"
          href={process.env.REACT_APP_DISCORD_AUTHORIZE_URL}
          size="large"
          className={styles.login_btn}
        >
          Login
        </Button>
      </Space>
      <DashboardIcon />
    </div>
  );
};

export default Introduction;
