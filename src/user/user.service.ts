import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { users as User } from '@@/prisma/generated/main'

@Injectable()
export class UserService {
  readonly #prismaService: PrismaService

  constructor(prismaService: PrismaService) {
    this.#prismaService = prismaService
  }

  async getUsers(): Promise<User[]> {
    return await this.#prismaService.users.findMany()
  }
}
