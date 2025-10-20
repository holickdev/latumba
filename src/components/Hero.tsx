import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import flyer1 from "figma:asset/6049272ceedb40a90b9f57f4c4580525c9929e1f.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto lg:mx-0" />
              </motion.div>

              <h1 className="text-6xl md:text-8xl text-white mb-4 font-serif italic">
                La Tumba
              </h1>
              <h2 className="text-4xl md:text-6xl text-yellow-300 mb-2 uppercase tracking-wide">
                de los Recuerdos
              </h2>
              <p className="text-2xl text-pink-200 mb-8 italic">
                Halloween Party
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-4 mb-8"
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 text-white">
                  <span className="text-3xl">📅</span>
                  <span className="text-xl">Sábado 01 de Noviembre</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-white">
                  <span className="text-3xl">🕖</span>
                  <span className="text-xl">7:00 PM</span>
                </div>
                <div className="bg-white/90 inline-block px-8 py-3 rounded-full">
                  <span className="text-3xl text-[#6b2a5c]">$13</span>
                </div>
              </motion.div>

              <motion.a
                href="https://gvplnbla.forms.app/latumba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-12 py-5 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-2xl">🎃 ¡Consigue tu Entrada YA! 🎃</span>
              </motion.a>

              <motion.p
                className="mt-6 text-yellow-200 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                ⚡ Cupos limitados - ¡No te quedes fuera!
              </motion.p>
            </motion.div>
          </div>

          {/* Right side - Flyer image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={flyer1}
                alt="La Tumba de los Recuerdos Flyer"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-6 -right-6 bg-yellow-400 text-purple-900 px-6 py-3 rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm">🔥 Evento del Año</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="text-sm">✨ Pura Nostalgia</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
