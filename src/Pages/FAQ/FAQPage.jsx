import React from "react";

const FAQPage = () => {
    return (
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h2 className="text-3xl font-semibold border-b-2 border-[#DA0B4E] py-6 text-center text-slate-500">
          Some Frequently Asked Questions
        </h2>
        <div>
          {/* first question */}
          <div className="my-4">
            <h4 className="text-slate-500 text-2xl font-semibold py-4">
              1. What do Online Patshala courses include?
            </h4>
            <p className="text-base font-semibold text-slate-800">
              Each of our course is created, owned and managed by the
              instructor(s). The foundation of each course are its lectures,
              which can include videos, slides, and text. In addition,
              instructors can add resources and various types of practice
              activities, as a way to enhance the learning experience of
              students
            </p>
          </div>
          {/* first question */}

          {/* second question */}
          <div className="my-4">
            <h4 className="text-slate-500 text-2xl font-semibold py-4">
              2. How do I take a Our course?
            </h4>
            <p className="text-base font-semibold text-slate-800">
              Our courses are entirely on-demand and they can be accessed from
              several different devices and platforms, including a desktop,
              laptop, and our mobile app. After you enroll in a course, you can
              access it by clicking on the course link you will receive in your
              confirmation email (provided you’re logged into your Our account).
              You can also begin the course by logging in and navigating to your
              My learning page.
            </p>
          </div>
          {/* second question */}

          {/* third question */}
          <div className="my-4">
            <h4 className="text-slate-500 text-2xl font-semibold py-4">
              3. Do I have to start my Our course at a certain time? And how
              long do I have to complete it?
            </h4>
            <p className="text-base font-semibold text-slate-800">
              There are no deadlines to begin or complete a course.
            </p>
          </div>
          {/* third question */}

          {/* fourth question */}
          <div className="my-4">
            <h4 className="text-slate-500 text-2xl font-semibold py-4">
              4. Is Our an accredited institution? Do I receive anything after I
              complete a course?
            </h4>
            <p className="text-base font-semibold text-slate-800">
              While Our is not an accredited institution, we offer skills-based
              courses taught by real-world experts in their field. Every
              approved, paid course features a certificate of completion to
              document your accomplishment.
            </p>
          </div>
          {/* fourth question */}

          {/* fifth question */}
          <div className="my-4">
            <h4 className="text-slate-500 text-2xl font-semibold py-4">
              5. How can I pay for a course?
            </h4>
            <p className="text-base font-semibold text-slate-800">
              Our supports several different payment methods, depending on your
              account country and location.
            </p>
          </div>
          {/* fifth question */}

          {/* sixth question */}
          <div className="my-4">
            <h4 className="text-slate-500 text-2xl font-semibold py-4">
              6. What if I don’t like a course I purchased?
            </h4>
            <p className="text-base font-semibold text-slate-800">
              We want you to be satisfied, so all eligible courses purchased on
              Our can be refunded within 30 days. If you are unhappy with a
              course, you can request a refund, provided the request meets the
              guidelines in our refund policy.
            </p>
          </div>
          {/* sixth question */}
        </div>
      </div>
    );
};

export default FAQPage;
