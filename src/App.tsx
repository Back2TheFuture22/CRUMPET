import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import crumpetImage from './assets/CRUMPETT.jpeg';

function App() {
  const contractAddress = "PLACEHOLDER_CONTRACT_ADDRESS";
  const dexScreenerLink = "https://dexscreener.com/";

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Contract address copied! 🚀');
    });
  }, []);

  return (
    <div className="min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="background-wrapper" />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl mb-16"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                WebkitTextStroke: '2px black',
                color: '#E07A24',
                textShadow: '4px 4px 0px rgba(0,0,0,0.2)'
              }}
            >
              Crumpet ($CRMP)
            </motion.h1>

            <motion.div
              className="max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src={crumpetImage} 
                alt="CRUMPET"
                className="hero-image"
              />
            </motion.div>

            {/* Social Buttons in Triangle Formation */}
            <motion.div
              className="flex flex-col items-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Top Button */}
              <button
                onClick={() => copyToClipboard(contractAddress)}
                className="btn text-2xl px-16 py-5"
              >
                Buy CRUMPET
              </button>
              
              {/* Bottom Row */}
              <div className="flex gap-8 mt-2">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-12 py-4 text-xl"
                >
                  𝕏
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-12 py-4 text-xl"
                >
                  Telegram
                </a>
              </div>
            </motion.div>

            <motion.div
              className="glass-card max-w-4xl mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-center">
                The Simpsons done it again, Crumpet is here — Crundle's other half and the queen of the timeline. 
                Where Crundle predicts the future, Crumpet sets it in motion. Together they're unstoppable, but she's 
                making her own mark with soft edges and hard gains. Loyal to the crumb-cause, powered by community, 
                and baked to perfection for the moon. A bullish slice of culture, buttered with pure alpha. $CRMP isn't 
                just his girlfriend… she's the next chapter.
              </p>
            </motion.div>

            <div className="section-divider" />

            {/* Info Sections */}
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Buy Section */}
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-display mb-8 text-center tracking-wide">How to Buy CRUMPET</h2>
                <div className="text-5xl mb-6 text-center">📋</div>
                <h3 className="text-2xl font-display mb-6 text-center">Contract Address</h3>
                <div className="bg-white/50 p-6 rounded-2xl mb-6 text-center">
                  <p className="text-xl font-medium">CA Will launch soon!</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => copyToClipboard(contractAddress)}
                    className="btn-secondary text-xl mb-4"
                  >
                    Copy CA
                  </button>
                  <p className="text-sm text-gray-600">
                    Copy the contract address to trade on your favorite Solana DEX
                  </p>
                </div>
              </motion.div>

              {/* Chart Section */}
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-5xl mb-6 text-center">📊</div>
                <h3 className="text-2xl font-display mb-6 text-center">View Chart</h3>
                <div className="text-center">
                  <a
                    href={dexScreenerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xl mb-4 inline-block"
                  >
                    Open on DexScreener
                  </a>
                  <p className="text-sm text-gray-600">
                    View live price chart and trading info
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;