import React, { FC } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { Layout } from 'antd';
import styles from './Dashboard.module.less';
import { useStoreState } from '../../store';
import Navbar from './../../core/components/Navbar'

// Pages
import Home from './Home';


type Props = RouteComponentProps;

const Dashboard: FC<Props> = () => {
  const member = useStoreState(state => state.member.currentMember)
  const { Content, Sider } = Layout;

  return member? (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Navbar member={member} />
      </Sider>
      <Layout>
        <Content className={styles.dashboard}>
          <Router>
            <Home path="*" />
          </Router>
        </Content>
      </Layout>
    </Layout>
  ): null
};

export default Dashboard;
