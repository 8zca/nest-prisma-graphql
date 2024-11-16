import { Query, Resolver } from '@nestjs/graphql'
import { users as User } from '@@/prisma/generated/main'
import { UserService } from './user.service'
import { User as UserObject } from './user.object-type'

@Resolver()
export class UserResolver {
  readonly #userService: UserService

  constructor(userService: UserService) {
    this.#userService = userService
  }

  @Query(() => [UserObject], { nullable: 'items' })
  async users(): Promise<User[]> {
    return await this.#userService.getUsers()
  }
}
