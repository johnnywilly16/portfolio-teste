import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  description: string
}

interface SkillCardProps {
  title: string
  skills: Skill[]
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <motion.div
      className="bg-white/80 dark:bg-dark-surface/80 shadow-xl rounded-xl overflow-hidden backdrop-blur-sm"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="p-6 space-y-6">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink text-transparent bg-clip-text">
          {title}
        </h3>
        
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {skill.name}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {skill.level}%
                </span>
              </div>
              
              <div className="relative h-2 bg-pastel-purple/10 dark:bg-dark-purple/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-pastel-purple to-pastel-pink dark:from-dark-purple dark:to-dark-pink"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 