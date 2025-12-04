import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Lightbulb, ClipboardList, Megaphone, BarChart3, Shield, BookOpen, CheckCircle2 } from "lucide-react"

const modules = [
  {
    number: 1,
    icon: ClipboardList,
    title: "Evaluación de conocimiento",
    subtitle: "Evaluación de conductores",
    features: [
      "Cuestionarios en línea sobre PESV y normas",
      "Banco de preguntas por temas críticos",
      "Registro automático de puntajes y fechas",
    ],
  },
  {
    number: 2,
    icon: Megaphone,
    title: "Campañas de sensibilización",
    subtitle: "Campañas",
    features: [
      "Repositorio de materiales educativos",
      "Calendario de campañas mensuales",
      "Seguimiento de participación activa",
    ],
  },
  {
    number: 3,
    icon: BarChart3,
    title: "Indicadores y métricas",
    subtitle: "Dashboard de control",
    features: [
      "Visualización de KPIs en tiempo real",
      "Reportes de siniestralidad y tendencias",
      "Alertas automáticas de desviaciones",
    ],
  },
  {
    number: 4,
    icon: Shield,
    title: "Gestión de riesgos (PASO 8)",
    subtitle: "Riesgos críticos",
    features: [
      "Matriz de identificación de riesgos",
      "Planes de mitigación documentados",
      "Seguimiento de acciones correctivas",
    ],
  },
  {
    number: 5,
    icon: BookOpen,
    title: "Documentación y auditoría",
    subtitle: "Cumplimiento normativo",
    features: [
      "Repositorio centralizado de documentos",
      "Checklist de auditorías internas",
      "Generación automática de reportes",
    ],
  },
]

export default function SolutionSection() {
  return (
    <section id="solucion" className="space-y-8 py-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-[#0066cc]" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Propuesta desde Ingeniería de Sistemas
          </p>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Plataforma digital de Seguridad Vial para BOSHMANY
        </h2>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          Proponemos una solución sencilla pero robusta: una plataforma web interna que integre la gestión del PESV con
          módulos específicos para evaluación, campañas, indicadores y auditorías.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Card key={module.number} className="group relative overflow-hidden p-6 transition-all hover:shadow-lg">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-[#0066cc]/10 to-transparent" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="font-semibold">
                    Módulo {module.number}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{module.subtitle}</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-950">
                    <Icon className="h-5 w-5 text-[#0066cc]" />
                  </div>
                  <h3 className="font-semibold leading-tight">{module.title}</h3>
                </div>

                <ul className="space-y-2 text-sm">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 dark:from-slate-900 dark:to-slate-800">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Beneficios de la solución digital</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold">Trazabilidad completa</div>
                <div className="text-sm text-muted-foreground">Registro histórico de todas las actividades</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                <CheckCircle2 className="h-5 w-5 text-[#0066cc]" />
              </div>
              <div>
                <div className="font-semibold">Decisiones basadas en datos</div>
                <div className="text-sm text-muted-foreground">Métricas claras para mejorar continuamente</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-950">
                <CheckCircle2 className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <div className="font-semibold">Cumplimiento garantizado</div>
                <div className="text-sm text-muted-foreground">100% alineado con Resolución 40595</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
