import { Query, ResolveField, Resolver, Root } from '@nestjs/graphql'
import { User } from '@@/prisma/generated/main'
import { UserService } from './user.service'
import { User as UserObject } from './user.object-type'
import { Post } from '@@/prisma/generated/main'

@Resolver(UserObject)
export class UserResolver {
  readonly #userService: UserService

  constructor(userService: UserService) {
    this.#userService = userService
  }

  // nullable: 'items' とすると、配列の要素に null が含まれる可能性があることを示す
  @Query(() => [UserObject])
  async users(): Promise<User[]> {
    return await this.#userService.getUsers()
  }

  @ResolveField()
  async posts(@Root() user: UserObject): Promise<Post[]> {
    return await this.#userService.getPosts(user.id)
  }
}
