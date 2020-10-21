import React, { FC } from 'react';
import { Router, Redirect } from '@reach/router';
import { useStoreState } from './store';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Authorization from './pages/Authorization';

const AppRoutes: FC = () => {
  const currentMember = useStoreState((state) => state.member.currentMember);

  return (
    <Router>
      {!currentMember ? (
        <>
          <Home path="/" />
          <Authorization path="/discord-auth" />
          <Redirect from="*" to="/" noThrow />
        </>
      ) : (
        <>
          <Dashboard path="/dashboard/*" />
          <Redirect from="*" to="/dashboard" noThrow />
        </>
      )}
    </Router>
  );
};

export default AppRoutes;
