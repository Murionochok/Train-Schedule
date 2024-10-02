import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  link: string;
};

export default function Button({ children, ...props }: ButtonProps) {
  const { className, link } = props;
  return (
    <Link
      href={link}
      className={`px-4 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-400 ease-linear duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
