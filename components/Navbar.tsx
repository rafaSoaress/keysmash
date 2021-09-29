const Navbar = () => {
  return (
    <nav className="flex flex-col w-full px-4 py-3 font-sans text-center bg-gray-800 shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
      <div className="mb-2 sm:mb-0">
        <a href="/" className="text-2xl text-white no-underline hover:text-yellow-400">KeySmash</a>
      </div>
      <div>
        <a href="/discord" className="ml-2 text-lg text-white no-underline hover:text-yellow-400">Discord</a>
        <a href="/login" className="ml-2 text-lg text-white no-underline hover:text-yellow-400">Login</a>
        <a href="/register" className="ml-2 text-lg text-white no-underline hover:text-yellow-400">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
