import { Inject, Injectable } from '@nestjs/common'
import { IPostRepository, POST_REPOSITORY_TOKEN } from '../i-post.repository'
import { PostGetOutputDto } from './post-get-output.dto'
import { PostEntity } from '@/collabo/domain/entities/post/post.entity'

@Injectable()
export class PostGetUsecase {
  readonly #postRepository: IPostRepository

  constructor(@Inject(POST_REPOSITORY_TOKEN) postRepository: IPostRepository) {
    this.#postRepository = postRepository
  }

  async call(userId: number): Promise<PostGetOutputDto[]> {
    const posts = await this.#postRepository.posts(userId)
    return this.#build(posts)
  }

  #build(posts: PostEntity[]): PostGetOutputDto[] {
    return posts.map(
      (post) =>
        new PostGetOutputDto({
          id: post.id,
          body: post.body,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
        }),
    )
  }
}
