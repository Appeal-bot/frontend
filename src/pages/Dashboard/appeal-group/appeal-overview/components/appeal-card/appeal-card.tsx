import React, { FC } from 'react';
import { Card, Avatar, Skeleton, Tag, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { guildBan } from '../../../../../../store/member';
import styles from './appeal-card.module.less';

interface Props {
  readMore?: (reason: string) => void;
  data?: guildBan;
  loading: boolean;
}

const AppealCard: FC<Props> = ({ data, loading, readMore }: Props) => {
  const fallbackAvatars = [
    'https://discord.com/assets/1cbd08c76f8af6dddce02c5138971129.png',
    'https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png',
    'https://discord.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png',
    'https://discord.com/assets/322c936a8c8be1b803cd94861bdfa868.png',
  ];

  // Get a random avatar from the array. !! THIS IS FALLBACK !!
  const fallbackAvatar =
    fallbackAvatars[Math.floor(Math.random() * fallbackAvatars.length)];

  const formatBanReason = (reason: string) => {
    if (reason.length < 18) return <p>{reason}</p>;
    if (readMore === undefined) return;

    return (
      <p>
        {reason.substr(0, 17)}{' '}
        <span
          className={styles['appeal-read-more']}
          onClick={() => readMore(reason)}
        >
          -.....
        </span>
      </p>
    );
  };

  return (
    <Card style={{ width: 300 }} className={styles['appeal-card']}>
      <Skeleton loading={loading} avatar active>
        <div className={styles['card-header']}>
          <Avatar
            size={64}
            className={styles['server-icon']}
            src={data?.guild.icon_url ?? fallbackAvatar}
          />
          <Tag className={styles['appeal-status']} color="orange">
            Awaiting appeal
          </Tag>
        </div>
        <div className={styles['card-body']}>
          <h3>{data?.guild.name ?? 'unset'}</h3>
          {formatBanReason(data?.reason ?? 'No reason specified')}
        </div>
        <Button className={styles['card-button-appeal']} type="primary">
          <FormOutlined key="appeal" />
        </Button>
      </Skeleton>
    </Card>
  );
};

export default AppealCard;
