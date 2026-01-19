import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Wallet, Shield } from 'lucide-react';
import experianLogo from '/logo.png';

const StopTheLoop = () => {
  const [selectedLoop, setSelectedLoop] = useState(null);

  const loopOptions = [
    {
      id: 1,
      text: "I keep scrolling for answers",
      icon: Smartphone,
    },
    {
      id: 2,
      text: "I worry about money leaks",
      icon: Wallet,
    },
    {
      id: 3,
      text: "I don't trust financial systems",
      icon: Shield,
    }
  ];

  const tools = [
    "Credit Score visibility",
    "SmartMoney™",
    "Experian Boost™"
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans antialiased relative overflow-hidden">
      {/* Subtle Purple Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#7D3F97]/[0.03] via-transparent to-transparent pointer-events-none"></div>
      
      {/* Content Wrapper */}
      <div className="relative z-10">
      {/* Updated Header with Latest Branding */}
      <header className="px-5 pt-8 pb-6 mx-auto max-w-md">
        <div className="flex items-center justify-center gap-4">
          <img 
            src={experianLogo} 
            alt="Experian" 
            className="h-8 w-auto"
          />
          <span className="text-lg font-medium text-[#7D3F97] leading-tight">
            Your Big Financial Friend (BFF)
          </span>
        </div>
      </header>

      {/* Hero Section - Mobile-First with Generous Spacing */}
      <section className="px-5 pt-16 pb-10 mx-auto max-w-md">
        <h1 className="text-[2.75rem] text-center text-gray-900 mb-3 tracking-tight leading-tight">
          Stop the Loop.
        </h1>
        <p className="text-lg text-center text-gray-700 font-light leading-relaxed">
          Your Financial BFF noticed you spiraling.
        </p>
      </section>

      {/* Horizontal Loop Selector - Mobile-First */}
      <section className="px-5 pb-10 mx-auto max-w-md">
        <div className="space-y-3">
          {loopOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <motion.button
                key={option.id}
                onClick={() => setSelectedLoop(option.id)}
                whileTap={{ scale: 0.98 }}
                className={`w-full min-h-[48px] p-5 rounded-[24px] text-left transition-all duration-500 ease-out
                  ${selectedLoop === option.id 
                    ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-[#7D3F97]/20' 
                    : 'bg-white/70 active:bg-white shadow-[0_2px_10px_rgb(0,0,0,0.06)] border-2 border-transparent active:shadow-[0_4px_20px_rgb(0,0,0,0.1)]'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#7D3F97] flex items-center justify-center flex-shrink-0">
                    <IconComponent 
                      size={20} 
                      className="text-[#7D3F97]" 
                      strokeWidth={2.0}
                    />
                  </div>
                  <span className="text-base text-gray-800 font-normal leading-snug flex-1">
                    {option.text}
                  </span>
                  {selectedLoop === option.id && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-[#7D3F97] text-lg font-bold flex-shrink-0"
                    >
                      ✓
                    </motion.span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedLoop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1], 
            }}
          >
            {/* Response Message - Mobile-First */}
            <motion.section 
              className="px-5 pb-6 mx-auto max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-sm border border-gray-100">
                <motion.p 
                  className="text-lg text-gray-700 font-light leading-relaxed mb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  That makes sense. There's a lot of noise out there.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-700 font-light leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Your BFF prefers clarity over chaos. Want to see what actually matters?
                </motion.p>
              </div>
            </motion.section>

            <motion.section 
              className="px-5 pb-8 mx-auto max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bg-white/60 rounded-3xl p-6 backdrop-blur-sm">
                <ul className="space-y-3 mb-5">
                  {tools.map((tool, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3 text-gray-800"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + (index * 0.1),
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span className="text-base font-normal leading-snug">{tool}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.p 
                  className="text-sm text-gray-500 font-light italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Not advice. Just transparency.
                </motion.p>
              </div>
            </motion.section>

            {/* Soft */}
            <motion.section 
              className="px-5 pb-12 mx-auto max-w-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button 
                className="w-full min-h-[48px] px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full 
                  active:from-gray-700 active:to-gray-600 transition-all duration-300 ease-out
                  shadow-md active:shadow-lg text-base font-normal"
              >
                <a href="https://www.experian.com/">Explore with Experian</a>
              </button>
              <motion.p 
                className="text-center text-sm text-gray-400 mt-3 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                No pressure. Just options.
              </motion.p>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breathing Space - Mobile-First */}
      <div className="h-16"></div>
      </div>
    </div>
  );
};

export default StopTheLoop;
