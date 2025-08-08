import { useRef } from "react";
import { Card, CardContent } from "./card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import classroomImage from "@assets/PHOTO-2025-08-08-01-47-45_1754625641179.jpg";
import waterWellImage from "@assets/unnamed_1754626003238.jpg";
import healthcareImage from "@assets/ong-arpieca-1740381081-193073124_1754626072493.jpg";
import mosqueImage from "@assets/PHOTO-2025-08-08-01-47-51_1754627175313.jpg";
import foodSecurityImage from "@assets/0ba96275-8f82-38f8-95c3-92fd556fa858_1754633093088.jpeg";

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.2 });
  const { t } = useLanguage();
  const projects = [
    {
      title: "Education Infrastructure",
      description: "Building 6 schools to provide quality education and preserve Islamic knowledge for future generations.",
      image: classroomImage,
      stat: "6 Schools Built",
      icon: "🎓"
    },
    {
      title: "Healthcare Services",
      description: "Providing essential medical care including cataract surgeries and health center construction.",
      image: healthcareImage,
      stat: "600+ Surgeries Performed",
      icon: "🏥"
    },
    {
      title: "Water Access",
      description: "Drilling water wells to provide clean, accessible water sources for entire communities.",
      image: waterWellImage,
      stat: "305 Wells Drilled",
      icon: "💧"
    },
    {
      title: "Religious Infrastructure",
      description: "Constructing mosques to serve as spiritual centers and preserve Islamic heritage in communities.",
      image: mosqueImage,
      stat: "48 Mosques Built",
      icon: "🕌"
    },
    {
      title: "Food Security",
      description: "Distributing essential food items and COVID-19 relief to vulnerable families, widows, and orphans.",
      image: foodSecurityImage,
      stat: "1000+ Families Supported",
      icon: "🤝"
    },
    {
      title: "International Partnerships",
      description: "Collaborating with Kuwait-based charities and Senegalese authorities for maximum impact.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      stat: "Strategic Partnerships",
      icon: "🤝"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-black text-primary-green mb-6">{t.projects.title}</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            {t.projects.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-light-gray rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all transform duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary-green mb-3">{project.title}</h3>
                <p className="text-black mb-4">{project.description}</p>
                <div className="flex items-center text-accent-red font-semibold">
                  <span className="mr-2 text-2xl">{project.icon}</span>
                  {project.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
