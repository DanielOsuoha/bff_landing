import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Wallet, Shield } from 'lucide-react';
import experianLogo from '/logo.png';

const StopTheLoop = () => {
  const [selectedLoop, setSelectedLoop] = useState(null);

  // Track signal function for pilot analytics
  const trackSignal = (loopId) => {
    console.log(`Signal tracked: Loop ${loopId} expanded`);
    // In production, this would send to analytics service
    // e.g., analytics.track('loop_expanded', { loopId });
  };

  // Handle card expansion with tracking
  const handleCardClick = (loopId) => {
    if (selectedLoop === loopId) {
      setSelectedLoop(null); // Collapse if already selected
    } else {
      setSelectedLoop(loopId);
      trackSignal(loopId);
    }
  };

  const loopOptions = [
    {
      id: 1,
      text: "I keep scrolling for answers",
      icon: Smartphone,
      bffSays: "The internet is full of noise, but your path should be clear. Let's stop guessing and start following your personal roadmap.",
      highlightedTool: "Credit Score Planner",
      tools: [
        { name: "Credit Score Planner", url: "https://www.experian.com/credit/credit-score/" },
        { name: "SmartMoney™", url: "https://www.experian.com/money/experian-smart-money/" },
        { name: "Experian Boost™", url: "https://www.experian.com/credit/score-boost/" }
      ]
    },
    {
      id: 2,
      text: "I am worrying about money leaks",
      icon: Wallet,
      bffSays: "You work too hard to let your money disappear into the 'subscription void.' Let's find those leaks together right now.",
      highlightedTool: "SmartMoney™",
      tools: [
        { name: "Credit Score Planner", url: "https://www.experian.com/credit/credit-score/" },
        { name: "SmartMoney™", url: "https://www.experian.com/money/experian-smart-money/" },
        { name: "Experian Boost™", url: "https://www.experian.com/credit/score-boost/" }
      ]
    },
    {
      id: 3,
      text: "I don't trust financial systems",
      icon: Shield,
      bffSays: "The system usually takes from us; it's time it gives back. Let's get you credit for the bills you're already paying.",
      highlightedTool: "Experian Boost™",
      tools: [
        { name: "Credit Score Planner", url: "https://www.experian.com/credit/credit-score/" },
        { name: "SmartMoney™", url: "https://www.experian.com/money/experian-smart-money/" },
        { name: "Experian Boost™", url: "https://www.experian.com/credit/score-boost/" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans antialiased relative overflow-hidden">
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

        <section className="px-5 pt-16 pb-10 mx-auto max-w-md">
          <h1 className="text-[2.75rem] text-center text-gray-900 mb-3 tracking-tight leading-tight">
            <span className="font-bold text-[#7D3F97]">#</span>Stop the Loop.
          </h1>
          <p className="text-lg text-center  font-light leading-relaxed">
            Your Financial BFF noticed you spiraling.
          </p>
        </section>

        {/* Inline Accordion Loop Selector - Mobile-First */}
      <section className="px-5 pb-10 mx-auto max-w-md">
        <div className="space-y-3">
          {loopOptions.map((option) => {
            const IconComponent = option.icon;
            const isExpanded = selectedLoop === option.id;
            
            return (
              <motion.div
                key={option.id}
                layout
                className={`overflow-hidden rounded-[24px] border-2 transition-all duration-500 ease-out
                  ${isExpanded 
                    ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[#7D3F97]/20' 
                    : 'bg-white/70 shadow-[0_2px_10px_rgb(0,0,0,0.06)] border-transparent'
                  }
                `}
              >
                {/* Card Header - Always Visible */}
                <motion.button
                  onClick={() => handleCardClick(option.id)}
                  whileTap={{ scale: 0.98 }}
                  className="w-full min-h-[48px] p-5 text-left"
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
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#7D3F97] text-lg font-bold flex-shrink-0"
                    >
                      {isExpanded ? '−' : '+'}
                    </motion.span>
                  </div>
                </motion.button>

                {/* Expanded Content - Accordion Style */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.3 }
                      }}
                      className="overflow-hidden"
                    >
                      {/* BFF Intervention Layer with Styled Content */}
                      <div className="px-5 pb-5 bg-white border-t-2 border-[#7D3F97]/10">
                        {/* "Your BFF says" Bubble */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="pt-5 pb-4"
                        >
                          <div className="bg-[#7D3F97]/10 border-l-4 border-[#7D3F97] p-4 rounded-r-lg">
                            <p className="text-xs font-bold text-[#7D3F97] mb-2">Your BFF says:</p>
                            <p className="text-sm text-gray-800 font-normal leading-relaxed">
                              {option.bffSays}
                            </p>
                          </div>
                        </motion.div>

                        {/* Hero Action Card - Primary Highlighted Tool */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="pb-4"
                        >
                          {option.tools.filter(tool => tool.name === option.highlightedTool).map((tool, index) => (
                            <a
                              key={index}
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full bg-white border border-[#7D3F97] rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 group"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-[10px] text-[#7D3F97] font-semibold mb-0.5">Your Exit from the Loop</p>
                                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#7D3F97] transition-colors">
                                    {tool.name}
                                  </p>
                                </div>
                                <span className="text-xl text-[#7D3F97] group-hover:translate-x-1 transition-transform">
                                  →
                                </span>
                              </div>
                            </a>
                          ))}
                        </motion.div>

                        {/* Transparency Note */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          className="text-xs text-gray-500 font-light italic text-center mt-4"
                        >
                          Not advice. Just transparency.
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Global CTA - Only show when a card is expanded */}
      <AnimatePresence>
        {selectedLoop && (
          <motion.section 
            className="px-5 pb-12 mx-auto max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href="https://www.experian.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full min-h-[48px] px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full 
                active:from-gray-700 active:to-gray-600 transition-all duration-300 ease-out
                shadow-md active:shadow-lg text-base font-normal text-center"
            >
              Explore with Experian
            </a>
            <p className="text-center text-sm text-gray-400 mt-3 font-light">
              No pressure. Just options.
            </p>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Minimalist Footer */}
      <footer className="px-5 pb-8 mx-auto max-w-md">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-4 mb-2">
            <a
              href="https://www.experian.com/privacy/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-gray-870 hover:text-[#7D3F97] transition-colors duration-200"
            >
              Privacy
            </a>
            <span className="text-[10px] text-gray-850">|</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-gray-850 hover:text-[#7D3F97] transition-colors duration-200"
            >
              Terms
            </a>
          </div>
          <p className="text-[10px] text-gray-700 leading-relaxed max-w-sm mx-auto">
            © 2026 Experian. All rights reserved. Experian and the Experian marks used herein are trademarks or registered trademarks of Experian and its affiliates.
          </p>
        </div>
      </footer>

      {/* Breathing Space - Mobile-First */}
      <div className="h-16"></div>
      </div>
    </div>
  );
};

export default StopTheLoop;
