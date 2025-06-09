import { Link } from "react-router-dom";
import {
  Code2,
  Zap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Heart,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.4),transparent_40%)]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.4),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Enhanced Logo and Description */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2"
          >
            <Link to="/" className="flex items-center space-x-4 mb-8 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="h-3 w-3 text-white" />
                </motion.div>
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              <div>
                <motion.h3
                  className="text-3xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  Ahmed Janu
                </motion.h3>
                <p className="text-blue-200 font-medium">
                  ICT Consultant & Developer
                </p>
                <motion.div
                  className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </Link>
            <motion.p
              className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Empowering African businesses through innovative technology
              solutions. Specializing in web development, mobile apps, and
              digital transformation strategies that drive real business growth.
            </motion.p>
            <div className="flex space-x-4">
              {[
                {
                  icon: Linkedin,
                  href: "#",
                  color: "hover:text-blue-400",
                  bg: "hover:bg-blue-400/20",
                },
                {
                  icon: Twitter,
                  href: "#",
                  color: "hover:text-blue-300",
                  bg: "hover:bg-blue-300/20",
                },
                {
                  icon: Github,
                  href: "#",
                  color: "hover:text-purple-400",
                  bg: "hover:bg-purple-400/20",
                },
                {
                  icon: Instagram,
                  href: "#",
                  color: "hover:text-pink-400",
                  bg: "hover:bg-pink-400/20",
                },
                {
                  icon: Facebook,
                  href: "#",
                  color: "hover:text-blue-500",
                  bg: "hover:bg-blue-500/20",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                  whileHover={{ scale: 1.3, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} ${social.bg} transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg`}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <motion.div
                className="w-2 h-2 bg-blue-400 rounded-full mr-3"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group relative overflow-hidden py-2 px-4 rounded-lg"
                  >
                    <motion.span
                      className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                    />
                    <span className="relative z-10">{link.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-8 text-white flex items-center">
              <motion.div
                className="w-2 h-2 bg-purple-400 rounded-full mr-3"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              Get In Touch
            </h3>
            <ul className="space-y-6">
              {[
                {
                  icon: Mail,
                  text: "Ahmedmwinyi00@gmail.com",
                  href: "mailto:Ahmedmwinyi00@gmail.com",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Phone,
                  text: "+255 776 799 666",
                  href: "tel:+255776799666",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: MapPin,
                  text: "Zanzibar, Tanzania TZ",
                  href: "#",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group"
                >
                  <a
                    href={contact.href}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      className={`w-10 h-10 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <contact.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <span className="text-gray-300 hover:text-white transition-colors duration-300 group-hover:text-blue-300">
                        {contact.text}
                      </span>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/20 mt-16 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <motion.p
              className="text-gray-400 text-sm flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              © 2025 Ahmed Janu. Made with
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                className="mx-2"
              >
                <Heart className="h-4 w-4 text-red-400 fill-current" />
              </motion.span>
              in Africa
            </motion.p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-all duration-300 relative group"
                  >
                    {link.name}
                    <motion.div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </footer>
  );
};

export default Footer;
