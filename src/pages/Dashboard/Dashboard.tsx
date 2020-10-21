import React, { FC } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { Layout } from 'antd';
import { useStoreState } from '../../store';
import Navbar from './../../core/components/Navbar'

// Pages
import AppealOverview from './appeal-group/appeal-overview';

type Props = RouteComponentProps;

const Dashboard: FC<Props> = () => {
  const member = useStoreState(state => state.member.currentMember)
  const { Content } = Layout;

  return member? (
    <Layout>
      <Navbar member={member} />
      <Layout style={{ padding: '24px 24px 24px' }}>
        <Content>
          <Router>
            {/* Define pages in here :D */}
            <AppealOverview path="*" />
          </Router>
        </Content>
      </Layout>
    </Layout>
  ): null
};

export default Dashboard;
