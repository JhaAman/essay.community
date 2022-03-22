import { NextApiRequest, NextApiResponse } from "next";
import supabase from "_/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data: beta_list } = await supabase.from("beta_list").select("*");

  res.status(200).json({ beta_list });
}
