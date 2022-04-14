import React, { useState } from "react";

const pageTitle = "Login";
const logo = "/favicon.ico";
const description = "Log into Essay";

type Props = {};

export default function Login({}: Props) {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-800 sm:px-6 lg:px-8"></div>
  );
}
