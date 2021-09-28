const Navbar = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-3 px-4 bg-gray-800 shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a href="/home" className="text-2xl no-underline text-white hover:text-yellow-400">Home</a>
      </div>
      <div>
        <a href="" className="text-lg no-underline text-white hover:text-yellow-400 ml-2">One</a>
        <a href="" className="text-lg no-underline text-white hover:text-blue-400 ml-2">Two</a>
        <a href="" className="text-lg no-underline text-white hover:text-yellow-400 ml-2">Three</a>
      </div>
    </nav>
  );
};

export default Navbar;
