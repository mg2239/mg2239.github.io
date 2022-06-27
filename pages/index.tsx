import { GetServerSideProps } from 'next';
import Intro from '../components/Intro/Intro';
import Music from '../components/Music/Music';
import DarkModeToggle from '../components/DarkModeToggle/DarkModeToggle';
import { AlbumType } from '../types';
import { getAlbums } from '../util/spotify';
import { DarkModeProvider } from '../context/darkMode';
import Head from '../components/Head/Head';

export const getServerSideProps: GetServerSideProps = async () => {
  const { albums } = await getAlbums();
  return { props: { albums } };
};

type HomeProps = {
  albums: AlbumType[];
};

const Home = ({ albums }: HomeProps) => {
  return (
    <>
      <Head />
      <div className="flex flex-col pt-16 pb-16 m-auto sm:pr-2 sm:pl-2 sm:max-w-screen-md">
        <Intro />
        <Music albums={albums} />
      </div>
    </>
  );
};

export default Home;
