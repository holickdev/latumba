import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const activities = [
  {
    title: "Beer Pong",
    description: "Compite con tus amigos en el clásico juego de fiesta",
    image: "https://images.unsplash.com/photo-1578976014665-66120ffbb89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVyJTIwcG9uZyUyMHBhcnR5fGVufDF8fHx8MTc2MDU3NTA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    emoji: "🍺",
  },
  {
    title: "Lectura de Tarot",
    description: "Descubre qué te depara el futuro con nuestras lectoras místicas",
    image: "https://images.unsplash.com/photo-1615829332206-22479388eecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGNhcmRzJTIwbXlzdGljYWx8ZW58MXx8fHwxNzYwNTc1MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    emoji: "🔮",
  },
  {
    title: "Glitter Bar",
    description: "Brilla toda la noche con nuestro bar de brillantina",
    image: "https://images.unsplash.com/photo-1643564520014-bad6e5e137ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGl0dGVyJTIwc3BhcmtsZSUyMHBhcnR5fGVufDF8fHx8MTc2MDU3NTA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    emoji: "✨",
  },
  {
    title: "Concurso de Disfraces",
    description: "Ven con tu mejor disfraz y gana increíbles premios",
    image: "https://images.unsplash.com/photo-1667355742851-337d48ed6c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxsb3dlZW4lMjBwYXJ0eSUyMGNvc3R1bWVzfGVufDF8fHx8MTc2MDU3NjQyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    emoji: "👻",
  },
];

export function Activities() {
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
            🎮 Actividades Épicas 🎮
          </h2>
          <p className="text-xl text-pink-200 max-w-3xl mx-auto">
            Tu entrada incluye acceso a TODAS estas increíbles experiencias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-300/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent" />
                <motion.div
                  className="absolute top-4 right-4 text-6xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {activity.emoji}
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-3xl text-yellow-300 mb-3">
                  {activity.title}
                </h3>
                <p className="text-white text-lg">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 rounded-3xl p-8 max-w-4xl">
            <h3 className="text-3xl text-white mb-4">
              💎 Todo incluido en tu entrada de $13 💎
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left text-white text-lg">
              <div className="flex items-start gap-3">
                <span>✅</span>
                <span>Beer Pong</span>
              </div>
              <div className="flex items-start gap-3">
                <span>✅</span>
                <span>Lectura de Tarot</span>
              </div>
              <div className="flex items-start gap-3">
                <span>✅</span>
                <span>Picnic Coin (Moneda del evento)</span>
              </div>
              <div className="flex items-start gap-3">
                <span>✅</span>
                <span>Glitter Bar</span>
              </div>
              <div className="flex items-start gap-3">
                <span>✅</span>
                <span>Concurso de Disfraces</span>
              </div>
              <div className="flex items-start gap-3">
                <span>✅</span>
                <span>¡Y mucho más!</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
