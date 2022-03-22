import { NextApiRequest, NextApiResponse } from "next";
import supabase from "_/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body: { email, handle, source },
  } = req;

  const { data, error } = await supabase
    .from("essays_waitlist")
    .insert([{ email, handle, source }]);

  error ? console.error(error) : console.log(data);

  // const { data: beta_list } = await supabase.from("beta_list").select("*");

  res.status(200).json({ message: "Success" });
}
