// TODO: add contact, link to other site

const Footer = () => {
  return (
    <footer className="flex items-center h-[114px] px-5 bg-gray-100 sticky top-0 z-50">
      <div className="text-xl font-bold">
        <img src="vite.svg" alt="" />
      </div>
      <div className="flex-grow"></div>
      <nav className="flex gap-16 justify-center m-auto absolute left-1/2 transform -translate-x-1/2">
        <a href="#link1" className="text-gray-800 text-lg hover:text-blue-300">
          Home
        </a>
        <a href="#link2" className="text-gray-800 text-lg hover:text-blue-300">
          About
        </a>
      </nav>
      <div className="flex-grow"></div>
    </footer>
  );
};

export default Footer;
