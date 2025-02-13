import { motion } from 'framer-motion'

<motion.div
  className="w-full max-w-3xl bg-light-card dark:bg-base-300 rounded-lg shadow-lg overflow-hidden will-change-transform"
  style={{ transform: 'translate3d(0,0,0)' }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {/* Title bar */}
  <div className="h-8 bg-gradient-to-r from-pastel-purple/10 to-pastel-pink/10 dark:from-purple-500/20 dark:to-pink-500/20 flex items-center px-4">
    <div className="flex space-x-2">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
  </div>

  {/* Terminal content */}
  <div className="p-4 font-mono text-sm">
    <motion.div
      className="will-change-transform"
      style={{ transform: 'translate3d(0,0,0)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {children}
    </motion.div>
  </div>
</motion.div> 