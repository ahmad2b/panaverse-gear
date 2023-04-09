import Image from "next/image";
import LoginForm from "./LoginForm";

const LoginPanel = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="rounded-xl bg-gradient-to-r from-black via-gray-900 to-black shadow-xl px-16 py-10 backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center space-y-4">
            <Image
              src={"/panaverse80_80.png"}
              alt="Picture of the author"
              width={80}
              height={80}
            />
            <h1 className="mb-2 text-3xl font-semibold text-white">
              Panaverse DAO
            </h1>
            <span className="text-gray-400">Enter Login Details:</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;
