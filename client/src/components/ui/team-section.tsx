import { useRef } from "react";
import { Card, CardContent } from "./card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import directorImage from "@assets/Screenshot 2025-08-08 064141_1754626152013.png";
import programDirectorImage from "@assets/Screenshot 2025-08-08 064329_1754626183111.png";
import waterCoordinatorImage from "@assets/Screenshot 2025-08-08 123212_1754645565193.png";

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.2 });
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Dr. Mouhamed Habibou Diallo",
      position: "Executive Director",
      image: directorImage,
      description: "Leading ARPIECA's mission with 15+ years in humanitarian work and Islamic heritage preservation."
    },
    {
      name: "Fatima Ba",
      position: "Program Director", 
      image: programDirectorImage,
      description: "Overseeing education and healthcare initiatives across Senegal's rural communities."
    },
    {
      name: "Ibrahim Diallo",
      position: "Water & Infrastructure Coordinator",
      image: waterCoordinatorImage,
      description: "Managing water well projects and infrastructure development for sustainable community growth."
    },
    {
      name: "Aisha Sarr",
      position: "Community Outreach Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387",
      description: "Building relationships with local communities and coordinating volunteer programs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-black text-primary-green mb-6">Our Team</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Dedicated professionals working together to preserve Islamic heritage and transform communities across Senegal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className={`bg-light-gray rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all transform duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
              />
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary-green mb-2">{member.name}</h3>
                <p className="text-accent-red font-semibold mb-3">{member.position}</p>
                <p className="text-black text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}