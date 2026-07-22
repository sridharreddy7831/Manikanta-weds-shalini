import React from 'react';
import { motion } from 'framer-motion';

const Couple: React.FC = () => {
  return (
    <section id="couple" className="py-16 px-4 text-center bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-script text-[#800000] mb-2">The Bride & Groom</h2>
          <p className="text-[#4A0E0E] font-serif tracking-widest uppercase text-sm">Two Souls, One Sacred Bond</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-[#FFD700] mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Groom Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass-maroon p-8 sm:p-10 rounded-[2.5rem] border-2 border-[#800000]/10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="relative mb-6">
              <motion.img
                initial={{ rotate: -5, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="/3.11.jpg"
                alt="Eedhe Manikanta Reddy"
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-4 border-[#FFD700] p-1.5 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#800000] text-[#FFD700] text-xs px-6 py-1.5 rounded-full font-bold border-2 border-[#FFD700] shadow-lg tracking-widest uppercase">
                GROOM
              </div>
            </div>

            <h3 className="font-traditional font-bold text-2xl sm:text-3xl text-[#800000] mb-2">
              Eedhe Manikanta Reddy
            </h3>

            <div className="w-20 h-0.5 bg-[#FFD700] my-4"></div>

            <div className="space-y-2 text-[#4A0E0E] my-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#800000]">Son of</p>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#800000]">
                Smt. Eedhe Sugunamma
              </p>
              <p className="font-serif text-xs opacity-60 font-semibold">&</p>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#800000]">
                Sri Eedhe Amarnatha Reddy
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-[#800000]/15 w-full text-xs font-serif text-[#4A0E0E]/80 italic">
              📍 Yeguvathotlipalli, Tavalam Village, Tanakallu Mandal, Srisathya Sai District.
            </div>
          </motion.div>

          {/* Bride Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass-maroon p-8 sm:p-10 rounded-[2.5rem] border-2 border-[#800000]/10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="relative mb-6">
              <motion.img
                initial={{ rotate: 5, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="/3.12.jpg"
                alt="Chi. La. Sou. Poreddy Baby Shalini"
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-4 border-[#FFD700] p-1.5 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#800000] text-[#FFD700] text-xs px-6 py-1.5 rounded-full font-bold border-2 border-[#FFD700] shadow-lg tracking-widest uppercase">
                BRIDE
              </div>
            </div>

            <h3 className="font-traditional font-bold text-2xl sm:text-3xl text-[#800000] mb-2">
              Poreddy Baby Shalini
            </h3>

            <div className="w-20 h-0.5 bg-[#FFD700] my-4"></div>

            <div className="space-y-2 text-[#4A0E0E] my-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#800000]">Elder Daughter of</p>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#800000]">
                Smt. Poreddy Saraswathi
              </p>
              <p className="font-serif text-xs opacity-60 font-semibold">&</p>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#800000]">
                Sri Poreddy Veera Reddy
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-[#800000]/15 w-full text-xs font-serif text-[#4A0E0E]/80 italic">
              📍 Yeguvathotlipalli, Tavalam Village, Tanakallu Mandal, Srisathya Sai District.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
