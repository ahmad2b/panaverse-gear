import Link from "next/link";

type DarkButtonProps = {
  buttonText: string;
  webLink: string;
};

const DarkButton = ({ buttonText, webLink }: DarkButtonProps) => {
  return (
    <div className="bg-slate-950 rounded-md mt-2 text-white  font-medium py-2 px-6 hover:bg-slate-700 ml-auto">
      <Link href={`${webLink}`}>
        <button className="">{buttonText}</button>
      </Link>
    </div>
  );
};

export default DarkButton;
