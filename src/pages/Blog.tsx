import React, { useState } from "react";
import { Calendar, ArrowRight, Clock, Tag, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title:
        "10 Essential Web Development Trends for African Businesses in 2024",
      excerpt:
        "Discover the latest web development trends that can help African businesses stay competitive and attract more customers online.",
      content:
        "In today's rapidly evolving digital landscape, staying current with web development trends is crucial for African businesses...",
      author: "Ahmed Janu",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["Web Development", "African Business", "Trends", "Technology"],
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title:
        "Why Your African Business Needs a Mobile App (And How to Get Started)",
      excerpt:
        "Learn how mobile apps can transform your business operations and customer engagement across Africa.",
      content:
        "Mobile applications have become essential tools for businesses across Africa. They offer unique advantages...",
      author: "Ahmed Janu",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Mobile Development",
      tags: [
        "Mobile Apps",
        "Business Strategy",
        "Customer Engagement",
        "Africa",
      ],
      featured: false,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Database Design Best Practices for Scalable African Applications",
      excerpt:
        "Essential database design principles that ensure your application can grow with your business needs.",
      content:
        "Proper database design is the foundation of any successful application. Poor database architecture can lead to performance issues...",
      author: "Ahmed Janu",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Backend Development",
      tags: ["Database", "Backend", "Performance", "Scalability"],
      featured: false,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Digital Transformation: A Step-by-Step Guide for African SMEs",
      excerpt:
        "Practical advice on how to digitally transform your business operations without breaking the bank.",
      content:
        "Digital transformation doesn't have to be overwhelming or expensive. With the right approach, African SMEs can gradually modernize...",
      author: "Ahmed Janu",
      date: "2023-12-28",
      readTime: "12 min read",
      category: "Business Strategy",
      tags: [
        "Digital Transformation",
        "Business Strategy",
        "Technology Planning",
        "SME",
      ],
      featured: true,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Choosing the Right Technology Stack for Your African Startup",
      excerpt:
        "How to select the best technologies for your startup based on your specific needs, budget, and growth plans.",
      content:
        "Selecting the right technology stack is one of the most important decisions you'll make as an African startup founder...",
      author: "Ahmed Janu",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Startup Advice",
      tags: ["Startups", "Technology Stack", "Planning", "Development"],
      featured: false,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      title: "Security Best Practices for African Web Applications",
      excerpt:
        "Essential security measures every web application should implement to protect user data and business information.",
      content:
        "Web application security is not optional in today's threat landscape. Every application, regardless of size, needs robust security measures...",
      author: "Ahmed Janu",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Security",
      tags: [
        "Security",
        "Web Development",
        "Best Practices",
        "Data Protection",
      ],
      featured: false,
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Backend Development",
    "Business Strategy",
    "Startup Advice",
    "Security",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

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
              Technology & Business{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Practical advice, industry insights, and tips to help African
              businesses thrive in the digital age. Learn from real-world
              experience and stay ahead of the curve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Featured Article
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-gradient-to-r ${featuredPost.gradient} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500`}
            >
              <div className="p-8 md:p-12 text-white">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-white/80">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(
                (post) =>
                  !post.featured || selectedCategory !== "All" || searchTerm
              )
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-white/50"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`bg-gradient-to-r ${post.gradient} text-white px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">
                          AJ
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-600 hover:text-blue-700 transition-colors flex items-center group font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No articles found
              </h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
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
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get practical tips and industry insights delivered to your inbox
            monthly. No spam, just valuable content for African businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white/90 backdrop-blur-sm"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            Join 500+ African business owners and developers getting actionable
            insights.
          </p>
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
              Need Personalized Advice?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every business is unique. If you have specific questions or need
              customized solutions, I'm here to help with personalized
              consulting.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
