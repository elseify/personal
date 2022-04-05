import { Card } from '@chunks/Card';
import { Tag } from '@chunks/Tag';

import { classNames as cn } from '@utils/classnames';

import styles from './Group.module.scss';

export function Group(props: PropsType) {
  const {
    text,
    children,
  } = props;

  return (
    <div className={styles.block}>
      <div className={styles.info}>
        <span className={styles.infoText}>{text}</span>
      </div>
      <div className={styles.list}>
        {children}
      </div>
    </div>
  );
}

Group.Card = (props: React.ComponentProps<typeof Card>) => {
  return (
    <div className={cn(styles.listItem, '_fill')}>
      <Card {...props} />
    </div>
  );
};

Group.Tag = (props: React.ComponentProps<typeof Tag>) => {
  return (
    <div className={cn(styles.listItem, '_fit')}>
      <Tag {...props} />
    </div>
  );
};

type PropsType = {
  text: string;
  children: React.ReactNode;
};
