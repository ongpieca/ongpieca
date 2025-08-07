import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import StatisticsSection from "@/components/ui/statistics-section";
import ChallengeSection from "@/components/ui/challenge-section";
import SolutionSection from "@/components/ui/solution-section";
import TeamSection from "@/components/ui/team-section";
import PartnersSection from "@/components/ui/partners-section";
import ProjectsSection from "@/components/ui/projects-section";
import PartnershipSection from "@/components/ui/partnership-section";
import DonationSection from "@/components/ui/donation-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatisticsSection />
      <ChallengeSection />
      <SolutionSection />
      <TeamSection />
      <PartnersSection />
      <ProjectsSection />
      <PartnershipSection />
      <DonationSection />
      <Footer />
    </div>
  );
}
