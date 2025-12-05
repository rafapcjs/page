"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, FileText, Target, Download } from "lucide-react"

export default function ResolutionSection() {
  const requirements = [
    "Política de seguridad vial respaldada por la alta dirección",
    "Definición de objetivos y metas concretas de seguridad vial",
    "Identificación y gestión de riesgos críticos (PASO 8)",
    "Diseño e implementación de programas de intervención",
    "Medición periódica de indicadores de desempeño del PESV",
    "Realización de auditorías internas y planes de mejora",
    "Capacitaciones y campañas de sensibilización continuas",
  ]

  const gaps = [
    "Sin objetivos ni metas PESV",
    "PASO 8 sin implementar",
    "Sin indicadores",
    "Sin auditoría al PESV",
    "Sin campañas 2024-2025",
  ]

  return (
    <section id="resolucion" className="space-y-8 py-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-[#0066cc]" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Marco normativo</p>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Resolución 40595 de 2022 – Plan Estratégico de Seguridad Vial
        </h2>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          La Resolución 40595 de 2022 del Ministerio de Transporte establece la obligación de adoptar un PESV para las
          empresas con flotas y conductores a cargo. No se trata solo de tener una política, sino de implementar una
          metodología completa con diagnóstico, objetivos, programas e indicadores.
        </p>
        <div className="pt-2">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => {
              const link = document.createElement('a')
              link.href = 'https://www.mintransporte.gov.co/documentos/15/resoluciones-de-2022/'
              link.target = '_blank'
              link.rel = 'noopener noreferrer'
              link.click()
            }}
          >
            <Download className="h-4 w-4" />
            Descargar Resolución 40595 de 2022 (PDF)
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-6 p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-950">
              <Target className="h-5 w-5 text-[#0066cc]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Elementos clave del PESV exigidos</h3>
            </div>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed">
            {requirements.map((req, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066cc]" />
                <span className="text-muted-foreground">{req}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-6 p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-amber-100 p-2 dark:bg-amber-950">
              <AlertCircle className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Brecha actual de BOSHMANY</h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Aunque la empresa ya cuenta con una política de seguridad vial y ha realizado un simulacro, aún no cumple a
            cabalidad con la Resolución 40595:
          </p>
          <div className="flex flex-wrap gap-2">
            {gaps.map((gap, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="border border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200"
              >
                {gap}
              </Badge>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Nuestra propuesta se enfoca en cerrar estas brechas con herramientas digitales de fácil uso y seguimiento
            continuo.
          </p>
        </Card>
      </div>
    </section>
  )
}
