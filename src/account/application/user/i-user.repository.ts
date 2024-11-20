import { UserEntity } from '@/account/domain/entities/user/user.entity'

export type IUserRepository = {
  users(): Promise<UserEntity[]>
}

export const USER_REPOSITORY_TOKEN = Symbol('USER_REPOSITORY_TOKEN')
