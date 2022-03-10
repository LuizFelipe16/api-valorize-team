import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { Compliment } from '../entities/Compliment';

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> { }

export { ComplimentsRepositories };