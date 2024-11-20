import { IsEmail, validateSync } from 'class-validator'
import { PreferNominal } from '../i-prefer-nominal'

export class UserEmailVO {
  readonly _userEmailVo: PreferNominal

  @IsEmail()
  readonly value: string

  constructor(value: string | null | undefined) {
    if (!value) throw new TypeError('User email is required')

    this.value = value

    if (validateSync(this).length > 0) {
      throw new TypeError('User email is invalid')
    }
  }
}
