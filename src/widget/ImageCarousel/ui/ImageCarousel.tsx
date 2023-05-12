import { Children, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';

interface ImageCarouselProps {
  className?: string;
  children: ReactNode;
}

export const ImageCarousel: FC<ImageCarouselProps> = ({
  className = '',
  children
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(4);
  const [length, setLength] = useState(Children.count(children));
  const [isRepeating, setIsRepeating] = useState(Children.count(children) > 4);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    setLength(Children.count(children));
    setIsRepeating(Children.count(children) > 4);
  }, [children]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === 4 || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, length]);

  const next = (): void => {
    if (isRepeating || currentIndex < length - 4) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = (): void => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTransitionEnd = (): void => {
    if (isRepeating) {
      if (currentIndex <= 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex >= length + 4) {
        setTransitionEnabled(false);
        setCurrentIndex(4);
      }
    }
  };

  const renderExtraPrev = (): ReactNode[] => {
    const output: ReactNode[] = [];
    const childrenArray = Children.toArray(children);
    for (let index = 0; index < 4; index++) {
      output.push(childrenArray[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = (): ReactNode[] => {
    const output: ReactNode[] = [];
    const childrenArray = Children.toArray(children);
    for (let index = 0; index < 4; index++) {
      output.push(childrenArray[index]);
    }
    return output;
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex relative">
        <div className="overflow-hidden w-full h-full">
          <button
            onClick={prev}
            className="absolute z-[1] top-1/2 -translate-y-1/2 rotate-45 w-[36px] h-[36px] border-l-4 border-b-4 border-solid border-red-600 left-6"
          />
          <div
            className="carousel-content show-4 flex gap-1 transition-all duration-300"
            style={{
              transform: `translateX(-${currentIndex * 25.35}%)`,
              transition: !transitionEnabled ? 'none' : undefined
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > 4 && isRepeating && renderExtraPrev()}
            {children}
            {length > 4 && isRepeating && renderExtraNext()}
          </div>
          <button
            onClick={next}
            className="absolute z-[1] top-1/2 -translate-y-1/2 rotate-45 w-[36px] h-[36px] border-t-4 border-r-4 border-solid border-red-600 right-6"
          />
        </div>
      </div>
    </div>
  );
};
