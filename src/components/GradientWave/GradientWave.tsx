import { useEffect } from "react";
import { Gradient } from "stripe-gradient";

const GradientWave = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <section className="w-full absolute top-96 left-0 h-[120vh] 2xl:h-[160vh] flex items-center justify-center">
      <canvas id="gradient-canvas" data-transition-in />
    </section>
  );
};

export default GradientWave;
