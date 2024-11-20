import { Inject, Injectable } from '@nestjs/common'
import { IUserRepository, USER_REPOSITORY_TOKEN } from '../i-user.repository'
import { UserEntity } from '@/account/domain/entities/user/user.entity'
import { UserGetOutputDto } from './user-get-output.dto'

@Injectable()
export class UserGetUsecase {
  readonly #userRepository: IUserRepository

  constructor(@Inject(USER_REPOSITORY_TOKEN) userRepository: IUserRepository) {
    this.#userRepository = userRepository
  }

  async call(): Promise<UserGetOutputDto[]> {
    const users = await this.#userRepository.users()
    return this.#build(users)
  }

  #build(users: UserEntity[]): UserGetOutputDto[] {
    return users.map(
      (user) =>
        new UserGetOutputDto({
          id: user.id,
          email: user.email.value,
          name: user.name.value,
        }),
    )
  }
}
