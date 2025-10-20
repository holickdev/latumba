import { motion } from "motion/react";
import { Ticket, Clock, AlertCircle, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, -window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="text-4xl opacity-20">
              {["🎃", "👻", "🎵", "✨", "💜", "🎤"][Math.floor(Math.random() * 6)]}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 rounded-[3rem] p-1">
            <div className="bg-gradient-to-br from-purple-900/95 to-pink-900/95 backdrop-blur-xl rounded-[2.8rem] p-12 md:p-16">
              <motion.div
                className="text-center mb-8"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-24 h-24 text-yellow-300 mx-auto" />
              </motion.div>

              <h2 className="text-5xl md:text-7xl text-white text-center mb-6">
                ⚡ ¡No te quedes fuera! ⚡
              </h2>

              <p className="text-2xl md:text-3xl text-yellow-300 text-center mb-8">
                Esta es LA fiesta que todos van a recordar
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <Ticket className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                  <h3 className="text-xl text-white mb-2">Cupos Limitados</h3>
                  <p className="text-pink-200">
                    Solo hay espacio para los verdaderos fans
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl text-white mb-2">
                    Una Noche Única
                  </h3>
                  <p className="text-pink-200">
                    Sábado 01 de Noviembre - No se repite
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <AlertCircle className="w-12 h-12 text-red-300 mx-auto mb-4" />
                  <h3 className="text-xl text-white mb-2">FOMO Alert</h3>
                  <p className="text-pink-200">
                    Todos tus amigos estarán ahí... ¿y tú?
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="text-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 inline-block">
                  <p className="text-white text-2xl mb-2">
                    Precio de entrada
                  </p>
                  <div className="text-7xl text-yellow-300 mb-2">$13</div>
                  <p className="text-pink-200 text-lg">
                    (Incluye 1 Picnic Coin + Todas las actividades)
                  </p>
                </div>

                <motion.a
                  href="https://gvplnbla.forms.app/latumba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full p-1">
                    <div className="bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full px-12 py-6 hover:from-yellow-400 hover:to-pink-500 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <Ticket className="w-10 h-10 text-purple-900" />
                        <span className="text-3xl md:text-4xl text-purple-900">
                          ¡COMPRAR ENTRADA AHORA!
                        </span>
                        <Ticket className="w-10 h-10 text-purple-900" />
                      </div>
                    </div>
                  </div>
                </motion.a>

                <motion.p
                  className="text-yellow-300 text-xl"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔥 ¡Asegura tu lugar AHORA antes de que se agoten! 🔥
                </motion.p>
              </motion.div>

              <div className="mt-12 grid md:grid-cols-2 gap-6 text-white">
                <div className="bg-pink-500/20 rounded-2xl p-6 border border-pink-300/30">
                  <h4 className="text-2xl text-yellow-300 mb-4">
                    ✨ Imagínate:
                  </h4>
                  <ul className="space-y-2 text-lg">
                    <li>🎵 Cantando "Baby" a todo pulmón</li>
                    <li>🏀 Reviviendo High School Musical</li>
                    <li>👯‍♀️ Bailando con tus mejores amigos</li>
                    <li>📸 Fotos épicas para el recuerdo</li>
                    <li>🎃 Una noche de Halloween inolvidable</li>
                  </ul>
                </div>

                <div className="bg-purple-500/20 rounded-2xl p-6 border border-purple-300/30">
                  <h4 className="text-2xl text-yellow-300 mb-4">
                    😢 O imagínate:
                  </h4>
                  <ul className="space-y-2 text-lg">
                    <li>😭 Ver las historias de Instagram desde casa</li>
                    <li>💔 FOMO nivel EXTREMO</li>
                    <li>😢 Preguntarte "¿Por qué no fui?"</li>
                    <li>🤦‍♀️ Perderte LA fiesta del año</li>
                    <li>😞 Arrepentirte para siempre</li>
                  </ul>
                </div>
              </div>

              <motion.div
                className="mt-12 text-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <p className="text-3xl md:text-4xl text-white mb-4">
                  💜 La decisión es tuya 💜
                </p>
                <p className="text-2xl text-yellow-300">
                  Pero recuerda: esta noche solo pasa UNA VEZ
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
