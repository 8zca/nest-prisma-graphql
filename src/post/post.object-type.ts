import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { User } from '../user/user.object-type'

@ObjectType()
export class Post {
  @Field(() => Int)
  id!: number

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date

  @Field({ nullable: true })
  body!: string | null

  @Field()
  author!: User
}
