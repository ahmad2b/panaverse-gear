import Image from "next/image";
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";

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
      {/* <div className="bg-black p-12 mb-12 rounded-md ring ring-slate-100 shadow-2xl shadow-black">
        <Image
          src="/panaverse80_80.png"
          alt="Panaverse DAO Logo"
          width={80}
          height={80}
        />
      </div> */}
      <div className="  mb-12 opacity-80">
        <Image
          src="/screen.png"
          alt="Panaverse DAO Logo"
          width={200}
          height={250}
        />
      </div>
      <div className="text-center">
        <h1>{title}</h1>
        <p className="">{description}</p>
      </div>
      <div className="flex items-center justify-center space-x-12 mt-6 ">
        <LightButton buttonText={buttonTextA} webLink={webLinkA} />
        <DarkButton buttonText={buttonTextB} webLink={webLinkB} />
      </div>
    </div>
  );
};

export default HeroSection;
