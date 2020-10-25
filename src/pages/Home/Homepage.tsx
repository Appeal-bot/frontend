import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Layout, Space } from 'antd';
import styles from './Home.module.less';
// import { DiscordIcon } from '../../core/components/Icons';

// Components
import Navbar from './components/navbar';

type Props = RouteComponentProps;

const { Header, Content } = Layout;

const Homepage: FC<Props> = () => (
  <Space className={styles.wrapper} size="large" direction="vertical">
    <Layout>
      <Header className={styles['header']}>
        <Navbar />
      </Header>
      <Content>Content</Content>
    </Layout>
  </Space>
);

export default Homepage;
