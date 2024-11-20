import { IUserRepository } from '@/account/application/user/i-user.repository'
import { UserEntity } from '@/account/domain/entities/user/user.entity'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserRepository implements IUserRepository {
  readonly #prismaService: PrismaService

  constructor(prismaService: PrismaService) {
    this.#prismaService = prismaService
  }

  async users(): Promise<UserEntity[]> {
    const users = await this.#prismaService.user.findMany()

    return users.map((user) =>
      UserEntity.fromPlainObject({
        id: user.id,
        email: user.email,
        name: user.name,
      }),
    )
  }
}
