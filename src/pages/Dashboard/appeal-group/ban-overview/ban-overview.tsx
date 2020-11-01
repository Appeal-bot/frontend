import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Row } from 'antd';
import { useStoreActions, useStoreState } from '../../../../store';
import styles from './ban-overview.module.less';

// Components
import BannedGuildCard from './components/appeal-card';
import ReadMoreModal from './components/read-more-modal';

type Props = RouteComponentProps;

const BanOverview: FC<Props> = () => {
  const [loading, setLoading] = useState(true);
  const [openReadMore, setOpenReadMore] = useState(false);
  const [reasonReadMore, setReasonReadMore] = useState('');

  const member = useStoreState((state) => state.member.currentMember);
  const bannedGuilds = useStoreState((state) => state.member.bannedGuilds);

  const getBannedGuilds = useStoreActions(
    (actions) => actions.member.getBannedGuilds
  );

  const setReadMore = (reason: string) => {
    setOpenReadMore(true);
    setReasonReadMore(reason);
  };

  const closeReadMore = () => {
    setOpenReadMore(false);
  };

  useEffect(() => {
    getBannedGuilds().then(() => {
      setLoading(false);
    });
  }, [getBannedGuilds]);

  return member ? (
    <div className="site-card-wrapper">
      <ReadMoreModal
        open={openReadMore}
        text={reasonReadMore}
        close={closeReadMore}
      />
      <Row gutter={8} className={styles.appealRowCards}>
        {loading
          ? // If it's loading, load 2 skeleton templates
            [...Array(2)].map((_ewa, index) => (
              <BannedGuildCard key={index} loading={true} />
            ))
          : bannedGuilds?.map((ban, index) => {
              // If data is fetched, load the card with actual data.
              return (
                <BannedGuildCard
                  key={index}
                  readMore={setReadMore}
                  data={ban}
                  loading={false}
                />
              );
            })}
      </Row>
    </div>
  ) : null;
};

export default BanOverview;
