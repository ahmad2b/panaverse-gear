import HeroSection from "./HeroSection";
import Specializations from "./Specializations";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";
import Trainers from "./Trainers";

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
      <Specializations
        heading="Specializations"
        description={`At Panaverse DAO, we offer a diverse range of specializations to cater to your interests and career goals. \n Choose from our six main specializations to start your learning journey.`}
        cards={SpecializationsArr}
      />
      <WhyChoose />
      <Testimonials />
    </section>
  );
};

export default HomePage;

interface WhyPanaverseProps {
  title: string;
  description: string;
}

const WhyPanaverse = ({ title, description }: WhyPanaverseProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-36 text-center">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

interface SpecializationCardProps {
  title: string;
  description: string;
  bgCharacter: string;
}

const SpecializationsArr: SpecializationCardProps[] = [
  {
    title: "Web 3 and Metaverse Specialization",
    description:
      "Create immersive, decentralized experiences by combining blockchain technology and 3D metaverse environments in the next-gen internet.",
    bgCharacter: "⟁",
    // bgCharacter: "Web3",
  },
  {
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "Harness the power of AI and deep learning to build intelligent APIs and custom TensorFlow models.",
    bgCharacter: "∮",
    // bgCharacter: "AI",
  },
  {
    title: "Cloud-Native Computing Specialization",
    description:
      "Master containerization and orchestration with Kubernetes and CDK for efficient, scalable cloud-native applications.",
    bgCharacter: "⧉",
    // bgCharacter: "CnC",
  },
  {
    title: "Ambient Computing and IoT Specialization",
    description:
      "Design smart environments using voice computing, Matter, and embedded devices for interconnected spaces.",
    bgCharacter: "⌬",
    // bgCharacter: "IoT",
  },
  {
    title: "Genomics and Bioinformatics Specialization",
    description:
      "Analyze and understand genetic data through bioinformatics techniques and essential Python tools.",
    bgCharacter: "⊚",
    // bgCharacter: "BI",
  },
  {
    title: "Network Programmability and Automation Specialization",
    description:
      "Automate network management tasks by leveraging Linux, Python, APIs, and Git for increased efficiency and agility.",
    bgCharacter: "⧜",
    // bgCharacter: "NPA",
  },
];
