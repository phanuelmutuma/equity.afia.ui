import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;

  const response = await fetch(
    "https://valentia-bot.azurewebsites.net/api/ClinicService",
    {
      method: "POST",
      body: JSON.stringify({
        serviceId: body.data?.serviceId,
        clinicId: body.data?.clinicId,
        isAvailable: body.data?.isAvailable,
        isSpecial: body.data?.isSpecial,
        daysOffered: [
          {
            days: body.data?.daysOffered[0].days,
            start: `${body.data?.daysOffered[0].start}:00`,
            end: `${body.data?.daysOffered[0].end}:00`,
          },
        ],
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
