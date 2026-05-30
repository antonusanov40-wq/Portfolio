import { TypeAnimation } from 'react-type-animation'
import me from './assets/photo_2026-05-25_23-31-44.jpg'
import {
  FaTelegram,
  FaWhatsapp
} from 'react-icons/fa'
import { motion } from 'framer-motion'
export default function App() {

  return (

    <div className="min-h-screen bg-slate-900 text-white p-8 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>
    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
         <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800 rounded-3xl p-8 shadow-2xl"
         >

          <div className="flex flex-col items-center">

            <img
              src={me}
              alt="profile"
              className="w-48 h-48 rounded-3xl object-cover border-4 border-cyan-400"
            />

            <h2 className="text-3xl font-bold mt-6">
              Anton Usanov
            </h2>

            <p className="text-cyan-400 mt-2">
              Student NULP 
            </p>

          </div>


          <div className="mt-10">

            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-slate-300">

              <p>Email: antonusanov40@gmail.com</p>
              <div className="flex gap-4 mt-8">

               <a
                 href="https://t.me/Antoxaaa20"
                 target="_blank"
                 className="bg-slate-700 p-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition text-2xl"
  >
                 <FaTelegram />
                 </a>

               <a
                 href="https://wa.me/380669291519"
                 target="_blank"
                 className="bg-slate-700 p-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition text-2xl"
                >
                 <FaWhatsapp />
                 </a>

                 </div>

              <p>Phone: +380669291519</p>

              <p>Lviv, Ukraine</p>

            </div>

          </div>


          <div className="mt-10">

            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Skills
            </h3>

            <div className="space-y-4">

              <div>
                <p>HTML / CSS</p>

                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <motion.div

                  initial={{ width: 0 }}
                  animate={{ width: "95%" }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full shadow-cyan-400/50 shadow-lg" >

                  </motion.div>
                </div>
              </div>

              <div>
                <p>React</p>

                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                   <motion.div
                   
                   initial={{ width: 0 }}
                   animate={{ width: "80%" }}
                   transition={{ duration: 1 }}
                   className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full shadow-cyan-400/50 shadow-lg" >

                   </motion.div>
                </div>
              </div>

              <div>
                <p>JavaScript</p>

                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <motion.div  

                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full shadow-cyan-400/50 shadow-lg" >

                  </motion.div>
                </div>
              </div>

            </div>

          </div>

          <div className="mt-10">

  <h3 className="text-xl font-bold text-cyan-400 mb-4">
    Soft Skills
  </h3>

  <div className="space-y-3 text-slate-300">

    <div className="bg-slate-700 px-4 py-2 rounded-xl">
      Уважність до деталей
    </div>

    <div className="bg-slate-700 px-4 py-2 rounded-xl">
      Аналітичне мислення
    </div>

    <div className="bg-slate-700 px-4 py-2 rounded-xl">
      Вміння швидко навчатись
    </div>

    <div className="bg-slate-700 px-4 py-2 rounded-xl">
      Комунікабельність
    </div>

    <div className="bg-slate-700 px-4 py-2 rounded-xl">
      Робота в команді
    </div>

  </div>

</div>

        </motion.div>


        {/* RIGHT SIDE */}
         <motion.div
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8 }}
         className="lg:col-span-2 bg-slate-800 rounded-3xl p-8 shadow-2xl"
         >

          <div>

            <p className="text-cyan-400 uppercase tracking-[5px]">
              Portfolio
            </p>

            <h1 className="text-6xl font-bold mt-4 leading-tight">
                <TypeAnimation
                sequence={[
                'Cybersecurity Student',
                2000,
                'Reserve Officer Training',
                2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                />
            </h1>

            <p className="text-slate-300 mt-6 text-lg leading-relaxed">
              Студент факультету захисту інформації Національного університету "Львівська політехніка",
              маю практичний досвід у розробці інтерфейсів та бекенд-технологій.

              Я створюю адаптивні веб-додатки з використанням React, JavaScript та Tailwind CSS,
              а також постійно вдосконалюю свої навички в галузі сучасної веб-розробки та кібербезпеки.

              Наразі також проходжу військову підготовку в якості офіцера запасу.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">

  <div className="bg-slate-700 px-5 py-3 rounded-2xl border border-cyan-400/30 hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
    React Developer
  </div>

  <div className="bg-slate-700 px-5 py-3 rounded-2xl border border-cyan-400/30 hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
    Cybersecurity
  </div>

  <div className="bg-slate-700 px-5 py-3 rounded-2xl border border-cyan-400/30 hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
    Reserve Officer Training
  </div>

</div>

          </div>


          <div className="mt-16">

            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

               <motion.div  

               whileHover={{ y: -10 }}
               transition={{ duration: 0.3 }}
               className="bg-slate-700/50 backdrop-blur-md border border-slate-600 p-6 rounded-3xl hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300" >
                <h3 className="text-2xl font-bold">
                  Portfolio Website
                </h3>

                <p className="text-slate-300 mt-4">
                  Особисте портфоліо, створене на React та Tailwind CSS.
                </p>
                <div className="flex gap-3 mt-6">

                <span className="bg-cyan-400/20 text-cyan-300 px-4 py-1 rounded-full text-sm">
                  React
                </span>

                <span className="bg-cyan-400/20 text-cyan-300 px-4 py-1 rounded-full text-sm">
                  Tailwind
                </span>

              </div>

              </motion.div>


              <motion.div  
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-700/50 backdrop-blur-md border border-slate-600 p-6 rounded-3xl hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300" >

                <h3 className="text-2xl font-bold">
                  Contact API
                </h3>

                <p className="text-slate-300 mt-4">
                   Працював з бекенд валідацією з використанням API key та фронтенд валідацією з використанням formspree.
                </p>
                </motion.div>



                <div className="mt-16">

  <div className="flex justify-between items-center mb-8">

  <h2 className="text-3xl font-bold text-cyan-400">
    Technologies
  </h2>

  
  </div>

  <div className="flex flex-wrap gap-4">

    <div className="bg-slate-700 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
      HTML
    </div>

    <div className="bg-slate-700 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
      CSS
    </div>

    <div className="bg-slate-700 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
      JavaScript
    </div>

    <div className="bg-slate-700 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
      React
    </div>

    <div className="bg-slate-700 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
      Tailwind CSS
    </div>

    <div className="bg-slate-700 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
      Fastify
    </div>

    <div className="bg-slate-700 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
      REST API
    </div>

    <div className="bg-slate-700 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black hover:scale-105 transition duration-300 cursor-default">
      Python
    </div>

  </div>

  <div className="mt-8">

  <a
    href="https://lab-5-theta.vercel.app/"
    target="_blank"
    className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 hover:shadow-cyan-400/40 hover:shadow-xl transition duration-300"
  >
    Form Validation Project →
  </a>

</div>

</div>

 </div>

</div>

</motion.div>

</div>

</div>
  )
}