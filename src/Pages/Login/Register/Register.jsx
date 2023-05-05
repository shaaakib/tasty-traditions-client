import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {
    createUser,
    signInWithGoogle,
    signInWithGitHub,
    auth,
    setLoading,
    logOut,
  } = useContext(AuthContext);

  const [accepted, setAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    console.log(name, email, photo, password, confirm_password);

    if (password !== confirm_password) {
      setError('Your password did not match');
      return;
    } else if (password.length < 6) {
      setError('Password must be 6 characters or longer');
      return;
    }

    createUser(email, password)
      .then((result) => {
        logOut();
        navigate('/login');

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser(result.user);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.code);
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        logOut();
        navigate('/login');
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        logOut();
        navigate('/login');
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col ">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-[30rem]">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <h2 className="text-center mb-3">
              Sign Up to access your files, communicate with colleagues and view
              project content.
            </h2>
            <div className="flex items-center justify-center mb-3">
              <button
                onClick={handleGitHubSignIn}
                type="button"
                className="bg-gray-100 py-2 px-10 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                  fillRule="evenodd"
                  className=""
                >
                  <path
                    fillRule="evenodd"
                    d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                  />
                </svg>
              </button>
              <button
                onClick={handleGoogleSignIn}
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className=" py-2 px-10 ml-5 rounded-md bg-gray-100 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 26 25"
                  width="32px"
                  height="32px"
                >
                  {' '}
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </button>
            </div>
            <h3 className="text-center mb-4">Or</h3>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                required
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="photo"
                placeholder="Photo URL"
                required
              />

              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  required
                />
                {showPassword ? (
                  <FaEye
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEyeSlash
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

              <div className="relative w-full">
                <input
                  type={showConfirmPass ? 'text' : 'password'}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required
                />
                {showConfirmPass ? (
                  <FaEye
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                ) : (
                  <FaEyeSlash
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                )}
              </div>
              <p className="text-red-600 mb-3">{error}</p>
              <div className="flex items-center py-2 ">
                <input
                  onClick={handleAccepted}
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Accept Terms and Condition
                </label>
              </div>
              <button
                type="submit"
                disabled={!accepted}
                className="w-full text-center py-3 rounded bg-green-400 font-serif text-lg text-black hover:bg-green-500 focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{' '}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/login/"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>

      {/* new design */}

      {/* <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=1380&t=st=1683278833~exp=1683279433~hmac=59cce107f0ffd0a36aba7443919b752d6b37fd73b80fb5168998468c63d9b313"
              class="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div class="hidden lg:relative lg:block lg:p-12">
              <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Tasty-Tradition
              </h2>

              <p class="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main
            aria-label="Main"
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div class="max-w-xl lg:max-w-3xl">
              <div class="relative -mt-16 block lg:hidden">
                <Link class="inline-flex  items-center justify-center rounded-full bg-white text-blue-600"></Link>

                <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Tasty Traditions
                </h1>

                <p class="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
              <div className="flex  mt-5 justify-center">
                <div class="group relative inline-block rounded-full border border-current px-14 py-3 text-indigo-600 text-center  h-16 w-[30rem]">
                  <span class="text-sm text-center  font-medium transition-opacity group-hover:opacity-0">
                    Login On Social
                  </span>

                  <ul class="absolute inset-0 flex items-center justify-center gap-32 opacity-0 transition-opacity group-hover:opacity-100">
                    <li>
                      <a
                        class="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
                        href="/twitter"
                      >
                        <span class="sr-only"> Twitter </span>

                        <svg
                          class="h-14 w-14"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        class="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
                        href="/github"
                      >
                        <span class="sr-only"> GitHub </span>

                        <svg
                          class="h-14 w-14"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        class="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
                        href="/dribbble"
                      >
                        <span class="sr-only"> Dribbble </span>

                        <svg
                          class="h-14 w-14"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <form
                onSubmit={handleRegister}
                class="mt-8 grid grid-cols-6 gap-6"
              >
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="FirstName"
                    class="block text-2xl font-medium text-gray-700"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="Name"
                    name="name"
                    class="mt-1 w-full rounded-md border-gray-800 bg-white text-3xl text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="LastName"
                    class="block text-2xl font-medium text-gray-700"
                  >
                    Photo URL
                  </label>

                  <input
                    type="text"
                    id="photo"
                    name="photo"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-3xl text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-2xl font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-3xl text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="Password"
                    class="block text-2xl font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-3xl text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="PasswordConfirmation"
                    class="block text-2xl font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="confirm_password"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-3xl text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label for="MarketingAccept" class="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span class="text-xl text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div class="col-span-6">
                  <p class="text-xl text-gray-500">
                    By creating an account, you agree to our
                    <Link to="#" class="text-gray-700 underline">
                      terms and conditions
                    </Link>
                    and
                    <Link to="#" class="text-gray-700 underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                  <p className="text-red-600 mt-2">{error}</p>
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-xl font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Create an account
                  </button>

                  <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link to="/login" class="text-gray-700 underline">
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section> */}
    </div>
  );
}
