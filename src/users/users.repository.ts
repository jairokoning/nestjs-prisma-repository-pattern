export interface UsersRepository {
  create(data: any): Promise<void>;
}
