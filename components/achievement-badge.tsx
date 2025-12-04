"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, Zap, Award, CheckCircle2 } from "lucide-react"

interface AchievementBadgeProps {
  percentage: number
  correctCount: number
  totalQuestions: number
}

export function AchievementBadge({ percentage, correctCount, totalQuestions }: AchievementBadgeProps) {
  const getAchievement = () => {
    if (percentage === 100) {
      return {
        icon: Trophy,
        title: "¡PERFECTO!",
        subtitle: "Calificación perfecta",
        color: "from-yellow-400 to-yellow-600",
        textColor: "text-yellow-600",
        bgColor: "bg-yellow-50 dark:bg-yellow-950",
        borderColor: "border-yellow-200 dark:border-yellow-800",
      }
    } else if (percentage >= 90) {
      return {
        icon: Award,
        title: "EXCELENTE",
        subtitle: "Conocimiento excepcional",
        color: "from-purple-400 to-purple-600",
        textColor: "text-purple-600",
        bgColor: "bg-purple-50 dark:bg-purple-950",
        borderColor: "border-purple-200 dark:border-purple-800",
      }
    } else if (percentage >= 80) {
      return {
        icon: Star,
        title: "MUY BIEN",
        subtitle: "Conocimiento sólido",
        color: "from-blue-400 to-blue-600",
        textColor: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-950",
        borderColor: "border-blue-200 dark:border-blue-800",
      }
    } else if (percentage >= 70) {
      return {
        icon: Target,
        title: "APROBADO",
        subtitle: "Buen conocimiento",
        color: "from-green-400 to-green-600",
        textColor: "text-green-600",
        bgColor: "bg-green-50 dark:bg-green-950",
        borderColor: "border-green-200 dark:border-green-800",
      }
    } else if (percentage >= 60) {
      return {
        icon: CheckCircle2,
        title: "SUFICIENTE",
        subtitle: "Requiere refuerzo",
        color: "from-orange-400 to-orange-600",
        textColor: "text-orange-600",
        bgColor: "bg-orange-50 dark:bg-orange-950",
        borderColor: "border-orange-200 dark:border-orange-800",
      }
    } else {
      return {
        icon: Zap,
        title: "NECESITA CAPACITACIÓN",
        subtitle: "Repaso obligatorio",
        color: "from-red-400 to-red-600",
        textColor: "text-red-600",
        bgColor: "bg-red-50 dark:bg-red-950",
        borderColor: "border-red-200 dark:border-red-800",
      }
    }
  }

  const achievement = getAchievement()
  const Icon = achievement.icon

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Card className={`${achievement.bgColor} border-2 ${achievement.borderColor} p-6`}>
        <div className="flex items-center gap-4">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
            }}
            className={`rounded-full bg-gradient-to-br ${achievement.color} p-4`}
          >
            <Icon className="h-8 w-8 text-white" />
          </motion.div>
          <div className="flex-1">
            <h3 className={`text-2xl font-bold ${achievement.textColor}`}>{achievement.title}</h3>
            <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="secondary" className="font-semibold">
                {correctCount}/{totalQuestions} correctas
              </Badge>
              <Badge variant="outline" className={achievement.textColor}>
                {percentage}%
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
