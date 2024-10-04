const Students = () => {
  return (
    <div
      id="students"
      className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10"
    >
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-2xl text-blue-300 font-bold text-center md:text-4xl">
          "Pure Hardwork, No Shortcuts!"
        </p>
        <div className="w-40 h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly">
        <div className="w-46 mb-12 items-center flex flex-col">
          <img
            className="w-30 h-28 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QQJ8abcWa_d3RVAYnS3SI__zSi6sBTBeuQ&s"
            alt=""
          />
          <p className="text-3xl font-bold text-white m-1">600+</p>
          <p className="text-3xl font-bold text-gray-600">Different Courses</p>
        </div>
        <div className="w-46 mb-12 items-center flex flex-col">
          <img
            className="w-30 h-28 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLfCgfAlnry4KwGMMcUiqNCNh3j4Y-fMH4phafFU3l6VMY7RSUx0N3oa5kEQGLrzT91A&usqp=CAU"
            alt=""
          />
          <p className="text-3xl font-bold text-white m-1">700,000+</p>
          <p className="text-3xl font-bold text-gray-600">Students Enrolled</p>
        </div>
        <div className="w-46 mb-12 items-center flex flex-col">
          <img
            className="w-30 h-28 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIQBkgkypucAaF7XdwPx8SEoc3O7dzrU7PDxI5HNkcI2IDa3yzQVZBWo85iI6WlIUhoo&usqp=CAU"
            alt=""
          />
          <p className="text-3xl font-bold text-white m-1">10,000+</p>
          <p className="text-3xl font-bold text-gray-600">
            Successful Transition
          </p>
        </div>
      </div>
      <div className="w-100 h-auto flex flex-wrap flex-col items-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-2xl text-blue-300 font-bold text-center md:text-4xl">
            "Our Products"
          </p>
          <div className="w-40 h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
      </div>
      <div className="w-[90%] h-auto flex flex-wrap justify-between">
        <div className="w-64 flex flex-col items-center mb-12 border-2 border-white rounded-xl p-4">
          <img
            className="w-30 h-28 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwXWelzZ81ybfQO0xQLLb6yesKNXftbtKLX1PJrv0IQfCRq5qlzYMU5SRDl3xc9h2eA4&usqp=CAU"
            alt=""
          />
          <p className="text-2xl text-white font-bold m-1">PW Skills lab</p>
          <p className="text-md text-gray-500 font-bold">
            Supercharge your projects development with ourrobust lab
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12 p-2">
          <img
            className="w-30 h-28 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQz9PHbAKe8rBntJq_VhD9C47sHhnIRl4Z60vlkMJAS5w24dQyOZjj0RlsH9sd4WrfMX0&usqp=CAU"
            alt=""
          />
          <p className="text-2xl text-white font-bold m-1">Job Portal</p>
          <p className="text-md text-gray-500 font-bold">
            Use exceptional tempelates for a standout resume minus the signup
            process.
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12 p-2">
          <img
            className="w-30 h-28 rounded-3xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaY3jnc9rlMs8r7sTsR-xfUgCqu0UP_851mp2fvYgAnTjdnpqnnQLyRPGqbTWEA9hqh8&usqp=CAU"
            alt=""
          />
          <p className="text-2xl text-white font-bold m-1">Experience Portal</p>
          <p className="text-md text-gray-500 font-bold">
            PW Skill'self-based experince portal priorities hands-on training
            with 570+ internship projects.
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12 p-2">
          <img
            className="w-30 h-28 rounded-xl"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <p className="text-2xl text-white font-bold m-1">Hall of Fame</p>
          <p className="text-md text-gray-500 font-bold">
            Our student placements and 100k+ career transitions speak volumes
            about our courses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Students;
