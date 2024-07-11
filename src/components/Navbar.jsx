import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto-w-7xl px-2 sn:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 item-center justify-center md:items-stretch md:justify-start">
            <a
              className="flex flex-shrink-0 items-center mr-4"
              href="/index.html"
            >
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </a>
            <div className="md:ml-auto">
              <a href="./index.html" className="text-white bg-black"></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
