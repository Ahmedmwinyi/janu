import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/255776799666"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2,
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Enhanced pulsing rings */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-green-400 rounded-full"
        animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute inset-0 bg-green-300 rounded-full"
        animate={{ scale: [1, 2.6, 1], opacity: [0.4, 0, 0.4] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Enhanced main button */}
      <motion.div
        className="relative w-18 h-18 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center"
        whileHover={{
          boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
          y: -2,
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />

        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <MessageCircle className="h-9 w-9 text-white relative z-10" />
        </motion.div>

        {/* Notification dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-white text-xs font-bold">1</span>
        </motion.div>
      </motion.div>

      {/* Enhanced tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.8 }}
        whileHover={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute right-full mr-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-6 py-3 rounded-2xl text-sm font-medium whitespace-nowrap shadow-2xl border border-gray-700"
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>Chat with me on WhatsApp</span>
        </div>
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-6 border-l-gray-900 border-t-6 border-t-transparent border-b-6 border-b-transparent"></div>
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppFloat;
