import { PostEntity } from '@/collabo/domain/entities/post/post.entity'

export type IPostRepository = {
  posts(userId: number): Promise<PostEntity[]>
}

export const POST_REPOSITORY_TOKEN = Symbol('POST_REPOSITORY_TOKEN')
