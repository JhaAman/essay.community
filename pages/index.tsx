import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { url } from "_/lib/isDev";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(url("/api/waitlist-signup"), {
        email: email,
        handle: handle,
        source: "essays.community (web)",
      })
      .then((response) => {
        console.info(`Successfully added ${email} to waitlist`);
        setIsOpen(true);
        // TODO: Set loading dots for the get access button here
        // TODO: once submitted, change CTA to say thanks!
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setErrorContent("You are already on the waitlist!");
        }
        console.error(error);

        setIsErrorOpen(true);
      });

    setSubmitted(true);
  };

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

        {!submitted && (
          <form
            className="flex flex-col items-center justify-center mt-6"
            onSubmit={() => setSubmitted(!submitted)}
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
            <Button className="" variant="slim" type="submit">
              {"Cool, lmk when it's out"}
            </Button>
          </form>
        )}

        {submitted && (
          <div className="flex flex-col items-center justify-center mt-12 ">
            <h1 className="mb-1 text-xl font-semibold text-primary-400">
              Thanks!
            </h1>
            <h2 className="text-sm text-center whitespace-pre">
              Want updates? Follow{" "}
              <ExternalLink href="https://www.twitter.com/amanjha__">
                <span className="text-blue-400 ">@amanjha__</span>
              </ExternalLink>
              .
            </h2>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm">
          a production by{" "}
          <ExternalLink href="https://www.amanjha.dev">
            <span className="text-blue-400 ">aman jha</span>
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
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);
