import type { NextPage } from 'next';

import { Group } from '@chunks/Group';

import styles from './index.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.block}>
      <div className={styles.info}>
        <span className={styles.infoText}>Alexei Saenko</span>
      </div>
      <div className={styles.item}>
        <Group text="Skills:">
          <Group.Tag text="HTML" />
          <Group.Tag text="CSS" />
          <Group.Tag text="SCSS" />
          <Group.Tag text="Javascript" />
          <Group.Tag text="Typescript" />
          <Group.Tag text="React" />
        </Group>
      </div>
      <div className={styles.item}>
        <Group text="Tools & Frameworks:">
          <Group.Tag text="Webpack" />
          <Group.Tag text="Redux Toolkit" />
          <Group.Tag text="React Hook Form" />
          <Group.Tag text="Formik" />
          <Group.Tag text="Framer Motion" />
          <Group.Tag text="Prisma" />
          <Group.Tag text="Nextjs" />
        </Group>
      </div>
      <div className={styles.item}>
        <Group text="Examples:">
          <Group.Card
            title="Sandbox"
            tools={[
              'SCSS',
              'Typescript',
              'React',
              'Redux Toolkit',
              'React Hook Form',
              'Framer Motion',
              'Prisma',
              'Nextjs',
            ]}
            linkTo="https://github.com/elseify/sandbox"
          />
          <Group.Card
            title="Personal"
            tools={[
              'SCSS',
              'Typescript',
              'React',
              'Nextjs',
            ]}
            linkTo="https://github.com/elseify/personal"
          />
        </Group>
      </div>
    </div>
  );
}

export default Home;
