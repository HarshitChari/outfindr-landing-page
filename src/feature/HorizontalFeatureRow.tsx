import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

type IHorizontalFeatureRowProps = {
  features: {
    title: string;
    image: string;
    count: number;
  }[];
};

const HorizontalFeatureRow = ({ features }: IHorizontalFeatureRowProps) => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate features to create infinite scroll effect
  const duplicatedFeatures = [...features, ...features];

  // Infinite Auto-Scroll
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startScroll = () => {
      interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1;

          // Reset when halfway through to create infinite illusion
          if (
            scrollRef.current.scrollLeft >=
            scrollRef.current.scrollWidth / 2
          ) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }, 50);
    };

    startScroll();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-20 w-full select-none">
      <div
        ref={scrollRef}
        className="no-scrollbar flex w-full cursor-pointer space-x-4 overflow-x-scroll"
      >
        {duplicatedFeatures.map((feature, index) => (
          <div key={index} className="size-[360px] shrink-0">
            <img
              src={`${router.basePath}${feature.image}`}
              alt={feature.title}
              className="size-[360px] rounded-[32px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { HorizontalFeatureRow };
