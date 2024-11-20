import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { UserObjectType } from './user.object-type'
import { UserGetUsecase } from '@/account/application/user/get/user-get.usecase'
import { UserGetOutputDto } from '@/account/application/user/get/user-get-output.dto'
import { PostObjectType } from '@/collabo/infrastructure/gateways/controllers/graphql/post/post.object-type'
import { PostGetUsecase } from '@/collabo/application/post/get/post-get.usecase'
import { PostGetOutputDto } from '@/collabo/application/post/get/post-get-output.dto'

@Resolver(UserObjectType)
export class UserResolver {
  readonly #userGetUsecase: UserGetUsecase
  readonly #postGetUsecase: PostGetUsecase

  constructor(userGetUsecase: UserGetUsecase, postGetUsecase: PostGetUsecase) {
    this.#userGetUsecase = userGetUsecase
    this.#postGetUsecase = postGetUsecase
  }

  @Query(() => [UserObjectType])
  async users(): Promise<UserGetOutputDto[]> {
    return await this.#userGetUsecase.call()
  }

  @ResolveField(() => [PostObjectType])
  async posts(@Parent() user: UserObjectType): Promise<PostGetOutputDto[]> {
    return await this.#postGetUsecase.call(user.id)
  }
}
