import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const createClienteUseCase = new CreateClientUseCase();

    const result = await createClienteUseCase.execute({
      username,
      password,
    });

    return res.json(result)
  }
}
