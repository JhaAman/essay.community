import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { url } from "_/lib/isDev";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import * as Separator from "@radix-ui/react-separator";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(url("/api/waitlist-signup"), {
        email: email,
        handle: handle,
        source: "essay.community (web)",
      })
      .then((response) => {
        console.info(`Successfully added ${email} to waitlist`);
        setSubmitted(true);
        setLoading(false);
        // TODO: Set loading dots for the get access button here
        // TODO: once submitted, change CTA to say thanks!
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen py-10 text-white bg-dark">
      <Head>
        <title>Essay Community</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="text-xl tracking-widest uppercase">essay community</div>
      <div className="flex flex-col items-center">
        <h1 className="mb-3 font-medium text-7xl">Your Best Essays Yet</h1>
        <h2 className="text-lg text-center text-gray-300 whitespace-pre">
          {
            "Essays with the depth of a Paul Graham essay,\nwith the reader engagement of a Twitter thread"
          }
        </h2>

        {!submitted && (
          <form
            className="flex flex-col items-center justify-center mt-6"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-3 my-3">
              <Input
                className=""
                variant="dark"
                onChange={setEmail}
                value={email}
                required={true}
                type="email"
                placeholder="Your favorite email *"
              />
              <Input
                onChange={setHandle}
                variant="dark"
                value={handle}
                required={false}
                type="text"
                placeholder="Your Twitter @handle"
              />
            </div>
            <Button className="" variant="slim" type="submit" loading={loading}>
              {"Cool, lmk when it's out"}
            </Button>
          </form>
        )}

        {submitted && (
          <div className="flex flex-col items-center justify-center mt-12 ">
            <h1 className="mb-1 text-xl font-semibold text-primary-400">
              Thanks!
            </h1>
            <h2 className="text-sm text-center text-gray-300 whitespace-pre">
              Want updates? Follow{" "}
              <ExternalLink href="https://www.twitter.com/amanjha__">
                <span className="">@amanjha__</span>
              </ExternalLink>
            </h2>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-300">
          a production by{" "}
          <ExternalLink href="https://www.amanjha.dev">
            <span className="">aman jha</span>
          </ExternalLink>
          .
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
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="font-semibold text-white"
  >
    {children}
  </a>
);
