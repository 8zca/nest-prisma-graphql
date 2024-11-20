import { UserEmailVO } from './user-email.vo'
import { UserNameVO } from './user-name.vo'

export class UserEntity {
  readonly id: number
  readonly email: UserEmailVO
  readonly name: UserNameVO

  constructor(params: { id: number; email: UserEmailVO; name: UserNameVO }) {
    this.id = params.id
    this.email = params.email
    this.name = params.name
  }

  static fromPlainObject(plainObject: {
    id: number
    email: string
    name: string
  }): UserEntity {
    return new UserEntity({
      id: plainObject.id,
      email: new UserEmailVO(plainObject.email),
      name: new UserNameVO(plainObject.name),
    })
  }
}
