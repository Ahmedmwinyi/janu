import {
  FileText,
  Scale,
  Handshake,
  AlertCircle,
  Clock,
  CreditCard,
  Shield,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Terms = () => {
  const sections = [
    {
      icon: Handshake,
      title: "Service Agreement",
      content: [
        "These terms govern the provision of ICT consulting and development services",
        "By engaging our services, you agree to these terms and conditions",
        "Services include web development, mobile apps, backend systems, and ICT consulting",
        "All work is performed according to agreed specifications and timelines",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "Project payments are typically structured as 50% upfront, 50% on completion",
        "Consulting services are billed hourly or on a retainer basis",
        "Invoices are due within 30 days of issuance",
        "Late payments may incur additional charges as specified in project agreements",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "You retain ownership of your business data, content, and proprietary information",
        "Upon full payment, you receive full rights to custom-developed code and designs",
        "We retain rights to general methodologies, frameworks, and reusable components",
        "Third-party licenses and tools remain subject to their respective terms",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Confidentiality & Security",
      content: [
        "We maintain strict confidentiality of all client information and business data",
        "Non-disclosure agreements are available for sensitive projects",
        "Security best practices are implemented in all development work",
        "Client data is protected according to our Privacy Policy",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Project Timelines",
      content: [
        "Project timelines are estimates based on scope and complexity",
        "Delays caused by client feedback cycles or scope changes may extend timelines",
        "We provide regular progress updates and maintain transparent communication",
        "Force majeure events may affect delivery schedules beyond our control",
      ],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: AlertCircle,
      title: "Limitations & Liability",
      content: [
        "Our liability is limited to the total amount paid for services",
        "We are not responsible for third-party service outages or failures",
        "Clients are responsible for maintaining backups of their data",
        "We provide reasonable support but cannot guarantee 100% uptime",
      ],
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const supportInfo = [
    {
      icon: Mail,
      title: "Legal Inquiries",
      content: "legal@ictafrica.com",
      description: "For contract and terms-related questions",
    },
    {
      icon: Phone,
      title: "Direct Support",
      content: "+233 24 123 4567",
      description: "Speak with our team about service terms",
    },
  ];

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-16 left-16 w-28 h-28 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl"
          animate={{ rotate: -360, x: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
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
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-blue-600 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <FileText className="h-12 w-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Terms of{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Service
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Clear, fair terms that protect both parties while ensuring
              successful project delivery. These terms outline our commitment to
              quality service and professional standards.
            </motion.p>

            <motion.div
              className="flex items-center justify-center space-x-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Fair & Transparent
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Client-Focused
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Last Updated: January 2024
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className={`w-20 h-20 bg-gradient-to-br ${section.gradient} rounded-3xl flex items-center justify-center mr-6 shadow-xl`}
                      >
                        <section.icon className="h-10 w-10 text-white" />
                      </motion.div>
                      <h2 className="text-4xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-5">
                      {section.content.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: itemIndex * 0.15,
                            duration: 0.6,
                          }}
                          className="flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-purple-50 hover:from-purple-50 hover:to-blue-50 transition-all duration-300 group border border-gray-100 hover:border-purple-200"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-7 h-7 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg"
                          >
                            <CheckCircle className="h-4 w-4 text-white" />
                          </motion.div>
                          <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors text-lg">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Visual */}
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
                      whileHover={{ rotate: 8, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className={`aspect-square bg-gradient-to-br ${section.gradient} rounded-3xl shadow-2xl transform rotate-3 relative overflow-hidden`}
                    >
                      {/* Inner glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />
                    </motion.div>

                    <motion.div
                      whileHover={{ rotate: -5, scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-6 bg-white rounded-3xl shadow-xl flex items-center justify-center backdrop-blur-sm"
                    >
                      <section.icon className="h-32 w-32 text-gray-300" />
                    </motion.div>

                    {/* Enhanced floating elements */}
                    <motion.div
                      className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl shadow-lg"
                      animate={{ rotate: -360, y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute top-1/2 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg"
                      animate={{ x: [0, 10, 0], scale: [1, 1.3, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Support Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Questions About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Terms?
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              We believe in transparency and are happy to clarify any aspect of
              our service terms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 text-center group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-18 h-18 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow relative z-10"
                >
                  <info.icon className="h-9 w-9 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors relative z-10">
                  {info.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-4 text-lg relative z-10">
                  {info.content}
                </p>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_50%)]"></div>

        {/* Enhanced animated background elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
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
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Clear terms, professional service, and exceptional results. Let's
            discuss your project today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 text-lg"
              >
                Start Your Project
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-block border-2 border-white text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Terms;
