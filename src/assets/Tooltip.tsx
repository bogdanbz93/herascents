import { ReactNode } from "react";
export const Tooltip = ({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) => {
  return (
    <div className="group relative flex flex-col items-center">
      {children}
      <div className="absolute bottom-0 mb-10 flex hidden w-80 flex-col items-center group-hover:flex">
        <span className="relative z-10 rounded-md bg-white p-4 text-base font-medium leading-snug tracking-normal text-gray-600 shadow-lg">
          {message}
        </span>
        <div className="-mt-2 h-3 w-3 rotate-45 bg-white"></div>
      </div>
    </div>
  );
};
