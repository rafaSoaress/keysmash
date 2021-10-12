import Layout from "../components/Layout";

const Register = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen bg-gray-700">
        <div className="mx-2 my-20 grid place-items-center sm:my-auto">
          <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl">
              Register
            </h2>
            <form className="mt-10" method="POST">
              <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
              <input id="email" type="email" name="email" placeholder="e-mail address" autoComplete="email" className="block w-full px-1 py-3 mt-2 text-gray-800 border-b-2 border-gray-100 appearance-none focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
              <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
              <input id="password" type="password" name="password" placeholder="password" autoComplete="current-password" className="block w-full px-1 py-3 mt-2 mb-4 text-gray-800 border-b-2 border-gray-100 appearance-none focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
              <input id="confirm_password" type="password" name="password" placeholder="confirm password" autoComplete="current-password" className="block w-full px-1 py-3 mt-2 mb-4 text-gray-800 border-b-2 border-gray-100 appearance-none focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
              <button type="submit" className="w-full py-3 mt-10 font-medium text-white uppercase bg-gray-800 rounded-sm focus:outline-none hover:bg-yellow-500 hover:shadow-none"> Register </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
