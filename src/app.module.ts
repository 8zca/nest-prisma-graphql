import { Module } from '@nestjs/common'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { UserModule } from '@/account/infrastructure/nestjs-modules/user.module'
import { TaskModule } from './task/task.module'
import { PrismaModule } from './prisma.module'
import { PostModule } from '@/collabo/infrastructure/nestjs-modules/post.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'isoDate' },
    }),
    PrismaModule,
    UserModule,
    PostModule,
    TaskModule,
  ],
})
export class AppModule {}
