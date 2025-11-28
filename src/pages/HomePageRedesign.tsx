import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaUsers, FaArrowRight, FaCheck } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import MascotImage from '../components/ui/MascotImage';

const HomePageRedesign: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-500" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-emerald-400">Live on Solana</span>
                <SiSolana className="w-4 h-4 text-emerald-400" />
              </motion.div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Privacy</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Meets Utility
                  </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                  The first memecoin with real products. 4 privacy tools live today,
                  4 more in development. Not vaporware.
                </p>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8">
                {[
                  { value: '4', label: 'Live Products' },
                  { value: '8', label: 'Total Tools' },
                  { value: '1B', label: 'Total Supply' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/how-to-buy"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold text-white overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] hover:scale-105"
                >
                  <span className="relative z-10">Buy $PRICKO</span>
                  <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-gray-700 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
                >
                  Explore Products
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              {/* Glow rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-emerald-500/20 animate-ping-slow" />
                <div className="absolute w-96 h-96 rounded-full border border-cyan-500/10" />
              </div>

              {/* Main glow */}
              <div className="absolute w-72 h-72 bg-emerald-500/30 rounded-full blur-[80px]" />

              {/* Mascot */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <MascotImage size="2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-emerald-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="relative py-32">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why <span className="text-emerald-400">$PRICKO</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Unlike typical memecoins, $PRICKO is backed by real, working privacy products.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <FaShieldAlt className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Real Privacy Products</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  We're not just another memecoin. Our ecosystem includes privacy scanners,
                  encrypted file sharing, and more - all live and working today.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Gecko Advisor', 'Gecko Share', 'Gecko Guard', 'Gecko Lock'].map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm text-emerald-400"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Small Feature Cards */}
            {[
              {
                icon: FaRocket,
                title: 'Fair Launch',
                description: 'No presale, no VC allocation. 80% to community via pump.fun.',
                color: 'cyan'
              },
              {
                icon: FaUsers,
                title: 'Community First',
                description: 'Built by the community, for the community. Transparent development.',
                color: 'purple'
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
              <FaCheck className="w-3 h-3" />
              4 Products Live Now
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Privacy <span className="text-emerald-400">Ecosystem</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real tools, real utility. Each product is designed to protect your digital privacy.
            </p>
          </motion.div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Gecko Advisor', desc: 'AI-powered privacy scanner', status: 'Live', icon: '🔍' },
              { name: 'Gecko Share', desc: 'Encrypted file sharing', status: 'Live', icon: '📁' },
              { name: 'Gecko Guard', desc: 'Browser privacy extension', status: 'Live', icon: '🛡️' },
              { name: 'Gecko Lock', desc: 'Password manager', status: 'Live', icon: '🔐' },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold">{product.name}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                    {product.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{product.desc}</p>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                  <FaArrowRight className="w-4 h-4 text-emerald-400" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              View all 8 products
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready to join the privacy revolution?
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Get $PRICKO now and be part of the ecosystem that's building real privacy products.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/how-to-buy"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105"
                >
                  Buy $PRICKO Now
                  <FaArrowRight />
                </Link>
                <Link
                  to="/tokenomics"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  View Tokenomics
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePageRedesign;
