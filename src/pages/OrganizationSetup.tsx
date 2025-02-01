import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, FileText, Loader2 } from 'lucide-react';

const OrganizationSetup = () => {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8"
        >
          <h1 className="text-2xl font-bold mb-6">Setup Your Organization</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="relative">
                <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full glass rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                />
              </div>

              <div className="relative">
                <Globe className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="url"
                  placeholder="Company Website URL"
                  className="w-full glass rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                />
              </div>

              <div className="relative">
                <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  placeholder="Company Description"
                  rows={4}
                  className="w-full glass rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none"
                ></textarea>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Website Scanning Progress</h3>
                {isScanning ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-5 h-5 text-primary" />
                  </motion.div>
                ) : (
                  <button
                    onClick={() => setIsScanning(true)}
                    className="text-sm text-primary hover:text-primary-foreground transition-colors"
                  >
                    Start Scan
                  </button>
                )}
              </div>

              <div className="space-y-3">
                {['Homepage', 'About Us', 'Products', 'Contact'].map((page) => (
                  <div
                    key={page}
                    className="flex items-center justify-between p-3 glass rounded-lg"
                  >
                    <span>{page}</span>
                    <span className="text-sm text-gray-400">Pending</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white rounded-lg px-6 py-3"
            >
              Continue to Integration
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrganizationSetup;