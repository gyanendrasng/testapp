import type { NextPage } from 'next';
import Header from 'components/header/header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header title="Home" />
    </div>
  );
};

export default Home;
