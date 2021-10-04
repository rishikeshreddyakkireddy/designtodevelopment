import "./App.css";

function App() {
  return (
    <div className="App p-5">
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 77.000000 77.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,77.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path
                d="M283 726 c-103 -34 -176 -98 -222 -196 -22 -46 -26 -69 -26 -140 0
-76 4 -93 33 -152 38 -77 92 -130 171 -167 47 -22 70 -26 141 -26 71 0 94 4
141 26 79 37 133 90 171 167 29 59 33 76 33 152 0 71 -4 94 -26 141 -58 124
-169 199 -302 205 -43 3 -89 -2 -114 -10z m177 -166 c0 -25 -136 -330 -147
-330 -7 0 -13 5 -13 11 0 27 134 329 147 329 7 0 13 -4 13 -10z m-201 -137
l-22 -23 22 -23 c18 -20 19 -26 8 -35 -11 -9 -21 -4 -47 23 l-34 35 34 35 c26
27 36 32 47 23 11 -9 10 -15 -8 -35z m281 -78 c-26 -27 -36 -32 -47 -23 -11 9
-10 15 8 35 l22 23 -21 23 c-17 18 -19 26 -10 35 10 10 20 5 47 -23 l35 -35
-34 -35z"
              />
            </g>
          </svg>
          <span className="font-semibold text-xl tracking-tight text-black">codehouse</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
              Features
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
              Solutions +
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
              Resources
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Pricing 🌶️
            </a>
          </div>
          <div>
            <button className="text-sm text-sm px-4 py-2">Log in</button>
            <button className="btn-header text-sm text-background px-4 py-2">Try for free</button>
          </div>
        </div>
      </nav>

      <div className="flex p-5 px-28 items-top justify-center mt-10">
        <div className="flex-1 mt-10">
          <p className="font-mono lg:text-6xl 2xl:text-8xl font-bold text-left mb-7">
            Get help with <br />
            coding from <br /> engineers.
          </p>
          <p className="text-left lg:text-lg text-2xl">
            Learn how to code efficiently and create <br /> apps and games that work. Consult with <br />
            best experts to apply skills in action.
          </p>
          <div className="text-left mt-10">
            <button className="btn-header text-lg md:text-sm text-background px-8 py-5">Start learning</button>
            <button className="text-sm text-lg md:text-sm px-4 py-2">
              <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>{" "}
              Watch video
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://raw.githubusercontent.com/rishikeshreddyakkireddy/designtodevelopment/main/Design6/images/img.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
