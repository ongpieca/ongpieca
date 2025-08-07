import Counter from "./counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function StatisticsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.3 });

  return (
    <section id="impact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className={`text-4xl mb-4 transform transition-all duration-700 ${isVisible ? 'animate-bounce text-primary-green' : 'opacity-0 translate-y-10'}`}>🏗️</div>
            <div className={`text-4xl lg:text-6xl font-black text-primary-green mb-2 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Counter end={708} isVisible={isVisible} />
            </div>
            <p className={`text-gray-700 font-semibold transform transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Total Projects<br />Completed in 2020</p>
          </div>
          <div className="text-center group">
            <div className={`text-4xl mb-4 transform transition-all duration-700 delay-200 ${isVisible ? 'animate-bounce text-accent-red' : 'opacity-0 translate-y-10'}`}>🏫</div>
            <div className={`text-4xl lg:text-6xl font-black text-accent-red mb-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Counter end={7} isVisible={isVisible} />
            </div>
            <p className={`text-gray-700 font-semibold transform transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Schools & Health Centers<br />Constructed</p>
          </div>
          <div className="text-center group">
            <div className={`text-4xl mb-4 transform transition-all duration-700 delay-300 ${isVisible ? 'animate-bounce text-blue-600' : 'opacity-0 translate-y-10'}`}>💧</div>
            <div className={`text-4xl lg:text-6xl font-black text-blue-600 mb-2 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Counter end={305} isVisible={isVisible} />
            </div>
            <p className={`text-gray-700 font-semibold transform transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Water Wells<br />Drilled</p>
          </div>
          <div className="text-center group">
            <div className={`text-4xl mb-4 transform transition-all duration-700 delay-500 ${isVisible ? 'animate-bounce text-green-600' : 'opacity-0 translate-y-10'}`}>👁️</div>
            <div className={`text-4xl lg:text-6xl font-black text-green-600 mb-2 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Counter end={600} isVisible={isVisible} />
            </div>
            <p className={`text-gray-700 font-semibold transform transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Cataract Surgeries<br />Performed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
