import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ResolutionSection from "@/components/resolution-section"
import EvaluationSection from "@/components/evaluation-section"
import SolutionSection from "@/components/solution-section"
import QuizSection from "@/components/quiz-section"
import Footer from "@/components/footer"

export default function PESVPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero />
        <ResolutionSection />
        <EvaluationSection />
        <SolutionSection />
        <QuizSection />
      </main>
      <Footer />
    </div>
  )
}
