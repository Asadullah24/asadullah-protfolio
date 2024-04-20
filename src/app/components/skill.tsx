import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";

const Skills=()=>{
    return(<section className="text-gray-600 body-font" id="Skills">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          SKILLS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          My Skills
        </h1>
      </div>
      <div className="flex flex-wrap flex-col lg:flex-row -m-4 ">
        {/*Skills*/}
        <div className="p-4 md:w-1/3 ">
          <div className="flex rounded-lg h-full bg-custom-image p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                
                  <circle cx={12} cy={7} r={4} />
                  <FaRegSquareCheck className="text-white text-xl"/>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                HTML             
              </h2>
            </div>
            <div className="flex-grow">
                <div className=" relative h-1 w-full  bg-gray-300 rounded-xl ">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]">
                </div>

                </div>
                <p className="font-bold text-right text-blue-500">100%</p>
                
              
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-custom-image p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                
                  <circle cx={12} cy={7} r={4} />
                  <FaRegSquareCheck className="text-white text-xl"/>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                CSS
              </h2>
            </div>
            <div className="flex-grow">
                <div className=" relative h-1 w-full  bg-gray-300 rounded-xl ">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[95%]">
                </div>

                </div>
                <p className="font-bold text-right text-blue-500">95%</p>
                
              
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-custom-image p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                
                  <circle cx={12} cy={7} r={4} />
                  <FaRegSquareCheck className="text-white text-xl"/>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                JAVASCRIPT/TYPESCRIPT
              </h2>
            </div>
            <div className="flex-grow">
                <div className=" relative h-1 w-full  bg-gray-300 rounded-xl ">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]">
                </div>

                </div>
                <p className="font-bold text-right text-blue-500">90%</p>
                
              
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-custom-image p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                
                  <circle cx={12} cy={7} r={4} />
                  <FaRegSquareCheck className="text-white text-xl"/>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                WORDPRESS
              </h2>
            </div>
            <div className="flex-grow">
                <div className=" relative h-1 w-full  bg-gray-300 rounded-xl ">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]">
                </div>

                </div>
                <p className="font-bold text-right text-blue-500">90%</p>
                
              
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-custom-image p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                
                  <circle cx={12} cy={7} r={4} />
                  <FaRegSquareCheck className="text-white text-xl"/>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                PYTHON
              </h2>
            </div>
            <div className="flex-grow">
                <div className=" relative h-1 w-full  bg-gray-300 rounded-xl ">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[65%]">
                </div>

                </div>
                <p className="font-bold text-right text-blue-500">65%</p>
                
              
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-custom-image    p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                
                  <circle cx={12} cy={7} r={4} />
                  <FaRegSquareCheck className="text-white text-xl"/>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                NEXT JS
              </h2>
            </div>
            <div className="flex-grow">
                <div className=" relative h-1 w-full  bg-gray-300 rounded-xl ">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[85%]">
                </div>

                </div>
                <p className="font-bold text-right text-blue-500">85%</p>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills;