import React from 'react'
import weather from '../assets/weather-app.png'
import paint from '../assets/paint.png'
import rockPaperScissors from '../assets/rock-paper-scissors.png'
import fastFood from '../assets/fast-food.png'
import ship from '../assets/ship.png'
import shoppingCart from '../assets/shopping-cart.png'
import dogFood from '../assets/dog-food.png'



function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>// Chek out some of favourite work</p>
        </div>
             {/*container*/}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


              {/* Grid item */}
            <div style={{backgroundImage: `url(${weather})`}}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      
                      Weather App application

                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://thomas-boop.github.io/Weather-app/">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href="https://github.com/Thomas-boop/Weather-app">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>
                    </div>
                    
                  </div>
            </div>

            <div style={{backgroundImage: `url(${paint})`}}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      
                      Etch-A-Sketch

                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://thomas-boop.github.io/Etch-a-sketch/">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href="https://github.com/Thomas-boop/Etch-a-sketch">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>
                    </div>

                  </div>
            </div>

            <div style={{backgroundImage: `url(${fastFood})`}}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      
                      Restaurant Site 

                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://resturant-page-8xb0td0g4-thomas-boop.vercel.app/">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href="https://github.com/Thomas-boop/resturant-page">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>
                    </div>

                  </div>
            </div>

            <div style={{backgroundImage: `url(${dogFood})`}}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      
                      Puppies landing page

                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://thomas-boop.github.io/Landing-page/">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href="https://github.com/Thomas-boop/Landing-page">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>
                    </div>

                  </div>
            </div>

            <div style={{backgroundImage: `url(${shoppingCart})`}}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      
                      React Fake Store project

                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://thomas-boop.github.io/shopping-cart/">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href="https://github.com/Thomas-boop/shopping-cart">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>
                    </div>

                  </div>
            </div>

            <div style={{backgroundImage: `url(${rockPaperScissors})`}}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      
                      Rock Paper Scissors

                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://thomas-boop.github.io/RockPaperScissors/">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href="https://github.com/Thomas-boop/RockPaperScissors">
                        <button className='text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>
                    </div>

                  </div>
            </div>

            

          </div>

      </div>

    </div>
  )
}

export default Work