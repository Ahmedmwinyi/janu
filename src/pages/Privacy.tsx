import {
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  FileText,
  CheckCircle,
  AlertTriangle,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us (name, email, phone number)",
        "Technical information about your device and browser when visiting our website",
        "Usage data about how you interact with our website and services",
        "Communication records when you contact us for support or consultations",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide requested services",
        "To improve our website functionality and user experience",
        "To send you relevant updates about our services (with your consent)",
        "To comply with legal obligations and protect our legitimate interests",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "Your personal information is encrypted during transmission and storage",
        "Access to your data is restricted to authorized personnel only",
        "We regularly review and update our security practices",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist our operations",
        "We may disclose information when required by law or to protect our rights",
        "Any third-party services we use are bound by strict confidentiality agreements",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: [
        "Right to access: Request copies of your personal data",
        "Right to rectification: Request correction of inaccurate information",
        "Right to erasure: Request deletion of your personal data",
        "Right to data portability: Request transfer of your data to another service",
      ],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: AlertTriangle,
      title: "Cookies & Tracking",
      content: [
        "We use essential cookies to ensure our website functions properly",
        "Analytics cookies help us understand how visitors use our website",
        "You can control cookie settings through your browser preferences",
        "We do not use cookies for advertising or tracking across other websites",
      ],
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      content: "Ahmedmwinyi00@gmail.com",
      description: "For privacy-related inquiries and data requests",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+255 776 799 9666",
      description: "Speak directly with our privacy officer",
    },
  ];

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full"
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your privacy is our priority. This policy explains how we collect,
              use, and protect your personal information when you use our ICT
              consulting services and website.
            </motion.p>

            <motion.div
              className="flex items-center justify-center space-x-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                XYZ Compliant
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Last Updated: June 2025
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="flex items-center mb-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-20 h-20 bg-gradient-to-br ${section.gradient} rounded-3xl flex items-center justify-center mr-6 shadow-xl`}
                      >
                        <section.icon className="h-10 w-10 text-white" />
                      </motion.div>
                      <h2 className="text-4xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.5 }}
                          className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                          >
                            <CheckCircle className="h-4 w-4 text-white" />
                          </motion.div>
                          <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Visual */}
                <motion.div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className={`aspect-square bg-gradient-to-br ${section.gradient} rounded-3xl shadow-2xl transform rotate-3`}
                    />
                    <motion.div
                      whileHover={{ rotate: -3, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-6 bg-white rounded-3xl shadow-xl flex items-center justify-center"
                    >
                      <section.icon className="h-32 w-32 text-gray-300" />
                    </motion.div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
                      animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full"
                      animate={{ rotate: -360, y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Privacy Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Have questions about our privacy practices? We're here to help and
              ensure transparency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <method.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-3 text-lg">
                  {method.content}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

        {/* Animated background elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-8"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your privacy is protected every step of the way. Let's discuss your
            project with complete confidence.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 text-lg"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Privacy;
