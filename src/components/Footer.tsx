import { motion } from "motion/react";
import { MapPin, Calendar, Clock, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl text-yellow-300 mb-6">
              La Tumba de los Recuerdos
            </h3>
            <p className="text-white text-lg mb-4">
              Halloween Party
            </p>
            <p className="text-pink-200">
              Una noche mágica de nostalgia, música y diversión que nunca olvidarás.
            </p>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-2xl text-yellow-300 mb-6">
              Información
            </h4>
            <div className="space-y-4 text-white">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-pink-300 flex-shrink-0 mt-1" />
                <span>Sábado 01 de Noviembre</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-pink-300 flex-shrink-0 mt-1" />
                <span>7:00 PM</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-300 flex-shrink-0 mt-1" />
                <span>C.C Parque Costazul, Restaurante Natural</span>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-2xl text-yellow-300 mb-6">
              ¡Únete a la Fiesta!
            </h4>
            <p className="text-white mb-6">
              No dejes pasar esta oportunidad. Asegura tu lugar en la fiesta más nostálgica del año.
            </p>
            <motion.a
              href="https://gvplnbla.forms.app/latumba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">Comprar Entrada</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-pink-200">
              © 2025 La Tumba de los Recuerdos. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-white text-sm">
              <span>🎃 Halloween Party</span>
              <span>•</span>
              <span>💜 Nostalgia 2000s-2010s</span>
              <span>•</span>
              <span>✨ Una noche única</span>
            </div>
          </div>

          <motion.div
            className="mt-8 text-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-2xl text-yellow-300">
              🎵 ¡Nos vemos en la fiesta! 🎵
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500" />
    </footer>
  );
}
