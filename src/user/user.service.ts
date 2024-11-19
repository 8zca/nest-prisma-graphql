import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { User } from '@@/prisma/generated/main'
import { Post } from '@@/prisma/generated/main'

@Injectable()
export class UserService {
  readonly #prismaService: PrismaService

  constructor(prismaService: PrismaService) {
    this.#prismaService = prismaService
  }

  async getUsers(): Promise<User[]> {
    return await this.#prismaService.user.findMany()
  }

  async getPosts(userId: number): Promise<Post[]> {
    const user = await this.#prismaService.user.findUnique({
      where: { id: userId },
      include: { posts: true },
    })
    return user === null ? [] : user.posts
  }
}
