"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Props for each photo
export interface PhotoStackItem {
  src: string;
  name: string;
}

export interface ImagesAnimationProps {
  items?: PhotoStackItem[];
  title?: React.ReactNode;
  className?: string;
}

// Random number helper
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Generate non-overlapping transforms
const generateNonOverlappingTransforms = (items: PhotoStackItem[]) => {
  const positions: { x: number; y: number; r: number }[] = [];
  const displayedItems = items.slice(0, 5);

  const cardWidthVW = 25;
  const cardHeightVH = 45;
  const maxRetries = 100;

  displayedItems.forEach(() => {
    let newPos;
    let collision;
    let retries = 0;

    do {
      collision = false;
      const x = random(-45, 45); // vw
      const y = random(-25, 25); // vh
      const r = random(-25, 25); // deg
      newPos = { x, y, r };

      for (const pos of positions) {
        const dx = Math.abs(newPos.x - pos.x);
        const dy = Math.abs(newPos.y - pos.y);
        if (dx < cardWidthVW && dy < cardHeightVH) {
          collision = true;
          break;
        }
      }
      retries++;
    } while (collision && retries < maxRetries);

    positions.push(newPos);
  });

  return positions.map(
    (pos) => `translate(${pos.x}vw, ${pos.y}vh) rotate(${pos.r}deg)`
  );
};

function ImagesAnimation({
  items,
  title = "Our Work",
  className,
}: ImagesAnimationProps) {
  // If no items passed, use default images
  const defaultItems: PhotoStackItem[] = [
    {
      src: "https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?_gl=1*dz9p99*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTYzOTU3MDgkbzE2JGcxJHQxNzU2Mzk1NzIyJGo0NiRsMCRoMA..",
      name: "Make UP",
    },
    {
      src: "https://images.pexels.com/photos/22589318/pexels-photo-22589318.jpeg?_gl=1*1x20pz4*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTYzOTU3MDgkbzE2JGcxJHQxNzU2Mzk1NzY3JGoxJGwwJGgw",
      name: "Cutting",
    },
    {
      src: "https://images.pexels.com/photos/4677847/pexels-photo-4677847.jpeg?_gl=1*45jm3a*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTYzOTU3MDgkbzE2JGcxJHQxNzU2Mzk1ODExJGo0MCRsMCRoMA..",
      name: "Spa",
    },
    {
      src: "https://images.pexels.com/photos/4677845/pexels-photo-4677845.jpeg?_gl=1*9eaqpc*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTYzOTU3MDgkbzE2JGcxJHQxNzU2Mzk1ODQ3JGo0JGwwJGgw",
      name: "Nails",
    },
    {
      src: "https://images.pexels.com/photos/4004122/pexels-photo-4004122.jpeg?_gl=1*gw3mzm*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTYzOTU3MDgkbzE2JGcxJHQxNzU2Mzk1OTIyJGo0OSRsMCRoMA..",
      name: "Free Style",
    },
  ];

  const finalItems = items && items.length > 0 ? items : defaultItems;

  const [topCardIndex, setTopCardIndex] = React.useState(0);
  const [isGroupHovered, setIsGroupHovered] = React.useState(false);
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [spreadTransforms, setSpreadTransforms] = React.useState<string[]>([]);

  const displayedItems = finalItems.slice(0, 5);
  const baseRotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-4",
    "-rotate-4",
    "rotate-6",
  ];

  const handleMouseEnter = () => {
    const newTransforms = generateNonOverlappingTransforms(finalItems);
    setSpreadTransforms(newTransforms);
    setIsGroupHovered(true);
  };

  const handleCardClick = (index: number) => {
    if (isGroupHovered) {
      setClickedIndex(index);
      setTimeout(() => {
        setIsGroupHovered(false);
        setTopCardIndex(index);
        setClickedIndex(null);
      }, 700);
    } else {
      setTopCardIndex(index);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col bg-[#ffffff] items-center justify-center gap-8 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <div
        className="relative min-h-screen sm:h-[28rem] md:min-h-screen w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => !clickedIndex && setIsGroupHovered(false)}
      >
        <div className="relative left-1/2 top-1/2 h-72 w-48 sm:h-80 sm:w-60 md:h-96 md:w-72 -translate-x-1/2 -translate-y-1/2">
          {displayedItems.map((item, index) => {
            const isTopCard = index === topCardIndex;
            const numItems = displayedItems.length;
            let stackPosition = index - topCardIndex;
            if (stackPosition < 0) stackPosition += numItems;
            const isClicked = index === clickedIndex;

            const transform = isGroupHovered
              ? spreadTransforms[index]
              : `translateY(${stackPosition * 0.5}rem) scale(${
                  1 - stackPosition * 0.05
                })`;

            return (
              <div
                key={item.name}
                onClick={() => handleCardClick(index)}
                className={cn(
                  "absolute inset-0 cursor-pointer rounded-xl bg-background p-2 shadow-lg transition-all duration-500 ease-in-out",
                  "h-72 w-48 sm:h-80 sm:w-60 md:h-96 md:w-72",
                  {
                    "rotate-0": isGroupHovered,
                    [baseRotations[stackPosition]]:
                      !isGroupHovered && !isTopCard,
                    "hover:scale-110": isGroupHovered && !isClicked,
                    "animate-spin-y": isClicked,
                  }
                )}
                style={{
                  transform: transform,
                  zIndex: isClicked
                    ? 200
                    : isGroupHovered
                    ? 100
                    : isTopCard
                    ? numItems
                    : numItems - stackPosition,
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-start">
                  <div className="h-[75%] w-full">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                  <div className="flex h-[25%] items-center justify-center">
                    <p className="font-serif text-lg sm:text-xl italic text-foreground">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h3 className="text-center text-black text-xl sm:text-2xl font-bold text-foreground">
        {title}
      </h3>
    </div>
  );
}

export default ImagesAnimation;
