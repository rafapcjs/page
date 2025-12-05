import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, AlertTriangle, ClipboardCheck } from "lucide-react"

const evaluations = [
  {
    element: "Plan Estratégico de Seguridad Vial (documento completo)",
    status:
      "Existe una política de seguridad vial conocida, pero el documento PESV completo requiere actualización y formalización.",
    type: "partial" as const,
  },
  {
    element: "Cronograma de implementación del PESV",
    status: "No se ha documentado un cronograma formal de implementación con fechas y responsables definidos.",
    type: "no" as const,
  },
  {
    element: "Matriz de identificación de peligros, valoración de riesgos y controles",
    status: "No existe matriz documentada que identifique peligros viales, valore riesgos y determine controles aplicables.",
    type: "no" as const,
  },
  {
    element: "Listado de procedimientos, programas o protocolos aplicables",
    status: "No se cuenta con listado formal de procedimientos y protocolos de seguridad vial operacionales.",
    type: "no" as const,
  },
  {
    element: "Estadísticas de accidentalidad vial últimos 2 años + Certificación ARL",
    status: "No se dispone de estadísticas consolidadas de accidentalidad ni certificación ARL del año en curso.",
    type: "no" as const,
  },
  {
    element: "Certificación ARL - % cumplimiento Estándares Mínimos SG-SST",
    status: "Falta certificación ARL indicando porcentaje de cumplimiento y radicación al fondo de riesgos laborales.",
    type: "no" as const,
  },
  {
    element: "Información actualizada de personal y flota vehicular",
    status: "No se tiene documentación actualizada de: total trabajadores, conductores, vehículos y tipos de vehículos.",
    type: "no" as const,
  },
  {
    element: "Objetivos y metas del PESV",
    status: "No se han definido ni documentado objetivos y metas específicos de seguridad vial.",
    type: "no" as const,
  },
  {
    element: "Programas de gestión de riesgos críticos (PASO 8)",
    status:
      "No se han implementado programas formales para riesgos como velocidad, fatiga, distracciones, alcohol, etc.",
    type: "no" as const,
  },
  {
    element: "Medición de indicadores del PESV",
    status:
      "No se efectúa seguimiento sistemático de indicadores (siniestros, incidentes, capacitación, mantenimiento).",
    type: "no" as const,
  },
  {
    element: "Auditoría interna del PESV",
    status: "No se ha realizado auditoría interna que evalúe la implementación y eficacia del PESV.",
    type: "no" as const,
  },
  {
    element: "Campañas de sensibilización vial",
    status: "No se desarrollaron campañas de sensibilización en los años 2024 y 2025.",
    type: "no" as const,
  },
  {
    element: "Simulacros y actividades prácticas",
    status:
      "Se realizó un simulacro vial en junio de 2025 en la entrada de Ranchería, lo cual es positivo pero aislado.",
    type: "partial" as const,
  },
]

const StatusBadge = ({ type }: { type: "partial" | "no" | "ok" }) => {
  const configs = {
    partial: {
      icon: AlertTriangle,
      text: "Parcial",
      className:
        "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200",
    },
    no: {
      icon: XCircle,
      text: "No cumple",
      className: "border-red-200 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-200",
    },
    ok: {
      icon: CheckCircle2,
      text: "Cumple",
      className:
        "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
    },
  }

  const config = configs[type]
  const Icon = config.icon

  return (
    <Badge variant="outline" className={`flex items-center gap-1.5 ${config.className}`}>
      <Icon className="h-3.5 w-3.5" />
      {config.text}
    </Badge>
  )
}

export default function EvaluationSection() {
  return (
    <section id="evaluacion" className="space-y-8 py-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <ClipboardCheck className="h-5 w-5 text-[#0066cc]" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Diagnóstico</p>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Evaluación de cumplimiento del PESV en BOSHMANY
        </h2>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          Se realiza una evaluación rápida de algunos componentes esenciales exigidos por la normatividad,
          clasificándolos en: cumple, no cumple o cumplimiento parcial.
        </p>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-6 py-4 text-left text-sm font-semibold">Elemento del PESV</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Situación actual</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {evaluations.map((item, index) => (
                <tr key={index} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium">{item.element}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{item.status}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <StatusBadge type={item.type} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t bg-muted/30 px-6 py-4">
          <p className="text-sm text-muted-foreground">
            <strong>Resultado general:</strong> el PESV está iniciado pero incompleto. Es necesario estructurarlo,
            medirlo y documentarlo para garantizar el cumplimiento legal al finalizar el año 2025.
          </p>
        </div>
      </Card>
    </section>
  )
}
