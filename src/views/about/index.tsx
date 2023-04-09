import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="bg-black  flex justify-center items-center py-8">
        <h1 className="text-white text-opacity-50 tracking-wider md:text-7xl p-0">
          About Us
        </h1>
      </div>
      <div className="flex items-center my-8">
        <div className="my-4 w-6/12">
          <p>
            Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
            Karachi, Lahore, Islamabad, and Peshawar
          </p>
          <br />
          <p>
            Getting Ready for the Next Generation and Future of the Internet -{" "}
            <strong>
              Join a 13 Trillion Dollar Industry with 5 Billion Users
            </strong>
          </p>
          <br />
          <p>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
            <p>
              <br />
            </p>
            The internet is without a doubt the most important technological
            development in human history. Web3 and metaverse technologies expand
            the internet as we know it by introducing novel features and
            advancements. Metaverse will make use of all aspects of modern
            technology, including 3D, VR, AR, AI, blockchain, cloud computing,
            voice computing, ambient computing, and more.
          </p>
        </div>
        <div className="flex-grow">
          <Image
            src={"/persosnB.png"}
            className=" sm:mx-auto"
            alt="Panaverse DAO Logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
