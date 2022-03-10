import { getCustomRepository } from "typeorm";
import { hash } from 'bcryptjs';
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IFUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, password, admin = false }: IFUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorrect.");
    }

    const userAlreadyExists = await usersRepositories.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const passwordHash = await hash(password, 10);

    const user = usersRepositories.create({
      name,
      email,
      password: passwordHash,
      admin
    });

    await usersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };