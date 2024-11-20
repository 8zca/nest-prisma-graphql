import { Module } from '@nestjs/common'
import { PrismaModule } from '@/prisma.module'
import { POST_REPOSITORY_TOKEN } from '@/collabo/application/post/i-post.repository'
import { PostRepository } from '../gateways/prisma/repositories/post.repository'
import { PostGetUsecase } from '@/collabo/application/post/get/post-get.usecase'

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: POST_REPOSITORY_TOKEN,
      useClass: PostRepository,
    },
    PostGetUsecase,
  ],
  exports: [PostGetUsecase],
})
export class PostModule {}
