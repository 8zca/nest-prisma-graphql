import { IPostRepository } from '@/collabo/application/post/i-post.repository'
import { PostEntity } from '@/collabo/domain/entities/post/post.entity'
import { PrismaService } from '@/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PostRepository implements IPostRepository {
  readonly #prismaService: PrismaService

  constructor(prismaService: PrismaService) {
    this.#prismaService = prismaService
  }

  async posts(userId: number): Promise<PostEntity[]> {
    const posts = await this.#prismaService.post.findMany({
      where: {
        user_id: userId,
      },
    })

    return posts.map(
      (user) =>
        new PostEntity({
          id: user.id,
          body: user.body,
          createdAt: user.created_at,
          updatedAt: user.updated_at,
        }),
    )
  }
}
