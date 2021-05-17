import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../services/prismic';

import { FiCalendar, FiUser } from 'react-icons/fi'
import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <main className={commonStyles.contentContainer}>

        <section className={styles.content}>
          <img src="/images/Logo.png" alt="spacetraveling" />
          <strong>Como utilizar Hooks</strong>
          <h2>Pensando em sincronização em vez de ciclos de vida.</h2>
          <div className={styles.authorContainer}>
            <FiCalendar />
            <p>15 Mar 2021</p>
            <FiUser />
            <p>Joseph Oliveira</p>
          </div>

          <strong>Como utilizar Hooks</strong>
          <h2>Pensando em sincronização em vez de ciclos de vida.</h2>
          <div className={styles.authorContainer}>
            <FiCalendar />
            <p>15 Mar 2021</p>
            <FiUser />
            <p>Joseph Oliveira</p>
          </div>

          <strong>Como utilizar Hooks</strong>
          <h2>Pensando em sincronização em vez de ciclos de vida.</h2>
          <div className={styles.authorContainer}>
            <FiCalendar />
            <p>15 Mar 2021</p>
            <FiUser />
            <p>Joseph Oliveira</p>
          </div>

          <button>Carregar mais posts</button>
        </section>
      </main>
    </>
  )
}


// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
