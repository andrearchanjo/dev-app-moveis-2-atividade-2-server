import { Request, Response } from 'express';

import db from '../database/connection';

interface TotalConnections {
    total: number;
}

export default class ConnectionsController {
    async index(request: Request, response: Response) {
        try {
            const totalConnectionsRow = await db('connections').count('* as total').first();
            const totalConnections: TotalConnections = { total: parseInt(totalConnectionsRow?.total?.toString() || '0', 10) };

            return response.json(totalConnections);
        } catch (err) {
            return response.status(500).json({ error: 'Erro ao buscar total de conexões.' });
        }
    }

    async create(request: Request, response: Response) {
        const { coach_id } = request.body;

        try {
            await db('connections').insert({ coach_id });

            return response.status(201).send();
        } catch (err) {
            return response.status(500).json({ error: 'Erro ao criar conexão.' });
        }
    }
}