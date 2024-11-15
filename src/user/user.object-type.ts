import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'
// import { Post } from '../post'

@ObjectType()
export class User {
  @Field(() => Int)
  id: number

  @Field()
  @IsEmail()
  email: string

  @Field()
  name: string

  // @Field()
  // posts: [Post]
}
