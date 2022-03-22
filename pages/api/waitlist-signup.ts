import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
const loops_api_key = process.env.LOOPS_API_KEY;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { email, firstName, lastName, favoriteColor, userGroup, source },
  } = req;

  axios
    .post(
      "https://app.loops.so/api/v1/contacts/create",
      {
        email: email,
        firstName: firstName,
        lastName: lastName,
        favoriteColor: favoriteColor,
        userGroup: userGroup,
        source: source,
      },
      {
        headers: {
          Authorization: `Bearer ${loops_api_key}`,
        },
      }
    )
    .then((response) => {
      console.info("Successfully added to waitlist");
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      console.error("Error adding to waitlist");
      if (error.response) {
        // Request made and server responded
        console.error("Error Response", error.response.data);
        console.error(error.response.status);
        console.info(error.response.headers);

        res.status(error.response.status).json({ data: error.response.data });
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error Request", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error Message", error.message);
      }
    });
}
