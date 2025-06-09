import {
  Code2,
  Smartphone,
  Database,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Shield,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Create stunning, responsive websites that convert visitors into customers using modern technologies.",
      technologies: [
        "React",
        "NextJS",
        "TypeScript",
        "HTML5/CSS3",
        "JavaScript",
        "Tailwind CSS",
      ],
      features: [
        "Responsive design for all devices",
        "SEO optimization for better visibility",
        "Fast loading times and performance",
        "Content management systems",
        "E-commerce functionality",
        "Custom web applications",
      ],
      benefits:
        "Perfect for African businesses looking to establish a strong online presence and attract more customers.",
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "bg-blue-50",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile applications that engage users and grow your business reach.",
      technologies: [
        "React Native",
        "Flutter",
        "iOS",
        "Android",
        "Firebase",
        "API Integration",
      ],
      features: [
        "Cross-platform compatibility",
        "Native performance and feel",
        "Push notifications",
        "Offline functionality",
        "App store deployment",
        "User authentication systems",
      ],
      benefits:
        "Ideal for businesses wanting to reach customers on-the-go and create new revenue streams.",
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-purple-50",
    },
    {
      icon: Database,
      title: "Backend & Database Solutions",
      description:
        "Robust server-side solutions and database management for scalable, secure applications.",
      technologies: [
        "Node.js",
        "Spring Boot",
        "MySQL",
        "MongoDB",
        "RESTful APIs",
        "Cloud Services",
      ],
      features: [
        "Scalable architecture design",
        "Database optimization",
        "API development and integration",
        "Cloud deployment and hosting",
        "Security implementation",
        "Performance monitoring",
      ],
      benefits:
        "Essential for growing businesses that need reliable, secure systems to handle increasing data and users.",
      gradient: "from-green-500 to-emerald-500",
      bgPattern: "bg-green-50",
    },
    {
      icon: TrendingUp,
      title: "ICT Business Consulting",
      description:
        "Strategic technology consulting to optimize operations and drive digital transformation.",
      technologies: [
        "Digital Strategy",
        "Process Analysis",
        "Technology Audits",
        "Project Management",
        "Training",
      ],
      features: [
        "Technology needs assessment",
        "Digital transformation roadmaps",
        "Process automation strategies",
        "IT infrastructure planning",
        "Cost-benefit analysis",
        "Implementation guidance",
      ],
      benefits:
        "Perfect for businesses ready to modernize operations and gain competitive advantages through technology.",
      gradient: "from-orange-500 to-red-500",
      bgPattern: "bg-orange-50",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description:
        "Understanding your business needs, goals, and technical requirements through detailed consultation.",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "Creating detailed project plans, timelines, and technical specifications tailored to your budget.",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Building your solution using best practices, with regular updates and feedback sessions.",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "Deploying your solution and providing ongoing support to ensure continued success.",
      icon: Shield,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ICT Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to help African
              businesses thrive in the digital landscape. From concept to
              deployment, I've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                        className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mr-6 shadow-xl`}
                      >
                        <service.icon className="h-10 w-10 text-white" />
                      </motion.div>
                      <h2 className="text-4xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Technologies & Tools
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: techIndex * 0.1,
                              duration: 0.3,
                            }}
                            whileHover={{ scale: 1.05 }}
                            className={`bg-gradient-to-r ${service.gradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: featureIndex * 0.1,
                              duration: 0.5,
                            }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className={`${service.bgPattern} p-6 rounded-2xl border-l-4 border-gradient-to-b ${service.gradient}`}
                    >
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {service.benefits}
                      </p>
                    </motion.div>
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
                      className={`aspect-square bg-gradient-to-br ${service.gradient} rounded-3xl shadow-2xl transform rotate-3`}
                    />
                    <motion.div
                      whileHover={{ rotate: -3, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-6 bg-white rounded-3xl shadow-xl flex items-center justify-center"
                    >
                      <service.icon className="h-32 w-32 text-gray-300" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How I{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work With You
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process that ensures your project is delivered on time,
              within budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}
                  >
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project and see how I can help bring your vision
            to life with cutting-edge technology.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
