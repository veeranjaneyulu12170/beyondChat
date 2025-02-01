import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import Registration from './pages/Registration';
import OrganizationSetup from './pages/OrganizationSetup';
import Integration from './pages/Integration';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen gradient-bg text-white">
        <nav className="glass fixed w-full z-50 px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2"
            >
              <Bot className="w-8 h-8 text-primary-foreground" />
              <span className="text-xl font-bold">BeyondChats</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-6"
            >
              <a href="/login" className="hover:text-primary-foreground transition-colors">
                Login
              </a>
              <button className="glass px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-primary/20 transition-colors">
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </button>
            </motion.div>
          </div>
        </nav>

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/setup" element={<OrganizationSetup />} />
            <Route path="/integration" element={<Integration />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;