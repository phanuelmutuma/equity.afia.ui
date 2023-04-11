import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(
    "https://valentia-bot.azurewebsites.net/api/Clinic"
  );
  const data = await response.json();

  if (data.err) {
    res.status(500).json({ errors: data.err });
  }

  res.status(200).json({ data });
}
