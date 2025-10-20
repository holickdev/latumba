import { motion } from "motion/react";
import { MapPin, Calendar, Clock, DollarSign } from "lucide-react";

const infoItems = [
  {
    icon: Calendar,
    title: "Fecha",
    detail: "Sábado 01 de Noviembre",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Hora",
    detail: "7:00 PM",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: DollarSign,
    title: "Precio",
    detail: "$13",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    detail: "C.C Parque Costazul, Restaurante Natural",
    color: "from-blue-400 to-cyan-600",
  },
];

export function EventInfo() {
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
          <h2 className="text-5xl md:text-6xl text-white mb-4">
            ✨ Información del Evento ✨
          </h2>
          <p className="text-xl text-pink-200 max-w-2xl mx-auto">
            Marca tu calendario y prepárate para la noche más nostálgica del año
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 mx-auto`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-yellow-300 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-white text-center">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-pink-500/20 to-yellow-400/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-300/30 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-3xl text-yellow-300 mb-4">
              🎊 ¿Por qué NO puedes faltar? 🎊
            </h3>
            <div className="space-y-3 text-white text-lg">
              <p>
                🌟 Revive los mejores momentos de tu infancia y adolescencia
              </p>
              <p>
                🎵 Música que marcó una generación: Justin Bieber, One
                Direction y más
              </p>
              <p>
                📺 Homenaje a Hannah Montana, High School Musical, Victorious,
                iCarly y Chica Vampiro
              </p>
              <p>🎃 Ambiente de Halloween único y mágico</p>
              <p className="text-2xl text-yellow-300 mt-6">
                ⚡ Esta noche solo pasa UNA VEZ ⚡
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
