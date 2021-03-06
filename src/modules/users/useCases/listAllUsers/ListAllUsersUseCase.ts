import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);
    const isAdmin = user.admin;

    if (!user) {
      throw new Error("Mensagem do erro");
    }

    if (!isAdmin) {
      throw new Error("Mensagem do erro");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
