"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { GraduationCap, ChevronRight, CheckCircle2, XCircle, Download, User } from "lucide-react"
import jsPDF from "jspdf"

const quizQuestions = [
  {
    id: 1,
    question: "¿Qué significa la sigla PESV?",
    image: "/road-safety-strategic-plan-document.jpg",
    imageAlt: "Documento del Plan Estratégico de Seguridad Vial",
    options: [
      "Plan Especial de Seguridad Vehicular",
      "Plan Estratégico de Seguridad Vial",
      "Programa de Educación en Seguridad Vial",
      "Protocolo de Emergencias y Seguridad Vial",
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "¿Cuál es la norma principal que regula el PESV en Colombia?",
    image: "/colombia-law-1503-road-safety.jpg",
    imageAlt: "Ley 1503 de 2011",
    options: ["Ley 769 de 2002", "Ley 1503 de 2011", "Decreto 1079 de 2015", "Ley 2050 de 2020"],
    correct: 1,
  },
  {
    id: 3,
    question: "¿Cuál es uno de los riesgos críticos del PASO 8?",
    image: "/speed-limit-sign-traffic-safety.jpg",
    imageAlt: "Señal de límite de velocidad",
    options: ["Mantenimiento de oficinas", "Exceso de velocidad", "Compra de vehículos", "Turnos de trabajo"],
    correct: 1,
  },
  {
    id: 4,
    question: "¿La Resolución 40595 de 2022 aplica a empresas con cuántos vehículos o más?",
    image: "/corporate-fleet-vehicles-parking.jpg",
    imageAlt: "Flota de vehículos corporativos",
    options: ["5 o más vehículos", "10 o más vehículos", "20 o más vehículos", "50 o más vehículos"],
    correct: 1,
  },
  {
    id: 5,
    question: "¿Cuántos pasos define la Resolución 40595 de 2022 para el PESV?",
    image: "/pesv-24-steps-methodology.jpg",
    imageAlt: "Metodología de 24 pasos del PESV",
    options: ["12 pasos", "18 pasos", "24 pasos", "30 pasos"],
    correct: 2,
  },
  {
    id: 6,
    question: "¿Con qué sistema debe articularse obligatoriamente el PESV?",
    image: "/occupational-safety-health-system.jpg",
    imageAlt: "Sistema de Gestión de Seguridad y Salud en el Trabajo",
    options: [
      "Sistema de gestión ambiental",
      "Sistema de gestión financiera",
      "Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)",
      "Sistema de gestión de calidad",
    ],
    correct: 2,
  },
  {
    id: 7,
    question: "¿Cuál es el ciclo que sigue la metodología del PESV?",
    image: "/phva-cycle-plan-do-check-act.jpg",
    imageAlt: "Ciclo PHVA (Planear, Hacer, Verificar, Actuar)",
    options: [
      "Ciclo PDCA",
      "Ciclo PHVA (Planear, Hacer, Verificar, Actuar)",
      "Ciclo de Deming",
      "Todas las anteriores son correctas",
    ],
    correct: 3,
  },
  {
    id: 8,
    question: "¿Cuáles son los niveles de implementación del PESV según el tamaño de la flota?",
    image: "/pesv-implementation-levels.jpg",
    imageAlt: "Niveles de implementación del PESV",
    options: [
      "Básico, Intermedio y Experto",
      "Básico, Estándar y Avanzado",
      "Inicial, Medio y Superior",
      "Nivel 1, Nivel 2 y Nivel 3",
    ],
    correct: 1,
  },
  {
    id: 9,
    question: "¿Qué se evalúa en el PASO 10 del PESV?",
    image: "/driver-training-competencies.jpg",
    imageAlt: "Capacitación y competencias de conductores",
    options: [
      "Mantenimiento de vehículos",
      "Competencias y Plan Anual de Capacitación",
      "Auditorías externas",
      "Seguros y pólizas",
    ],
    correct: 1,
  },
  {
    id: 10,
    question: "¿Qué se verifica en los PASOS 16 y 17 del PESV?",
    image: "/vehicle-inspection-maintenance.jpg",
    imageAlt: "Inspección y mantenimiento de vehículos",
    options: [
      "Documentación de conductores",
      "Inspección y mantenimiento de vehículos seguros",
      "Capacitaciones en seguridad vial",
      "Auditorías de cumplimiento",
    ],
    correct: 1,
  },
]

export default function QuizSection() {
  const [userName, setUserName] = useState("")
  const [isStarted, setIsStarted] = useState(false)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleStart = () => {
    if (userName.trim()) {
      setIsStarted(true)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const correctCount = Object.entries(answers).filter(([questionId, answer]) => {
    const question = quizQuestions.find((q) => q.id === Number.parseInt(questionId))
    return question && question.correct === answer
  }).length

  const percentage = Math.round((correctCount / quizQuestions.length) * 100)

  const handleDownloadPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    const results = quizQuestions.map((q, idx) => {
      const userAnswer = answers[q.id]
      const isCorrect = userAnswer === q.correct
      return {
        question: q.question,
        userAnswer: userAnswer !== undefined ? q.options[userAnswer] : "No respondida",
        correctAnswer: q.options[q.correct],
        isCorrect,
      }
    })

    const date = new Date().toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 15
    const contentWidth = pageWidth - 2 * margin
    let yPosition = margin

    // Helper function to add new page if needed
    const checkPageBreak = (requiredSpace: number) => {
      if (yPosition + requiredSpace > pageHeight - margin) {
        doc.addPage()
        yPosition = margin
        return true
      }
      return false
    }

    // Helper function to wrap text
    const wrapText = (text: string, maxWidth: number, fontSize: number) => {
      doc.setFontSize(fontSize)
      return doc.splitTextToSize(text, maxWidth)
    }

    // Header
    doc.setFillColor(0, 102, 204)
    doc.rect(0, 0, pageWidth, 40, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(18)
    doc.setFont("helvetica", "bold")
    doc.text("PLAN ESTRATÉGICO DE SEGURIDAD VIAL", pageWidth / 2, 15, { align: "center" })
    doc.setFontSize(11)
    doc.setFont("helvetica", "normal")
    doc.text("Evaluación de Conocimientos - Resolución 40595 de 2022", pageWidth / 2, 25, { align: "center" })

    yPosition = 50

    // Info section
    doc.setFillColor(248, 249, 250)
    doc.rect(margin, yPosition, contentWidth, 35, "F")
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text("Conductor:", margin + 5, yPosition + 8)
    doc.setFont("helvetica", "normal")
    doc.text(userName, margin + 35, yPosition + 8)

    doc.setFont("helvetica", "bold")
    doc.text("Fecha de evaluación:", margin + 5, yPosition + 16)
    doc.setFont("helvetica", "normal")
    doc.text(date, margin + 55, yPosition + 16)

    doc.setFont("helvetica", "bold")
    doc.text("Total de preguntas:", margin + 5, yPosition + 24)
    doc.setFont("helvetica", "normal")
    doc.text(`${quizQuestions.length}`, margin + 50, yPosition + 24)

    yPosition += 45

    // Score section
    const scoreHeight = 45
    checkPageBreak(scoreHeight)

    doc.setFillColor(0, 102, 204)
    doc.roundedRect(margin, yPosition, contentWidth, scoreHeight, 3, 3, "F")

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("CALIFICACIÓN OBTENIDA", pageWidth / 2, yPosition + 10, { align: "center" })

    doc.setFontSize(36)
    doc.text(`${percentage}%`, pageWidth / 2, yPosition + 25, { align: "center" })

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text(`${correctCount} de ${quizQuestions.length} respuestas correctas`, pageWidth / 2, yPosition + 33, {
      align: "center",
    })

    const status = percentage >= 80 ? "EXCELENTE ✓" : percentage >= 60 ? "APROBADO ✓" : "REQUIERE REFUERZO"
    doc.text(`Estado: ${status}`, pageWidth / 2, yPosition + 40, { align: "center" })

    yPosition += scoreHeight + 10

    // Results section title
    checkPageBreak(15)
    doc.setTextColor(0, 102, 204)
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Detalle de Respuestas", margin, yPosition)
    yPosition += 10

    // Questions and answers
    results.forEach((result, idx) => {
      const questionHeight = 35
      checkPageBreak(questionHeight)

      // Question box
      doc.setDrawColor(224, 224, 224)
      doc.setLineWidth(0.5)
      doc.roundedRect(margin, yPosition, contentWidth, questionHeight, 2, 2, "S")

      // Question number and text
      doc.setTextColor(0, 102, 204)
      doc.setFontSize(9)
      doc.setFont("helvetica", "bold")
      doc.text(`Pregunta ${idx + 1}`, margin + 3, yPosition + 5)

      doc.setTextColor(0, 0, 0)
      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      const questionLines = wrapText(result.question, contentWidth - 10, 9)
      doc.text(questionLines, margin + 3, yPosition + 10)

      const questionTextHeight = questionLines.length * 4
      let answerYPosition = yPosition + 10 + questionTextHeight + 2

      // User answer
      const userAnswerColor = result.isCorrect ? [212, 237, 218] : [248, 215, 218]
      doc.setFillColor(...userAnswerColor)
      doc.roundedRect(margin + 3, answerYPosition, contentWidth - 6, 8, 1, 1, "F")

      doc.setFontSize(8)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(0, 0, 0)
      doc.text("Tu respuesta:", margin + 5, answerYPosition + 5)
      doc.setFont("helvetica", "normal")
      const userAnswerLines = wrapText(result.userAnswer, contentWidth - 50, 8)
      doc.text(userAnswerLines, margin + 35, answerYPosition + 5)

      answerYPosition += 10

      // Correct answer (if incorrect)
      if (!result.isCorrect) {
        doc.setFillColor(212, 237, 218)
        doc.roundedRect(margin + 3, answerYPosition, contentWidth - 6, 8, 1, 1, "F")

        doc.setFont("helvetica", "bold")
        doc.text("Respuesta correcta:", margin + 5, answerYPosition + 5)
        doc.setFont("helvetica", "normal")
        const correctAnswerLines = wrapText(result.correctAnswer, contentWidth - 50, 8)
        doc.text(correctAnswerLines, margin + 35, answerYPosition + 5)
      }

      yPosition += questionHeight + 5
    })

    // Footer
    checkPageBreak(25)
    doc.setDrawColor(224, 224, 224)
    doc.setLineWidth(0.5)
    doc.line(margin, yPosition, pageWidth - margin, yPosition)
    yPosition += 5

    doc.setTextColor(100, 100, 100)
    doc.setFontSize(9)
    doc.setFont("helvetica", "bold")
    doc.text("Ingeniería y Construcciones", pageWidth / 2, yPosition, { align: "center" })
    yPosition += 5

    doc.setFontSize(7)
    doc.setFont("helvetica", "normal")
    doc.text("Documento generado automáticamente por la plataforma digital PESV", pageWidth / 2, yPosition, {
      align: "center",
    })
    yPosition += 4

    doc.text("Cumplimiento Ley 1503 de 2011 y Resolución 40595 de 2022", pageWidth / 2, yPosition, {
      align: "center",
    })

    // Save PDF
    const fileName = `Evaluacion_PESV_${userName.replace(/\s+/g, "_")}_${new Date().getTime()}.pdf`
    doc.save(fileName)
  }

  if (!isStarted) {
    return (
      <section id="quiz" className="space-y-8 py-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-[#0066cc]" />
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Evaluación interactiva
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Evaluar conocimiento de conductores</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Evaluación de conocimientos sobre el Plan Estratégico de Seguridad Vial (PESV) según la Resolución 40595 de
            2022.
          </p>
        </div>

        <Card className="mx-auto max-w-md p-8">
          <div className="space-y-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0066cc] to-[#004a99]">
              <User className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Ingresa tus datos</h3>
              <p className="text-sm text-muted-foreground">
                Para comenzar la evaluación, por favor ingresa tu nombre completo
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label htmlFor="userName">Nombre completo</Label>
                <Input
                  id="userName"
                  placeholder="Ej: Juan Pérez García"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleStart()}
                  className="text-base"
                />
              </div>
              <Button
                onClick={handleStart}
                disabled={!userName.trim()}
                className="w-full rounded-full bg-gradient-to-r from-[#0066cc] to-[#004a99] shadow-lg"
              >
                Iniciar evaluación
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-lg bg-accent p-4 text-left text-sm">
              <p className="font-semibold">Esta evaluación incluye:</p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>• {quizQuestions.length} preguntas sobre normativa PESV</li>
                <li>• Resultados inmediatos al finalizar</li>
                <li>• Certificado descargable en PDF</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    )
  }

  return (
    <section id="quiz" className="space-y-8 py-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-[#0066cc]" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Evaluación interactiva</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Evaluación PESV</h2>
            <p className="text-sm text-muted-foreground">
              Conductor: <span className="font-semibold">{userName}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
        <Card className="p-6">
          <div className="space-y-8">
            {quizQuestions.map((question, idx) => (
              <div key={question.id} className="space-y-4">
                <div className="flex gap-3">
                  <Badge className="h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0066cc]">
                    {idx + 1}
                  </Badge>
                  <Label className="text-base font-semibold leading-relaxed">{question.question}</Label>
                </div>

                {question.image && (
                  <div className="pl-10">
                    <div className="overflow-hidden rounded-lg border border-border shadow-sm">
                      <img
                        src={question.image || "/placeholder.svg"}
                        alt={question.imageAlt || "Imagen de pregunta"}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <RadioGroup
                  value={answers[question.id]?.toString()}
                  onValueChange={(value) => {
                    setAnswers({ ...answers, [question.id]: Number.parseInt(value) })
                    setShowResults(false)
                  }}
                  className="space-y-3 pl-10"
                >
                  {question.options.map((option, optionIdx) => {
                    const isSelected = answers[question.id] === optionIdx
                    const isCorrect = question.correct === optionIdx
                    const showFeedback = showResults && isSelected

                    return (
                      <div
                        key={optionIdx}
                        className={`flex items-center space-x-3 rounded-lg border p-4 transition-all ${
                          showFeedback
                            ? isCorrect
                              ? "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950"
                              : "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950"
                            : "hover:bg-accent"
                        }`}
                      >
                        <RadioGroupItem value={optionIdx.toString()} id={`q${question.id}-${optionIdx}`} />
                        <Label htmlFor={`q${question.id}-${optionIdx}`} className="flex-1 cursor-pointer font-normal">
                          {option}
                        </Label>
                        {showFeedback && (
                          <>
                            {isCorrect ? (
                              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600" />
                            )}
                          </>
                        )}
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>
            ))}

            <Button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < quizQuestions.length}
              className="w-full rounded-full bg-gradient-to-r from-[#0066cc] to-[#004a99] shadow-lg"
            >
              Evaluar respuestas
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <h3 className="font-semibold">Resultados de evaluación</h3>
              </div>

              {showResults ? (
                <div className="space-y-4">
                  <div className="rounded-lg bg-slate-800/50 p-6 text-center">
                    <div className="text-5xl font-bold text-blue-400">{percentage}%</div>
                    <div className="mt-2 text-sm text-slate-300">
                      {correctCount} de {quizQuestions.length} respuestas correctas
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300">
                      <strong className="text-blue-300">Calificación:</strong>{" "}
                      {percentage >= 80 ? "Excelente" : percentage >= 60 ? "Aprobado" : "Requiere refuerzo"}
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-blue-300">Estado:</strong>{" "}
                      {percentage >= 60 ? "Conductor certificado" : "Requiere capacitación adicional"}
                    </p>
                  </div>

                  <Button
                    onClick={handleDownloadPDF}
                    variant="outline"
                    className="w-full border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Descargar certificado PDF
                  </Button>
                </div>
              ) : (
                <div className="space-y-3 text-sm text-slate-300">
                  <p>Responde todas las preguntas y haz clic en "Evaluar respuestas" para ver tu calificación.</p>
                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <div className="text-xs uppercase tracking-wider text-slate-400">Progreso</div>
                    <div className="mt-2">
                      <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all"
                          style={{
                            width: `${(Object.keys(answers).length / quizQuestions.length) * 100}%`,
                          }}
                        />
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        {Object.keys(answers).length} de {quizQuestions.length} respondidas
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Normativa aplicable</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Ley 1503 de 2011
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Resolución 40595 de 2022
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  24 pasos metodológicos PESV
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  Ciclo PHVA de mejora continua
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
