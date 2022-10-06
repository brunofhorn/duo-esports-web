import type { NextApiRequest, NextApiResponse } from 'next';
import type { Game } from '../../interfaces';
import { prisma } from '../../lib/prisma';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const games: Game[] = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  res.status(200).json(games);
}
