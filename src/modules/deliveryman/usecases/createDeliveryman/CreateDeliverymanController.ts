import { Request, Response } from 'express';
import { CreateDeliveryman } from './CreateDeliverymanUseCase';

export class CreateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const createDeliveryman = new CreateDeliveryman();

    const result = await createDeliveryman.execute({
      username,
      password,
    });

    return res.json(result);
  }
}
