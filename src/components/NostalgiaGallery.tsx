import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const nostalgiaItems = [
  {
    title: "Hannah Montana",
    description: "Best of Both Worlds 🎤",
    image: "https://images.unsplash.com/photo-1581503821510-a3644e421b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5uYWglMjBtb250YW5hJTIwY29uY2VydHxlbnwxfHx8fDE3NjA1NzUwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-pink-500 to-purple-600",
  },
  {
    title: "High School Musical",
    description: "We're All In This Together! 🏀",
    image: "https://images.unsplash.com/photo-1740229748194-278356931cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwbXVzaWNhbHxlbnwxfHx8fDE3NjA1NzUwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Victorious & iCarly",
    description: "Las reinas de Nickelodeon 📺",
    image: "https://images.unsplash.com/photo-1744057848001-9eda40757ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWljcm9waG9uZSUyMHNpbmdlcnxlbnwxfHx8fDE3NjA1NzY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "One Direction & Justin Bieber",
    description: "Baby, baby, baby ohhhh! 🎵",
    image: "https://images.unsplash.com/photo-1559424452-eeb3a13ffe2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHBhcnR5JTIwZGlzY298ZW58MXx8fHwxNzYwNTc2NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-500 to-indigo-600",
  },
];

export function NostalgiaGallery() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {["🎵", "📺", "🎤", "⭐", "💜"][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-6">
            💜 Un Viaje en el Tiempo 💜
          </h2>
          <p className="text-2xl text-yellow-300 mb-4">
            Revive los momentos que marcaron tu vida
          </p>
          <p className="text-xl text-pink-200 max-w-3xl mx-auto">
            Una noche dedicada a las series y artistas que nos hicieron soñar,
            cantar y bailar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {nostalgiaItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <div className="relative h-80">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl mb-2">{item.title}</h3>
                  <p className="text-xl opacity-90">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border-2 border-yellow-300/30 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-4xl text-yellow-300 mb-6">
            🎭 También Celebramos 🎭
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-white text-xl">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-pink-500/20 rounded-2xl p-4"
            >
              <div className="text-4xl mb-2">🧛‍♀️</div>
              <div>Chica Vampiro</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-purple-500/20 rounded-2xl p-4"
            >
              <div className="text-4xl mb-2">🎸</div>
              <div>Pop Rock 2000s</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500/20 rounded-2xl p-4"
            >
              <div className="text-4xl mb-2">✨</div>
              <div>Disney Channel Era</div>
            </motion.div>
          </div>
          <motion.p
            className="mt-8 text-2xl text-white"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡ La música de tu infancia, EN VIVO ⚡
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
