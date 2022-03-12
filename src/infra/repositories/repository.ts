import { Repository as TypeOrmRepository } from 'typeorm';
import { IBaseRepository } from '~/domain/repositories';

export class Repository<T> implements IBaseRepository<T> {
  constructor(protected readonly repository: TypeOrmRepository<T>) {}

  async findAll(relations: string[] = []): Promise<T[]> {
    return await this.repository.find({
      relations,
    });
  }

  async findById(id: string, relations: string[] = []): Promise<T | null> {
    return (
      (await this.repository.findOne(id, {
        relations,
      })) ?? null
    );
  }

  async save(entity: T): Promise<T> {
    return await this.repository.save(entity as any);
  }

  async update(id: string, entity: T): Promise<void> {
    await this.repository.update(id, entity as any);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
