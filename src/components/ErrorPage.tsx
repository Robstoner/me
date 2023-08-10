import Image from "next/image";
import GradientCircle from "../resources/gradient-circle.svg";
import Link from "next/link";

export default function ErrorPage({
  statusCode,
  title,
  message,
  backLink,
  backLinkText,
}: {
  statusCode: number;
  title: string;
  message: string;
  backLink: string;
  backLinkText: string;
}) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-[75vh] text-center">
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20 stroke-purple-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <span className="text-2xl">{statusCode}</span>
      <p className="text-lg">{message}</p>
      <Link href={backLink} className="text-purple-600 hover:underline">
        {backLinkText}
      </Link>
    </div>
  );
}
