import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Not existing endpoint' })
  }

  const { width, height, source } = req.query;

  try {
    const heightParam = height ? `&height=${height}` : '';
    const widthParam = width ? `&width=${width}` : '';
    const sourceParam = source ? `source=${source}`.replace('/ccstore/v1/images/?source=', '') : 'source=/file/';

    const response = await fetch(`${process.env.COMMERCE_URL}/images?${sourceParam}${heightParam}${widthParam}`);
    const contentType = response.headers.get('content-type');
    const buffer = await response.arrayBuffer();

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': buffer.byteLength
    });

    return res.end(Buffer.from(buffer));
  } catch (err) {
    return res.status(500).send('Error getting image');
  }
}
