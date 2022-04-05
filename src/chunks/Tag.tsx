import styles from './Tag.module.scss';

export function Tag(props: PropsType) {
  const {
    text,
  } = props;

  return (
    <div className={styles.block}>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

type PropsType = {
  text: string;
};
