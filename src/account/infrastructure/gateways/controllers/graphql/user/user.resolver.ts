import { Query, Resolver } from '@nestjs/graphql'
import { User } from '@@/prisma/generated/main'
import { UserObjectType } from './user.object-type'
import { UserGetUsecase } from '@/account/application/user/get/user-get.usecase'

@Resolver(UserObjectType)
export class UserResolver {
  readonly #userGetUsecase: UserGetUsecase

  constructor(userGetUsecase: UserGetUsecase) {
    this.#userGetUsecase = userGetUsecase
  }

  @Query(() => [UserObjectType])
  async users(): Promise<User[]> {
    return await this.#userGetUsecase.call()
  }
}
