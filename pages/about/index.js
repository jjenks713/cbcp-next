import Head from "next/head"
import Link from 'next/link'
import Image from 'next/image'
import Navigator from '../../components/navigator'

export default function About() {


  return (
    <>
    <Navigator></Navigator>
      <div className="grid justify-center px-3 py-10 font-Nanum">
        <h1 className="uppercase font-bold leading-snug text-black"
        style={{
          fontSize: '40px'
        }}
        >About</h1>

      </div>

      <div className="container mx-auto px-4 grid justify-center font-Nanum">
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
        <div className="h-auto md:h-auto lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
            <img
            src='/images/alice.jpg'
            alt='CBCP profile' />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 uppercase font-bold">Creepy but Cute Press</div>
            <p className="text-gray-700 text-base">
            I believe in making a living out of something you love doing. When I was given the ultimate question in school, “What do you want to be when you grow up?” – I had no clue. People kept saying that being an artist was a joke. I knew that I enjoyed drawing, I could sit all day and work on one piece of art. I was excited every time I saw myself improving. That was about the time I decided that I didn’t care what others thought. If I wanted to draw all day, design things, and create portraits, I would make that my career. I am still extremely excited when I see myself improve. I enjoy learning new mediums and techniques. I work very hard to keep producing art, improving with every step. Every day is a struggle, but each struggle leads to a new victory.
            </p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-1 mr-4" src="/images/fav.png" alt="CBCP" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Mary Jenkin</p>
              <p className="text-gray-600">
              <a
                href="https://www.etsy.com/shop/creepybutcutepress"
              >Creepy but Cute Press
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
