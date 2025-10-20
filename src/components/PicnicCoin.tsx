import { motion } from "motion/react";
import { Coins, Gift, Trophy, Users } from "lucide-react";
import flyer2 from "figma:asset/b687ff8b8dc0ade77804cef27b83c2e94b6b83c2.png";
import flyer3 from "figma:asset/fdf8c684147b24a3e474a7f7e080a34b480f353d.png";

export function PicnicCoin() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Coins className="w-20 h-20 text-yellow-300 mx-auto" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl text-white mb-4">
            🪙 ¿Qué es un Picnic Coin? 🪙
          </h2>
          <p className="text-2xl text-yellow-300 mb-4">
            La Moneda Oficial de Nuestros Eventos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl text-yellow-300 mb-6">
                💰 Al comprar tu entrada recibirás:
              </h3>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 mb-6 text-center">
                <div className="text-5xl mb-2">1 Picnic Coin</div>
                <div className="text-xl text-white">
                  (Equivalente a $1)
                </div>
              </div>
              <p className="text-white text-xl mb-6">
                Para que empieces a disfrutar de la experiencia desde el primer
                momento
              </p>

              <h3 className="text-3xl text-yellow-300 mb-6">
                ✨ ¿Para qué sirve?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-purple-500/20 rounded-xl p-4">
                  <Gift className="w-8 h-8 text-pink-300 flex-shrink-0 mt-1" />
                  <div className="text-white text-lg">
                    <strong>Canjear por consumo</strong> - Usa tus monedas para
                    bebidas, snacks y más
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-purple-500/20 rounded-xl p-4">
                  <Users className="w-8 h-8 text-blue-300 flex-shrink-0 mt-1" />
                  <div className="text-white text-lg">
                    <strong>Participar en juegos grupales</strong> - Accede a
                    actividades especiales
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-purple-500/20 rounded-xl p-4">
                  <Trophy className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <div className="text-white text-lg">
                    <strong>Obtener premios</strong> - Gana items exclusivos del
                    evento
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={flyer2}
                alt="Información Picnic Coin"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 border-2 border-yellow-300/50">
            <h3 className="text-3xl text-white text-center mb-6">
              🎯 ¿Cómo conseguir más Picnic Coins?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="text-xl text-yellow-300 mb-2">
                  Gana en los Juegos
                </h4>
                <p className="text-white">
                  Triunfa en Beer Pong, concursos y más para ganar monedas
                  adicionales
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">👥</div>
                <h4 className="text-xl text-yellow-300 mb-2">
                  Estrategia Grupal
                </h4>
                <p className="text-white">
                  Junta tus monedas con amigos para canjearlas juntos y obtener
                  mejores premios
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">🎫</div>
                <h4 className="text-xl text-yellow-300 mb-2">
                  Taquilla en el Evento
                </h4>
                <p className="text-white">
                  Si la suerte no está de tu lado, podrás comprar más Picnic
                  Coins ($1 cada una)
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl text-yellow-300 mb-2">
                  Valor Real
                </h4>
                <p className="text-white">
                  Cada Picnic Coin vale $1 y puede usarse en el evento para lo
                  que quieras
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div
            className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-2xl">
              💎 La diversión nunca para con Picnic Coins 💎
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
