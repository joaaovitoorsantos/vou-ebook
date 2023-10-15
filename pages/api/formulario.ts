//@ts-nocheck
import { getConnection } from '@lib/db'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const connection = getConnection()

  switch (req.method) {
    case 'POST':
      const { nome, email, celular } = req.body;
      connection.query(
          'INSERT INTO leads (nome, email, celular) VALUES (?, ?, ?)',
          [nome, email, celular],
        (error, results) => {
          if (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro ao adicionar lead.' })
          }
          return res.status(201).json({ id: results.insertId })
        },
      )
      break;
    default:
      res.status(405).json({ error: 'Método não suportado.' })
      break;
  }
}