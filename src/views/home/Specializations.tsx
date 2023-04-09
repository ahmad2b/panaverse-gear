interface SpecializationProps {
  heading: string;
  description: string;
  cards: SpecializationCardProps[];
}

interface SpecializationCardProps {
  title: string;
  description: string;
  bgCharacter: string;
}

const SpecializationCard = ({
  title,
  description,
  bgCharacter,
}: SpecializationCardProps) => {
  return (
    <div className="relative flex flex-col m-2 bg-black hover:bg-slate-900 border shadow-md rounded-xl max-w-sm shadow-black ">
      <div className="p-4 md:p-10">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-800 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="text-white absolute right-2 bottom-2 text-9xl opacity-10">
        {bgCharacter}
      </div>
    </div>
  );
};

const Specializations = ({
  heading,
  description,
  cards,
}: SpecializationProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-36 text-center">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>

      <div className="flex flex-wrap w-11/12 mx-auto mt-8">
        {cards.map((card, index) => (
          <SpecializationCard
            key={index}
            title={card.title}
            description={card.description}
            bgCharacter={card.bgCharacter}
          />
        ))}
      </div>
    </>
  );
};

export default Specializations;
