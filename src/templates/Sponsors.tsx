import { Player } from '@lottiefiles/react-lottie-player';
import Spline from '@splinetool/react-spline/next';

import { Section } from '@/layout/Section';

// Dynamically import Spline to prevent SSR issues

const Sponsors = () => {
  return (
    <Section xPadding="px-0" yPadding="py-50" zIndex="z-0">
      <div className="relative flex h-screen w-full items-center justify-center">
        {/* Background Lottie Animation */}
        <div className="z-1 absolute inset-0 flex items-center justify-center">
          <Player
            autoplay
            loop
            src="https://lottie.host/1280ac6b-2ebd-4b7a-bf60-5f21990e0b7c/huMZrrYUUp.json"
            style={{ height: '400%', width: '100%' }}
          />
        </div>

        {/* Middle Layer: India Map SVG */}
        <div className="z-2 absolute inset-0 flex items-center justify-center">
          <img
            src="/assets/images/india.svg"
            alt="India Map"
            className="h-[200%] max-h-[1100px] w-auto max-w-[900px] object-contain"
          />
        </div>

        {/* Spline 3D Scene */}
        <div className="z-3 absolute inset-0 flex items-center justify-center">
          <Spline scene="https://prod.spline.design/fj99XPfi-cwN9q1a/scene.splinecode" />
        </div>

        {/* Foreground Lottie Animation */}
        <div className="z-4 absolute inset-0 flex items-center justify-center">
          <Player
            src="https://lottie.host/88f3fcc9-6433-46a9-9517-e394be91e707/cGBz5pKuD4.json"
            style={{ height: '75%', width: '75%' }}
          />
        </div>
      </div>
    </Section>
  );
};

export { Sponsors };
