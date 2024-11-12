export interface AnimalsRepository {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  create(data: any): Promise<void>;
}
export const AnimalsRepository = Symbol('AnimalsRepository');
