"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const boxesRef = useRef<HTMLDivElement>(null);

  // Optional GSAP for smoother animation (not strictly needed since CSS handles it)
  useEffect(() => {
    const boxes = boxesRef.current?.querySelectorAll(".box");
    if (!boxes) return;

    boxes.forEach((box, i) => {
      gsap.set(box, { visibility: "visible" });
    });
  }, []);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
      <div className="relative w-[70%] h-[70%] mx-auto my-auto rotate-[-45deg]">
        {["one", "two", "three", "four", "five", "six"].map((name, idx) => (
          <div
            key={name}
            ref={boxesRef}
            className={`box absolute inset-0 bg-gradient-to-r from-[#141562] via-[#486FBC] via-[#EAB5A1] via-[#8DD6FF] via-[#4973C9] via-[#D07CA7] via-[#F4915E] via-[#F5919E] via-[#B46F89] via-[#141562] via-[#486FBC] bg-[length:1000%_1000%] animate-moveGradient ${
              name === "one"
                ? "animate-oneMove"
                : name === "two"
                ? "animate-twoMove delay-[0.15s]"
                : name === "three"
                ? "animate-threeMove delay-[0.3s]"
                : name === "four"
                ? "animate-fourMove delay-[0.575s]"
                : name === "five"
                ? "animate-fiveMove delay-[0.725s]"
                : "animate-sixMove delay-[0.875s]"
            }`}
            style={{ visibility: "hidden", borderRadius: "5%" }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes moveGradient {
          to {
            background-position: 100% 50%;
          }
        }

        .animate-moveGradient {
          animation: moveGradient 15s infinite;
        }

        /* Copy all keyframes from your CSS for oneMove -> sixMove */
        @keyframes oneMove {
          0% {
            visibility: visible;
            clip-path: inset(0% 35% 70% round 5%);
          }
          14.2857% {
            clip-path: inset(0% 35% 70% round 5%);
          }
          28.5714% {
            clip-path: inset(35% round 5%);
          }
          42.8571% {
            clip-path: inset(35% 70% 35% 0 round 5%);
          }
          57.1428% {
            clip-path: inset(35% 70% 35% 0 round 5%);
          }
          71.4285% {
            clip-path: inset(0% 70% 70% 0 round 5%);
          }
          85.7142% {
            clip-path: inset(0% 70% 70% 0 round 5%);
          }
          100% {
            clip-path: inset(0% 35% 70% round 5%);
          }
        }

        @keyframes twoMove {
          0% {
            visibility: visible;
            clip-path: inset(0% 70% 70% 0 round 5%);
          }
          14.2857% {
            clip-path: inset(0% 70% 70% 0 round 5%);
          }
          28.5714% {
            clip-path: inset(0% 35% 70% round 5%);
          }
          42.8571% {
            clip-path: inset(0% 35% 70% round 5%);
          }
          57.1428% {
            clip-path: inset(35% round 5%);
          }
          71.4285% {
            clip-path: inset(35% 70% 35% 0 round 5%);
          }
          85.7142% {
            clip-path: inset(35% 70% 35% 0 round 5%);
          }
          100% {
            clip-path: inset(0% 70% 70% 0 round 5%);
          }
        }

        @keyframes threeMove {
          0% {
            visibility: visible;
            clip-path: inset(35% 70% 35% 0 round 5%);
          }
          14.2857% {
            clip-path: inset(35% 70% 35% 0 round 5%);
          }
          28.5714% {
            clip-path: inset(0% 70% 70% 0 round 5%);
          }
          42.8571% {
            clip-path: inset(0% 70% 70% 0 round 5%);
          }
          57.1428% {
            clip-path: inset(0% 35% 70% round 5%);
          }
          71.4285% {
            clip-path: inset(0% 35% 70% round 5%);
          }
          85.7142% {
            clip-path: inset(35% round 5%);
          }
          100% {
            clip-path: inset(35% 70% 35% 0 round 5%);
          }
        }

        @keyframes fourMove {
          0% {
            visibility: visible;
            clip-path: inset(35% 0% 35% 70% round 5%);
          }
          14.2857% {
            clip-path: inset(35% 0% 35% 70% round 5%);
          }
          28.5714% {
            clip-path: inset(35% round 5%);
          }
          42.8571% {
            clip-path: inset(70% 35% 0% 35% round 5%);
          }
          57.1428% {
            clip-path: inset(70% 35% 0% 35% round 5%);
          }
          71.4285% {
            clip-path: inset(70% 0 0 70% round 5%);
          }
          85.7142% {
            clip-path: inset(70% 0 0 70% round 5%);
          }
          100% {
            clip-path: inset(35% 0% 35% 70% round 5%);
          }
        }

        @keyframes fiveMove {
          0% {
            visibility: visible;
            clip-path: inset(70% 0 0 70% round 5%);
          }
          14.2857% {
            clip-path: inset(70% 0 0 70% round 5%);
          }
          28.5714% {
            clip-path: inset(35% 0% 35% 70% round 5%);
          }
          42.8571% {
            clip-path: inset(35% 0% 35% 70% round 5%);
          }
          57.1428% {
            clip-path: inset(35% round 5%);
          }
          71.4285% {
            clip-path: inset(70% 35% 0% 35% round 5%);
          }
          85.7142% {
            clip-path: inset(70% 35% 0% 35% round 5%);
          }
          100% {
            clip-path: inset(70% 0 0 70% round 5%);
          }
        }

        @keyframes sixMove {
          0% {
            visibility: visible;
            clip-path: inset(70% 35% 0% 35% round 5%);
          }
          14.2857% {
            clip-path: inset(70% 35% 0% 35% round 5%);
          }
          28.5714% {
            clip-path: inset(70% 0 0 70% round 5%);
          }
          42.8571% {
            clip-path: inset(70% 0 0 70% round 5%);
          }
          57.1428% {
            clip-path: inset(35% 0% 35% 70% round 5%);
          }
          71.4285% {
            clip-path: inset(35% 0% 35% 70% round 5%);
          }
          85.7142% {
            clip-path: inset(35% round 5%);
          }
          100% {
            clip-path: inset(70% 35% 0% 35% round 5%);
          }
        }

        .animate-oneMove {
          animation: oneMove 3.5s infinite;
        }
        .animate-twoMove {
          animation: twoMove 3.5s 0.15s infinite;
        }
        .animate-threeMove {
          animation: threeMove 3.5s 0.3s infinite;
        }
        .animate-fourMove {
          animation: fourMove 3.5s 0.575s infinite;
        }
        .animate-fiveMove {
          animation: fiveMove 3.5s 0.725s infinite;
        }
        .animate-sixMove {
          animation: sixMove 3.5s 0.875s infinite;
        }
      `}</style>
    </div>
  );
}
