export interface IBaseRepository<T> {
  findAll(relations?: string[]): Promise<T[]>;
  findById(id: string, relations?: string[]): Promise<T | null>;
  save(entity: T): Promise<T>;
  update(id: string, entity?: T): Promise<void>;
  delete(id: string): Promise<void>;
}
