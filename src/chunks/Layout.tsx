import styles from './Layout.module.scss';

export function Layout(props: PropsType) {
  const {
    children,
  } = props;

  return (
    <div className={styles.block}>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

type PropsType = {
  children: React.ReactNode;
};
