import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Row } from 'antd';
import { useStoreActions, useStoreState } from '../../../../store';

import BannedGuildCard from './components/appeal-card';

type Props = RouteComponentProps;

const AppealOverview: FC<Props> = () => {
  const [loading, setLoading] = useState(true);
  const member = useStoreState((state) => state.member.currentMember);
  const bannedGuilds = useStoreState((state) => state.member.bannedGuilds);

  const getBannedGuilds = useStoreActions(
    (actions) => actions.member.getBannedGuilds
  );

  useEffect(() => {
    getBannedGuilds().then(() => {
      setLoading(false);
    });
  }, [getBannedGuilds]);

  return member ? (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {loading
          ? // If it's loading, road 2 skeleton templates
            [...Array(2)].map((_ewa, index) => (
              <BannedGuildCard key={index} loading={true} />
            ))
          : bannedGuilds?.map((ban, index) => {
              // If data is fetched, load the card with actual data.
              return <BannedGuildCard key={index} data={ban} loading={false} />;
            })}
      </Row>
    </div>
  ) : null;
};

export default AppealOverview;
