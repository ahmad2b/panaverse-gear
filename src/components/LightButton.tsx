import Link from "next/link";

type LightButtonProps = {
  buttonText: string;
  webLink: string;
};

const LightButton = ({ buttonText, webLink }: LightButtonProps) => {
  return (
    <div className="border border-slate-700 rounded-md mt-2 text-slate-950  font-medium py-2 px-6 hover:bg-gray-200 ml-auto">
      <Link href={`${webLink}`}>
        <button className="">{buttonText}</button>
      </Link>
    </div>
  );
};

export default LightButton;
