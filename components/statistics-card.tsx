"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, BarChart3 } from "lucide-react"

interface StatisticsCardProps {
  percentage: number
  correctCount: number
  totalQuestions: number
}

export function StatisticsCard({ percentage, correctCount, totalQuestions }: StatisticsCardProps) {
  // Promedio simulado de conductores previos
  const averageScore = 72
  const totalConductors = 55
  const evaluated = 12

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold">Comparación con otros conductores</h3>
          </div>

          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Tu calificación</span>
              <span className="font-bold text-blue-600">{percentage}%</span>
            </div>
            <Progress value={percentage} className="h-2" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Promedio BOSHMANY</span>
              <span className="font-semibold">{averageScore}%</span>
            </div>
            <Progress value={averageScore} className="h-2 opacity-60" />
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Evaluados</span>
              </div>
              <p className="text-2xl font-bold">
                {evaluated}/{totalConductors}
              </p>
              <p className="text-xs text-muted-foreground">{Math.round((evaluated / totalConductors) * 100)}% completado</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>Tu posición</span>
              </div>
              <p className="text-2xl font-bold">
                {percentage >= averageScore ? "Top " + Math.round((1 - (percentage - averageScore) / 100) * 50) + "%" : "Promedio"}
              </p>
              <p className="text-xs text-muted-foreground">
                {percentage >= averageScore ? "Sobre el promedio" : "Bajo el promedio"}
              </p>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}
