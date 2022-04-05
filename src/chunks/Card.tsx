import styles from './Card.module.scss';

export function Card(props: PropsType) {
  const {
    title,
    tools,
    linkTo,
  } = props;

  return (
    <a className={styles.block} rel="nofollow" href={linkTo} target="_blank">
      <div className={styles.side}>
        <span className={styles.title}>{title}</span>
        <span className={styles.tools}>{tools.join(', ')}</span>
      </div>
      <div className={styles.side}>
        <img className={styles.icon} src="/images/GitHub-Mark-Light-32px.png" alt="Github" />
      </div>
    </a>
  );
}

type PropsType = {
  title: string;
  tools: string[];
  linkTo: string;
};
