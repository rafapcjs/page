import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Shield, TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section id="contexto" className="grid gap-8 py-12 lg:grid-cols-[1.2fr,1fr] lg:gap-12">
      <div className="flex flex-col justify-center space-y-6">
        <Badge
          variant="secondary"
          className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"
        >
          <span className="mr-2">📊</span>
          Estudio de caso · Ingeniería de Sistemas
        </Badge>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
          Plan Estratégico de Seguridad Vial (PESV) digital para{" "}
          <span className="bg-gradient-to-r from-[#0066cc] to-[#004a99] bg-clip-text text-transparent">
            BOSHMANY INGENIERÍA
          </span>
        </h1>

        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          Propuesta de nuestro grupo de trabajo para apoyar a Barfy Erminsul de los Reyes y Zulehika Jasbleidy en el
          cumplimiento legal de la Resolución 40595 de 2022, cerrando 2025 con un PESV estructurado, medible y digital.
        </p>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>55 conductores activos</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>Política vial implementada</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>Equipo multidisciplinario</span>
          </div>
        </div>
      </div>

      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.15),transparent_50%)]" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-400" />
            <Badge variant="outline" className="border-slate-600 bg-slate-800/50 text-slate-200">
              PESV Inteligente · Versión 2025
            </Badge>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Cumplimiento legal + plataforma digital</h3>
            <p className="mt-3 leading-relaxed text-slate-300">
              Transformamos el PESV en un sistema vivo: indicadores, evaluaciones a conductores, campañas de
              sensibilización y auditoría, todo centralizado en una solución web sencilla pero profesional.
            </p>
          </div>

          <div className="grid gap-4 rounded-xl border border-slate-700 bg-slate-800/50 p-4 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400">Situación actual</div>
              <div className="mt-1 font-semibold text-white">PESV incompleto</div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-wider text-slate-400">Objetivo 2025</div>
              <div className="mt-1 flex items-center justify-end gap-2 font-semibold text-emerald-400">
                <TrendingUp className="h-4 w-4" />
                100% trazabilidad
              </div>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">
            Con esta propuesta, BOSHMANY puede demostrar su compromiso con la seguridad vial y enfocarse en sus
            proyectos con total tranquilidad.
          </p>
        </div>
      </Card>
    </section>
  )
}
