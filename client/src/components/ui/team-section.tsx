import { useRef } from "react";
import { Card, CardContent } from "./card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import directorImage from "@assets/Screenshot 2025-08-08 064141_1754626152013.png";
import programDirectorImage from "@assets/Screenshot 2025-08-08 064329_1754626183111.png";
import waterCoordinatorImage from "@assets/Screenshot 2025-08-08 123030_1754645463294.png";
import outreachManagerImage from "@assets/Screenshot 2025-08-08 123510_1754645742341.png";

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.2 });
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Dr. Mouhamed Habibou Diallo",
      position: t.team.members.director.position,
      image: directorImage,
      description: t.team.members.director.description
    },
    {
      name: "Cherif daouda haidara",
      position: t.team.members.programDirector.position, 
      image: programDirectorImage,
      description: t.team.members.programDirector.description
    },
    {
      name: "Ibrahim Diallo",
      position: t.team.members.waterCoordinator.position,
      image: waterCoordinatorImage,
      description: t.team.members.waterCoordinator.description
    },
    {
      name: "Aisha Sarr",
      position: t.team.members.outreachManager.position,
      image: outreachManagerImage,
      description: t.team.members.outreachManager.description
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-black text-primary-green mb-6">{t.team.title}</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            {t.team.description}
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