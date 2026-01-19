import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StopTheLoop = () => {
  const [selectedLoop, setSelectedLoop] = useState(null);

  const loopOptions = [
    {
      id: 1,
      text: "I keep scrolling for answers",
      icon: "🌀"
    },
    {
      id: 2,
      text: "I worry about money leaks",
      icon: "💧"
    },
    {
      id: 3,
      text: "I don't trust financial systems",
      icon: "🔒"
    }
  ];

  const tools = [
    "Credit Score visibility",
    "SmartMoney™",
    "Experian Boost™"
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans antialiased">
      {/* Hero Section */}
      <section className="px-6 pt-16 pb-12 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light text-center text-gray-900 mb-4 tracking-tight">
          Stop the Loop.
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-600 font-light leading-relaxed">
          Your Financial BFF noticed you spiraling.
        </p>
      </section>

      {/* Interactive Loop Selector */}
      <section className="px-6 pb-12 max-w-2xl mx-auto">
        <div className="space-y-4">
          {loopOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedLoop(option.id)}
              className={`w-full min-h-[48px] px-6 py-6 rounded-2xl text-left transition-all duration-500 ease-out
                ${selectedLoop === option.id 
                  ? 'bg-white shadow-lg scale-[1.02] border-2 border-gray-200' 
                  : 'bg-white/50 hover:bg-white hover:shadow-md border-2 border-transparent'
                }
              `}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{option.icon}</span>
                <span className="text-base md:text-lg text-gray-800 font-normal">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Conditional Response - Smooth Transition with Framer Motion */}
      <AnimatePresence mode="wait">
        {selectedLoop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
            }}
          >
            {/* Response Message */}
            <motion.section 
              className="px-6 pb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  That makes sense. There's a lot of noise out there.
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 font-light leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Your BFF prefers clarity over chaos. Want to see what actually matters?
                </motion.p>
              </div>
            </motion.section>

            {/* Subtle Tool Intro */}
            <motion.section 
              className="px-6 pb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bg-white/60 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                <ul className="space-y-4 mb-6">
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
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-base md:text-lg font-normal">{tool}</span>
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

            {/* Soft CTA */}
            <motion.section 
              className="px-6 pb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button 
                className="w-full min-h-[48px] px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full 
                  hover:from-gray-700 hover:to-gray-600 transition-all duration-300 ease-out
                  shadow-md hover:shadow-lg text-base md:text-lg font-normal"
              >
                Explore with Experian
              </button>
              <motion.p 
                className="text-center text-sm text-gray-400 mt-4 font-light"
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

      <div className="h-20"></div>
    </div>
  );
};

export default StopTheLoop;
