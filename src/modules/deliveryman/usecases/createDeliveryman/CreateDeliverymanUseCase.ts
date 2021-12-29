import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcrypt';

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliveryman {
  async execute({ username, password }: ICreateDeliveryman) {
    //Validar se o usuário existe
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (deliverymanExists) {
      throw new Error('Deliveryman already exists');
    }
    //Criptografar a senha

    const hashPassword = await hash(password, 10);

    //Salvar o entregador
    const deliveryman = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    const view = {
      username: deliveryman.username,
    };

    return view;
  }
}
