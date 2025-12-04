"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Clock, Timer } from "lucide-react"

interface QuizTimerProps {
  isActive: boolean
  onTimeUp?: () => void
}

export function QuizTimer({ isActive, onTimeUp }: QuizTimerProps) {
  const [seconds, setSeconds] = useState(0)
  const [isWarning, setIsWarning] = useState(false)

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setSeconds((prev) => {
        const newTime = prev + 1
        // Advertencia a los 10 minutos (600 segundos)
        if (newTime >= 600) {
          setIsWarning(true)
        }
        // Tiempo máximo sugerido: 15 minutos
        if (newTime >= 900 && onTimeUp) {
          onTimeUp()
        }
        return newTime
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, onTimeUp])

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  if (!isActive && seconds === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed right-4 top-20 z-50"
    >
      <Card
        className={`p-4 shadow-lg ${
          isWarning
            ? "border-2 border-orange-500 bg-orange-50 dark:bg-orange-950"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        }`}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={isWarning ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1, repeat: isWarning ? Number.POSITIVE_INFINITY : 0 }}
          >
            {isWarning ? (
              <Timer className="h-5 w-5 text-orange-600" />
            ) : (
              <Clock className="h-5 w-5 text-blue-600" />
            )}
          </motion.div>
          <div>
            <p className="text-xs text-muted-foreground">Tiempo transcurrido</p>
            <p className={`text-xl font-bold ${isWarning ? "text-orange-600" : "text-foreground"}`}>
              {formatTime(seconds)}
            </p>
          </div>
        </div>
        {isWarning && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-xs text-orange-600"
          >
            Tiempo sugerido excedido
          </motion.p>
        )}
      </Card>
    </motion.div>
  )
}
