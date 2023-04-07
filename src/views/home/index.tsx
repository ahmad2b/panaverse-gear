import React from "react";
import Image from "next/image";
import DarkButton from "@/components/DarkButton";
import LightButton from "@/components/LightButton";

const HomePage = () => {
  return (
    <section>
      <HeroSection
        title="Unlock Your Potential With Panaverse DAO"
        description="Discover our comprehensive courses in emerging technologies and kickstart your career in the tech industry."
        buttonTextA="Learn More"
        webLinkA="/about"
        buttonTextB="Enroll Now"
        webLinkB="/enroll"
      />
    </section>
  );
};

export default HomePage;

interface HeroSectionProps {
  title: string;
  description: string;
  buttonTextA: string;
  webLinkA: string;
  buttonTextB: string;
  webLinkB: string;
}

const HeroSection = ({
  title,
  description,
  buttonTextA,
  webLinkA,
  buttonTextB,
  webLinkB,
}: HeroSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-24 ">
      <div className="  mb-12 opacity-80">
        <Image
          src="/screen.png"
          alt="Panaverse DAO Logo"
          width={200}
          height={250}
        />
      </div>
      <div className="text-center">
        <h1 className="mb-6">{title}</h1>
        <p className="">{description}</p>
      </div>
      <div className="flex items-center justify-center space-x-12 mt-6 ">
        <LightButton buttonText={buttonTextA} webLink={webLinkA} />
        <DarkButton buttonText={buttonTextB} webLink={webLinkB} />
      </div>
    </div>
  );
};
