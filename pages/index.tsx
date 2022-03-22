import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen py-10 text-white bg-dark">
      <div className="text-xl tracking-widest uppercase">essay community</div>
      <div className="flex flex-col items-center">
        <h1 className="mb-3 font-semibold text-7xl">Your Best Essays Yet</h1>
        <h2 className="text-xl text-center whitespace-pre">
          {
            "Essays with the depth of a Paul Graham essay,\nwith the reader engagement of a Twitter thread"
          }
        </h2>

        <div className="flex "></div>
      </div>
      <div>
        <p className="text-sm">
          a production by{" "}
          <ExternalLink href="https://www.amanjha.dev">
            <span className="text-blue-400 ">aman jha</span>
          </ExternalLink>
        </p>
      </div>
    </div>
  );
};

export default Home;

export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);
