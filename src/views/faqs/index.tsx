import FaqsList from "./FaqsList";
const FAQS = () => {
  return (
    <div>
      <div className="bg-black  flex justify-center items-center py-8 w-10/12 mx-auto">
        <h1 className="text-white text-opacity-50 tracking-wider md:text-7xl p-0">
          FAQs
        </h1>
      </div>
      <FaqsList />
    </div>
  );
};

export default FAQS;
