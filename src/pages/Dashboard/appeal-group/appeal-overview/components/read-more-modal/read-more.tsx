import React, { FC } from 'react';
import { Modal } from 'antd';
import styles from './read-more.module.less';

interface Props {
  open: boolean;
  close: () => void;
  text: string;
}

const AppealCard: FC<Props> = ({ open, text, close }: Props) => {
  return (
    <Modal
      wrapClassName={styles['read-more-modal']}
      visible={open}
      onCancel={close}
      closable={false}
      footer={null}
      width={275}
    >
      <p>{text}</p>
    </Modal>
  );
};

export default AppealCard;
