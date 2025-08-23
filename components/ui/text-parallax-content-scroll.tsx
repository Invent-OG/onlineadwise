import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-black">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Financial Frustration"
        heading="Are you tired of spending money on ads that don't bring in real bookings?"
      >
        <PainPointContent
          title="Wasted Ad Spend"
          description="Stop throwing money at ads that don't convert. Our system targets only people actively looking for your services."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Competition Pressure"
        heading="Do you feel like bigger competitors are stealing your customers with their online presence?"
      >
        <PainPointContent
          title="Losing Market Share"
          description="Don't let bigger competitors dominate your local market. We'll help you stand out and capture your fair share of customers."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Growth Uncertainty"
        heading="Is your salon relying too much on word of mouth and walk-ins, while you want predictable growth?"
      >
        <PainPointContent
          title="Unpredictable Growth"
          description="Transform from hoping for walk-ins to having a predictable system that brings clients to you consistently."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="System Need"
        heading="Do you wish you had a system that brings clients to you automatically, so you can focus on pampering your guests instead of worrying about sales?"
      >
        <PainPointContent
          title="Automated Client Acquisition"
          description="Focus on what you do best - pampering guests. Let our automated system handle client acquisition and follow-up."
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl text-yellow-400">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl max-w-4xl px-4 leading-tight">
        {heading}
      </p>
    </motion.div>
  );
};

const PainPointContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 bg-black">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-yellow-400">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-gray-300 md:text-2xl">{description}</p>
      <p className="mb-8 text-xl text-gray-400 md:text-2xl">
        This is exactly why we created our proven system - to solve these exact
        problems that salon owners face every day.
      </p>
      <button className="w-full rounded bg-gradient-to-r from-yellow-400 to-yellow-600 px-9 py-4 text-xl text-black font-bold transition-colors hover:from-yellow-500 hover:to-yellow-700 md:w-fit">
        Learn how we solve this <ArrowUpRight className="inline ml-2" />
      </button>
    </div>
  </div>
);
