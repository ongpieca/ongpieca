import { CheckCircle } from "lucide-react";

export default function PartnershipSection() {
  const achievements = [
    "Legally recognized humanitarian NGO in Senegal",
    "Partnership with Kuwait-based Horizons Charity Society", 
    "Collaboration with Senegalese government authorities",
    "Complete financial transparency and accountability"
  ];

  return (
    <section className="py-20 bg-primary-green text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Transparency & Partnerships</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              ARPIECA operates with complete transparency and legal compliance. We work in full accordance with 
              Senegalese law and maintain strong partnerships with certified international organizations, 
              particularly with Kuwait-based charities and the Haute Autorité du Waqf.
            </p>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-yellow-400 mr-3 h-5 w-5" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Partnership meeting" 
              className="rounded-2xl shadow-2xl" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
