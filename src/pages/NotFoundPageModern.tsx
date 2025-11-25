import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MascotImage from '../components/ui/MascotImage';
import { Button, Card, Container } from '../design-system';
import {
  staggerContainerVariants,
  staggerItemVariants,
} from '../design-system/animations/framer-variants';
import {
  FaHome,
  FaTools,
  FaQuestionCircle,
  FaArrowRight,
  FaShieldAlt,
  FaRocket,
  FaLock,
} from 'react-icons/fa';

const NotFoundPageModern: React.FC = () => {
  const navigate = useNavigate();

  const popularPages = [
    { icon: FaHome, label: 'Home', path: '/', desc: 'Return to homepage' },
    { icon: FaTools, label: 'Products', path: '/products', desc: 'Explore our tools' },
    { icon: FaShieldAlt, label: 'Tokenomics', path: '/tokenomics', desc: 'Learn about $PRICKO' },
    { icon: FaRocket, label: 'Roadmap', path: '/roadmap', desc: 'See our vision' },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <Container size="lg" className="relative z-10 py-12">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Mascot */}
          <motion.div variants={staggerItemVariants} className="mb-8">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MascotImage size="lg" className="mx-auto" />
            </motion.div>
          </motion.div>

          {/* 404 Text */}
          <motion.div variants={staggerItemVariants} className="mb-6">
            <h1 className="text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Main Message */}
          <motion.div variants={staggerItemVariants} className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Even Geckos Get Lost Sometimes...
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Looks like you've wandered off the privacy trail. Don't worry, we'll help you get back on track!
            </p>
          </motion.div>

          {/* Privacy Message */}
          <motion.div variants={staggerItemVariants} className="mb-12 max-w-2xl mx-auto">
            <Card variant="glass" className="border-accent/20 bg-accent/5">
              <div className="flex items-center justify-center gap-3 text-accent">
                <FaLock className="text-xl" />
                <p className="text-lg">
                  <span className="font-semibold">Good news:</span> This 404 page respects your privacy.
                </p>
              </div>
              <p className="text-muted text-sm mt-2">No trackers. No surveillance. Just a lost gecko.</p>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={staggerItemVariants} className="flex flex-wrap gap-4 justify-center mb-16">
            <Button variant="primary" size="lg" onClick={() => navigate('/')} leftIcon={<FaHome />}>
              Go Home
            </Button>
            <Link to="/products">
              <Button variant="secondary" size="lg" leftIcon={<FaTools />}>
                View Products
              </Button>
            </Link>
          </motion.div>

          {/* Popular Pages Grid */}
          <motion.div variants={staggerItemVariants}>
            <h3 className="text-xl font-bold text-white mb-6">Popular Pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularPages.map((page) => {
                const Icon = page.icon;
                return (
                  <Link key={page.path} to={page.path}>
                    <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }}>
                      <Card variant="glass" hoverable className="text-center group h-full">
                        <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                        <h4 className="font-semibold text-white group-hover:text-accent transition-colors mb-1">
                          {page.label}
                        </h4>
                        <p className="text-muted text-xs">{page.desc}</p>
                      </Card>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div variants={staggerItemVariants} className="mt-12">
            <Card variant="glass" className="border-accent/20">
              <FaQuestionCircle className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-accent mb-2">
                Still Can't Find What You're Looking For?
              </h3>
              <p className="text-muted mb-4 max-w-lg mx-auto">
                Our gecko squad is here to help! Reach out and we'll point you in the right direction.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="md" rightIcon={<FaArrowRight />}>
                  Contact Us
                </Button>
              </Link>
            </Card>
          </motion.div>

          {/* Footer */}
          <motion.p variants={staggerItemVariants} className="text-xs text-muted mt-8 italic">
            Error Code: GECKO_LOST_404 | Your privacy is still intact
          </motion.p>
        </motion.div>
      </Container>
    </div>
  );
};

export default NotFoundPageModern;
