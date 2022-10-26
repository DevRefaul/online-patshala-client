import React from "react";

const Blogs = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-8">
      <h2 className="text-3xl font-bold text-[#DA0B4E] text-center border-b-2 border-[#DA0B4E] py-4 ">
        Our Blogs
      </h2>

      {/* questions answers */}

      <div className="mt-6">
        {/* first question and answer */}
        <div className="border-l-2 border-[#DA0B4E] pl-4 mt-6">
          <img
            className="md:w-[50%] xl:w-[30%]"
            src="https://i.ibb.co/B37qSKb/cors.png"
            alt=""
          />
          <h2 className="text-slate-500 md:text-2xl font-semibold py-4">
            What is CORS ?
          </h2>
          <p className="text-base font-semibold">
            “CORS” stands for Cross-Origin Resource Sharing. It allows you to
            make requests from one website to another website in the browser,
            which is normally prohibited by another browser policy called the
            Same-Origin Policy (SOP). CORS allows servers to specify certain
            trusted ‘origins’ they are willing to permit requests from. Origins
            are defined as the combination of protocol, host and port. Browsers
            which implement the CORS policy will include a HTTP header called
            ‘Origin’ in requests made with AJAX, including above information the
            value.
          </p>
        </div>
        <hr className="w-[40%] mx-auto my-4 border-[#DA0B4E]" />
        {/* first question and answer */}

        {/* second question and answer */}
        <div className="border-l-2 border-[#DA0B4E] pl-4 ">
          <img
            className="md:w-[50%] xl:w-[30%]"
            src="https://i.ibb.co/bsV1c4G/download.png"
            alt=""
          />
          <h2 className="text-slate-500 md:text-2xl font-semibold py-4">
            Why we are using Firebase? What other options do we have there for
            Authentication?
          </h2>
          <p className="text-base font-semibold">
            Firebase is powered by Google. We all know Googl's capabilities. So
            one of the main concern using Firebase is the brand value of Google.
            There are more pros using Firebase some of them are listed below.
          </p>
          <ul className="font-bold text-xl">
            <li>Reliable & Extensive Databases</li>
            <li>Realtime Database</li>
            <li>Fast & Safe Hosting</li>
            <li>Google Analytics</li>
            <li>Free Multi-Platform Firebase Authentication and many more.</li>
          </ul>
          {/* second question */}
          <p className="text-base font-semibold my-4">
            There are some alternatives ou there besides Firebase for
            Authentication like - <br />
          </p>
          <ul className="font-bold text-xl">
            <li>Auth0</li>
            <li>Okta</li>
            <li>Amazon cognito</li>
            <li>JSON Web Token</li>
          </ul>
        </div>
        <hr className="w-[40%] mx-auto my-4 border-[#DA0B4E]" />
        {/* second question and answer */}

        {/* third question and answer */}
        <div className="border-l-2 border-[#DA0B4E] pl-4 mt-6">
          <img
            className="md:w-[50%] xl:w-[30%]"
            src="https://i.ibb.co/tsdn7vM/1-Zg-Wg-OXWVt-GFCNpo-RSj-Od-Og.jpg"
            alt=""
          />
          <h2 className="text-slate-500 md:text-2xl font-semibold py-4">
            How does Private Route work?
          </h2>
          <p className="text-base font-semibold">
            Private route means that some of our website components or pages is
            sensitive and we don't wan't to share it with anonymous persons. We
            need a user to be logged in to see those informations. Private
            routes renders its children component if the user is logged in.
            Otherwise if anyone want to access the information we will redirect
            it to login page the return url passed in the location state
            property. That's how Private route works.
          </p>
        </div>
        <hr className="w-[40%] mx-auto my-4 border-[#DA0B4E]" />
        {/* third question and answer */}

        {/* fourth question and answer */}
        <div className="border-l-2 border-[#DA0B4E] pl-4 mt-6">
          <img
            className="md:w-[50%] xl:w-[30%]"
            src="https://i.ibb.co/31DDt4x/1-ptv-Sd-Ukny-Ebem-XJOh9w-Niw.png"
            alt=""
          />
          <h2 className="text-slate-500 md:text-2xl font-semibold py-4">
            What is Node.js? How does Node works?
          </h2>
          <p className="text-base font-semibold">
            <span className="ml-5 text-xl font-bold">What is Node.js : </span>{" "}
            Node.js is a javascript runtime that helps to run javascript on the
            browser.Node.js is an open-source and cross-platform JavaScript
            runtime environment.Node.js runs the V8 JavaScript engine, the core
            of Google Chrome, outside of the browser. This allows Node.js to be
            very performant.Node.js has a unique advantage because millions of
            frontend developers that write JavaScript for the browser are now
            able to write the server-side code in addition to the client-side
            code without the need to learn a completely different language.
          </p>
          {/* second ans */}
          <p className="text-base font-semibold my-4">
            <span className="ml-5 text-xl font-bold">
              How does Node.js Works:{" "}
            </span>
            As we know Node.js is a Javascript runtime that helps Javascript
            code run on browser. Node.js uses Chrome V8 engine to convert
            javascript code that machine can understand it. It is highly
            scalable, lightweight, fast, and data-intensive. And in this way
            Javascript can be used both in frontend and backend.
          </p>
        </div>
        <hr className="w-[40%] mx-auto my-4 border-[#DA0B4E]" />
        {/* fourth question and answer */}
      </div>

      {/* questions answers */}
    </div>
  );
};

export default Blogs;
