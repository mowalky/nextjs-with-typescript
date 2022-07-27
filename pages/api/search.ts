import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const search = req.query.search;

  const querySearch = await fetch(
    `https://prism.d4l.app/api/search?search=${search}`
  );

  const searchResults = await querySearch.json();

  res.status(200).json(searchResults);
}
