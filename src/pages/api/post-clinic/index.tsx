import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;

  const response = await fetch(
    "https://valentia-bot.azurewebsites.net/api/Clinic",
    {
      method: "POST",
      body: JSON.stringify({
        name: body.data.name,
        email: body.data.email,
        code: body.data.code,
        county: body.data.county,
        subCounty: body.data.subCounty,
        ward: body.data.ward,
        lattitude: body.data.latitude,
        longitude: body.data.longitude,
        tel: body.data.tel,
        isActive: body.data.isActive,
        operatingHour: [
          {
            days: body.data.operatingHour[0].days,
            start: `${body.data.operatingHour[0].start}:00`,
            end: `${body.data.operatingHour[0].end}:00`,
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
