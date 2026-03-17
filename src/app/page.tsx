import { Header } from "@/components/Header";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { PersonalInfo } from "@/components/PersonalInfo";
import { ProfessionalVibe } from "@/components/ProfessionalVibe";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Notes } from "@/components/Notes";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* 0. Header Navigation */}
      <Header />

      {/* 1. Scrolly Canvas Component */}
      <ScrollyCanvas />

      {/* Structured Portfolio Data Sections */}
      <PersonalInfo />
      <ProfessionalVibe />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Notes />

      {/* End. Footer */}
      <Footer />
    </main>
  );
}
