import { useDarkMode } from '../../context/darkMode';

const DarkModeToggle = () => {
  const { enabled, toggle } = useDarkMode();
  return (
    <button className="fixed right-10 bottom-10" onClick={toggle}>
      {enabled ? 'dark' : 'light'}
    </button>
  );
};

export default DarkModeToggle;
