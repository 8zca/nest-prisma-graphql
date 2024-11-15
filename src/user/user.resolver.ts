import { Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from './user.object-type'

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { nullable: 'items' })
  users(): User[] {
    return this.userService.getUsers()
  }
}
