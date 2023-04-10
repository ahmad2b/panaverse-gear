interface PageHeadingProps {
  title: string;
}

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <div className="bg-black relative flex justify-center items-center py-8">
      <div className="absolute inset-0 transform -skew-y-6 bg-white opacity-10"></div>
      <h1 className="relative z-10 text-white text-opacity-90 tracking-wider md:text-7xl p-0 shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
