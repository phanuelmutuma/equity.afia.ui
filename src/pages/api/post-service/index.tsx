import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;

  const response = await fetch(
    "https://valentia-bot.azurewebsites.net/api/Service",
    {
      method: "POST",
      body: JSON.stringify({
        name: body.data.name,
        code: body.data.code,
        isActive: body.data.isActive,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (data.err) {
    res.status(500).json({ errors: `${data.err}: ${body}` });
  }

  res.status(200).json({ data });
}
