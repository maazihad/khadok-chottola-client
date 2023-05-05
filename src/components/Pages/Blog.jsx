import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
const ref = React.createRef();

const Blog = () => {

   // ======================Loading...........................
   const navigation = useNavigation();
   if (navigation.state === 'loading') {
      return <LoadingSpinner />;
   }

   return (
      <section className="max-w-7xl mx-auto sm:max-w-xl md:max-w-full relative lg:max-w-screen-xl lg:px-8 md:px-24 my-container pb-20 min-h-[calc(100vh-80px)]">
         <div className="App">
            <Pdf targetRef={ref} filename="code-example.pdf">
               {({ toPdf }) => <button className="absolute to-0 right-5 border-2 border-amber-700 px-3 py-2 rounded-full hover:bg-amber-900 hover:border-amber-400 hover:text-white bg-amber-300" onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>

               <h2 className='mb-10 text-center text-2xl text-gray-800 font-black md:text-3xl lg:text-4xl mt-10'>Answer Questions</h2>
               <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
                  <div className="collapse-title text-xl font-medium">
                     <strong>Q1 #</strong> Tell us the differences between uncontrolled and controlled components.
                  </div>
                  <div className="collapse-content">
                     <p>
                        In React, an input form element that is directly manipulated by the user is known as an uncontrolled component. On the Other hand, a controlled component is a form element that is entirely controlled by Reacts state.

                        <b>In controlled components, default values can be set easily by initializing the state with the desired values. In uncontrolled components, default values can be set using the defaultValue attribute.</b>
                     </p>
                  </div>
               </div>
               <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
                  <div className="collapse-title text-xl font-medium">
                     <strong>Q2 #</strong> How to validate React props using PropTypes ?
                  </div>
                  <div className="collapse-content">
                     <p>
                        <b>Validating React props: A good way to help you catch bugs and improve the way you receive props.</b> <br />
                        <span>
                           Props are vital for passing attributes to React components. These attributes are most often expected to be of a certain type for proper use in a component. If a prop is passed to a component other than it&apos;s original purpose, the component may not behave as expected or effectively. Thus, prop validations are a great way of improving React components.
                        </span>
                     </p>
                  </div>
               </div>
               <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
                  <div className="collapse-title text-xl font-medium">
                     <strong>Q3 #</strong> Tell us the difference between nodejs and express js.
                  </div>
                  <div className="collapse-content">
                     <p>
                        Difference between <b>node.js</b> and <b>express.js</b> are following : <br />
                        <i>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</i>
                        <br />
                        <b>Express JS : </b> <br />
                        Express is a minimal and flexible NodeJS framework that provides a robust set of features for web applications like routing, sessions, caching, etc. Comparing Node JS vs Node JS Express, the latter manages all the clutter that comes with setting up a server and gives you a simple interface to build your routes and then use them for handling requests made by the users. <br />
                        <b>Node.JS : </b> <br />
                        Node.JS uses an event-driven, non-blocking I/O model which makes it lightweight and efficient for the server environment that has to handle multiple concurrent connections with low latency. Using NodeJS will allow you to create such an application because it has high performance and speed.
                     </p>
                  </div>
               </div>
               <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
                  <div className="collapse-title text-xl font-medium">
                     <strong>Q4 #</strong> What is a custom hook, and why will you create a custom hook?
                  </div>
                  <div className="collapse-content">
                     <p>
                        <b>Custom hook is a JavaScript function whose name starts with <code>use</code> and that may call other Hooks.</b> <br />
                        I will create custom hook because of React JS hooks offer reusability as when a custom hook created. I can be reused easily, which is make my code clean and reduces the time to wite the code.
                     </p>
                  </div>
               </div>
               <div className="text-center">
                  <Link
                     to='/'
                  >
                     <button className='btn border-0 text-amber-100 bg-amber-900 py-2 px-4 rounded-3xl hover:bg-amber-700 duration-300 font-medium'>
                        <ArrowUturnLeftIcon className="h-5 w-5 text-gray-100 mr-2" />
                        Back to homepage
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Blog;


