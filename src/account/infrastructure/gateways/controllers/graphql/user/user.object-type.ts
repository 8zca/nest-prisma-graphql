import 'reflect-metadata'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'

@ObjectType()
export class UserObjectType {
  @Field(() => Int)
  id!: number

  @Field()
  @IsEmail()
  email!: string

  @Field()
  name!: string
}
