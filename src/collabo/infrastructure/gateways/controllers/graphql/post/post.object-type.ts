import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class PostObjectType {
  @Field(() => Int)
  id!: number

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date

  @Field(() => String, { nullable: true })
  body!: string | null
}
