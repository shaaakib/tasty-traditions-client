import React from 'react';
import { FaPrint } from 'react-icons/fa';

export default function Blog() {
  return (
    <div>
      <div className="px-4 py-20 bg-lightblue">
        <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
          <h2 className="w-full mr-8 text-3xl font-extrabold leading-9 md:w-1/3">
            Frequently-asked questions
          </h2>
          <dl className="w-full md:w-2/3">
            <div className="flex gap-3 items-center mb-5">
              <FaPrint className="w-7 h-7" />{' '}
              <button className="group rounded-2xl h-10 w-32 bg-orange-500 font-bold text-lg text-white relative overflow-hidden ">
                Download
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
              </button>
            </div>

            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Tell us the differences between uncontrolled and controlled
                components?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                In React, there are two ways to handle form data in our
                components. The first way is by using the state within the
                component to handle the form data. This is called a controlled
                component. The second way is to let the DOM handle the form data
                by itself in the component. This is known as an uncontrolled
                component12. In a controlled component, form data is handled by
                a React component. Whereas in uncontrolled components, form data
                is handled by the DOM itself. Usage of Component State is a must
                for controlled components
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                How to validate React props using PropTypes?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                To validate React props using PropTypes, you can use the
                prop-types library. To install the prop-types library, you can
                run npm i prop-types. Then you can import PropTypes from the
                prop-types library and use it to validate your props
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Tell us the difference between nodejs and express js?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                Node.js is a platform for building server-side event-driven i/o
                applications using JavaScript. It is not a programming language
                nor a framework, but a development environment that uses
                JavaScript to write server-side code. Express.js is a framework
                based on Node.js which is used for building web-application
                using approaches and principles of Node.js event-driven
                architecture. In simpler terms, Express.js makes handling API
                requests and server management easier than using only Node.js
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                What is a custom hook, and why will you create a custom hook?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                In React, a custom Hook is a function that starts with the word
                “use” and may call other Hooks. The “useWhatever” naming
                convention mainly allows the linter to find bugs in how these
                hooks are used, for example, scenarios where their usage goes
                against the rules of Hooks. Custom hooks are used to extract
                component logic into reusable functions. When you have component
                logic that needs to be used by multiple components, you can
                extract that logic to a custom hook. Custom hooks start with
                "use"
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
