import React from 'react';
import { Card, Avatar, Skeleton  } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { guildBan } from '../../../../../../store/member';

const { Meta } = Card;

type Props = {
  data?: guildBan
  loading: boolean
}

const AppealCard = ({ data, loading }: Props) => {
  const fallbackAvatar = 'https://discord.com/assets/1cbd08c76f8af6dddce02c5138971129.png';

  return (
  <Card
    style={{ width: 300 }}
    actions={[
      <FormOutlined key="appeal" />
    ]}
  >
    <Skeleton loading={loading} avatar active>
      <Meta
        avatar={<Avatar src={data?.guild.icon_url ?? fallbackAvatar} />}
        title={data?.guild.name ?? 'unset'}
        description={data?.reason ?? 'No reason specified'}
      />
    </Skeleton>
  </Card>
  )
};

export default AppealCard;
