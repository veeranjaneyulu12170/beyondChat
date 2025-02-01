import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Send, MessageSquare, CheckCircle, Copy } from 'lucide-react';

const Integration = () => {
  const [isIntegrated, setIsIntegrated] = useState(false);

  const integrationCode = `<script src="https://beyondchats.com/widget.js"></script>
<script>
  BeyondChats.init({
    organizationId: "YOUR_ORG_ID"
  });
</script>`;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8"
        >
          <h1 className="text-2xl font-bold mb-6">Integration & Testing</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Integration Code
                </h3>
                <div className="relative">
                  <pre className="bg-black/30 rounded-lg p-4 text-sm overflow-x-auto">
                    {integrationCode}
                  </pre>
                  <button
                    className="absolute top-2 right-2 p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => navigator.clipboard.writeText(integrationCode)}
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Email Instructions
                </h3>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Developer's Email"
                    className="w-full glass rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-3 bg-primary text-white rounded-lg py-3"
                  >
                    Send Instructions
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Test Integration
                </h3>
                {isIntegrated ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 mx-auto mb-4 text-green-500"
                    >
                      <CheckCircle className="w-full h-full" />
                    </motion.div>
                    <h4 className="text-lg font-semibold mb-2">Integration Successful!</h4>
                    <p className="text-gray-400 mb-4">Your chatbot is ready to go</p>
                    <div className="space-y-3">
                      <button className="w-full glass rounded-lg py-3 hover:bg-white/10 transition-colors">
                        Explore Admin Panel
                      </button>
                      <button className="w-full bg-primary text-white rounded-lg py-3">
                        Start Talking to Your Chatbot
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsIntegrated(true)}
                    className="w-full bg-primary text-white rounded-lg py-3"
                  >
                    Test Integration
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Integration;