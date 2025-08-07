import Counter from "./counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function StatisticsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.7 });

  return (
    <section id="impact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in">
            <div className="text-4xl text-primary-green mb-4">🏗️</div>
            <div className="text-4xl lg:text-6xl font-black text-primary-green mb-2">
              <Counter end={708} isVisible={isVisible} />
            </div>
            <p className="text-gray-700 font-semibold">Total Projects<br />Completed in 2020</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-4xl text-accent-red mb-4">🏫</div>
            <div className="text-4xl lg:text-6xl font-black text-accent-red mb-2">
              <Counter end={6} isVisible={isVisible} />
            </div>
            <p className="text-gray-700 font-semibold">Schools & Health Centers<br />Constructed</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-4xl text-blue-600 mb-4">💧</div>
            <div className="text-4xl lg:text-6xl font-black text-blue-600 mb-2">
              <Counter end={305} isVisible={isVisible} />
            </div>
            <p className="text-gray-700 font-semibold">Water Wells<br />Drilled</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-4xl text-green-600 mb-4">👁️</div>
            <div className="text-4xl lg:text-6xl font-black text-green-600 mb-2">
              <Counter end={600} isVisible={isVisible} />
            </div>
            <p className="text-gray-700 font-semibold">Cataract Surgeries<br />Performed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
