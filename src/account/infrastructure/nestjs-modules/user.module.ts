import { Module } from '@nestjs/common'
import { UserRepository } from '../gateways/prisma/repositories/user.repository'
import { UserResolver } from '../gateways/controllers/graphql/user/user.resolver'
import { PrismaModule } from '@/prisma.module'
import { UserGetUsecase } from '@/account/application/user/get/user-get.usecase'
import { USER_REPOSITORY_TOKEN } from '@/account/application/user/i-user.repository'
import { PostModule } from '@/collabo/infrastructure/nestjs-modules/post.module'

@Module({
  imports: [PrismaModule, PostModule],
  providers: [
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserRepository,
    },
    UserResolver,
    UserGetUsecase,
  ],
})
export class UserModule {}
