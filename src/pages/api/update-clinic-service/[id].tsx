import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;

  const response = await fetch(
    `https://valentia-bot.azurewebsites.net/api/ClinicService/${req.query.id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        serviceId: body.data?.serviceId,
        clinicId: body.data?.clinicId,
        isAvailable: body.data?.isAvailable,
        isSpecial: body.data?.isSpecial,
        daysOffered: [
          {
            days: body.data?.daysOffered[0].days,
            start: `${body.data?.daysOffered[0].start}`,
            end: `${body.data?.daysOffered[0].end}`,
            daysDescription: `${body.data?.daysOffered[0].daysDescription}`,
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
