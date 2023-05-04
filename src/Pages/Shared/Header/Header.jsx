import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import tilte_icons from '../../../assets/fork.png';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <nav className="w-full bg-gray-100 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <div className="flex items-center gap-5">
                <img className="w-10" src={tilte_icons} alt="" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Tasty Traditions
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-800 hover:text-indigo-200">
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'default'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-gray-800 hover:text-indigo-200">
                <NavLink
                  to="/blog/"
                  aria-label="Blog"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'default'
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="text-gray-800 hover:text-indigo-200">
                <NavLink
                  to="/about/"
                  aria-label="About Us"
                  title="About Us"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'default'
                  }
                >
                  About US
                </NavLink>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:hidden">
              {user ? (
                <button
                  onClick={handleLogOut}
                  class="group rounded-2xl h-12 w-32 bg-orange-500 font-bold text-lg text-white relative overflow-hidden mt-5"
                >
                  Logout
                  <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                </button>
              ) : (
                <Link to="/login/">
                  <button class="group rounded-2xl h-12 w-32 bg-orange-500 font-bold text-lg text-white relative overflow-hidden mt-5">
                    Login
                    <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                  </button>
                </Link>
              )}
              {user && (
                <div>
                  {user.photoURL ? (
                    <img
                      className="w-14 rounded-full"
                      title={user.displayName}
                      src={user.photoURL}
                      alt="Profile"
                    />
                  ) : (
                    ''
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hidden space-x-3  md:flex md:items-center md:justify-center ">
          {user ? (
            <button
              onClick={handleLogOut}
              className="group px-4 py-2 mb-5 group rounded-2xl h-12 w-32 bg-orange-500 font-bold text-lg text-white relative overflow-hidden mt-5 "
            >
              Logout
              <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
            </button>
          ) : (
            <Link to="/login/">
              <button className="px-4  py-2 mb-5 e bg-orange-500  shadow group rounded-2xl h-12 w-32  font-bold text-lg text-white relative overflow-hidden mt-5 ">
                Login
                <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
              </button>
            </Link>
          )}

          {user && (
            <div>
              {user.photoURL ? (
                <img
                  className="w-14 rounded-full"
                  title={user.displayName}
                  src={user.photoURL}
                  alt="Profile"
                />
              ) : (
                ''
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
