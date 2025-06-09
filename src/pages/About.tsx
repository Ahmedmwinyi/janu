import {
  Code2,
  Award,
  Users,
  Clock,
  CheckCircle,
  Download,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React/JavaScript", level: 95, color: "from-blue-500 to-cyan-500" },
    {
      name: "Node.js/Backend",
      level: 90,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Mobile Development",
      level: 85,
      color: "from-purple-500 to-pink-500",
    },
    { name: "Database Design", level: 88, color: "from-orange-500 to-red-500" },
    {
      name: "Cloud Platforms",
      level: 82,
      color: "from-indigo-500 to-blue-500",
    },
    { name: "ICT Consulting", level: 95, color: "from-teal-500 to-green-500" },
  ];

  const stats = [
    {
      icon: Users,
      label: "Happy Clients",
      value: "100+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      label: "Projects Completed",
      value: "200+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      label: "Years Experience",
      value: "5+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      label: "Support Hours",
      value: "24/7",
      color: "from-orange-500 to-red-500",
    },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "Every project is built with attention to detail and industry best practices to ensure long-term success.",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Clear Communication",
      description:
        "Regular updates, transparent processes, and open dialogue throughout the entire project lifecycle.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "On-Time Delivery",
      description:
        "Reliable project management and realistic timelines to deliver your solutions when you need them.",
      icon: Clock,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Ongoing Support",
      description:
        "Continued partnership beyond project completion with maintenance, updates, and technical support.",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
  ];

  const journey = [
    {
      year: "2022",
      title: "Started as Junior Developer",
      description:
        "Began my career at a tech startup in Zanzibar, learning full-stack development and gaining experience in fast-paced environments.",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2023",
      title: "Senior Developer & Team Lead",
      description:
        "Promoted to lead development teams and manage complex projects for African businesses, honing leadership skills.",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2025",
      title: "Independent ICT Consultant",
      description:
        "Launched my consulting practice to help African businesses leverage technology for growth and digital transformation.",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ahmed Janu
                </span>
              </h1>
              <h2 className="text-2xl text-blue-600 font-semibold mb-6">
                ICT Consultant & Full-Stack Developer
              </h2>
              <div className="flex items-center mb-6 text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Based in Zanzibar, Tanzania</span>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 2 years of experience in software development and
                technology consulting, I specialize in helping African
                businesses and startups leverage technology to achieve their
                goals. My passion lies in creating innovative solutions that
                drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Let's Work Together
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center hover:bg-blue-50 transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ rotate: 6, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl transform rotate-3"
              />
              <motion.div
                whileHover={{ rotate: -3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-6 bg-white rounded-3xl shadow-xl flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-4xl font-bold text-white">AJ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Expert Developer
                  </h3>
                  <p className="text-gray-600">& Technology Consultant</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-shadow`}
                >
                  <stat.icon className="h-10 w-10 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="text-4xl font-bold text-gray-900 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Technical{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Constantly evolving skill set focused on modern technologies and
                best practices that deliver real business value to African
                businesses.
              </p>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700 font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full shadow-lg`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.3,
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      B.Sc. Computer Science
                    </h4>
                    <p className="text-gray-600">University of Zanzibar, 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Certified Project Manager
                    </h4>
                    <p className="text-gray-600">PMI Certification, 2022</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Certifications
                </h3>
                <ul className="space-y-3">
                  {[
                    "AWS Certified Solutions Architect",
                    "Google Cloud Professional",
                    "React Advanced Certification",
                    "MongoDB Certified Developer",
                  ].map((cert, index) => (
                    <motion.li
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project and client relationship,
              ensuring exceptional results every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              From curious student to trusted technology partner for growing
              African businesses.
            </p>
          </motion.div>

          <div className="space-y-12">
            {journey.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${milestone.color} text-white rounded-3xl flex items-center justify-center font-bold text-lg shadow-xl group-hover:shadow-2xl transition-shadow`}
                >
                  <milestone.icon className="h-10 w-10" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 flex-1 border border-white/50"
                >
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent mb-2`}
                  >
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
            "Technology is not a luxury — it's your next step to growth."
          </blockquote>
          <cite className="text-xl text-blue-200 font-medium">
            — Ahmed Janu
          </cite>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your business with technology? I'd love to hear
              about your project and discuss how I can help you achieve your
              goals.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
