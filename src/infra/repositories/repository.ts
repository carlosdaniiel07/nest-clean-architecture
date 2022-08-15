import { FindOptionsWhere, Repository as TypeOrmRepository } from 'typeorm';
import { BaseEntity } from '~/domain/entities';
import { IBaseRepository } from '~/domain/repositories';

export class Repository<T> implements IBaseRepository<T> {
  constructor(protected readonly repository: TypeOrmRepository<T>) {}

  async findAll(relations: string[] = []): Promise<T[]> {
    return await this.repository.find({
      relations,
    });
  }

  async findById(id: string, relations: string[] = []): Promise<T | null> {
    const options: FindOptionsWhere<BaseEntity> = {
      id,
    };
    return await this.repository.findOne({
      where: options as any,
      relations,
    });
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
