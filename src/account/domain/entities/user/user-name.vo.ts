import { PreferNominal } from '../i-prefer-nominal'

export class UserNameVO {
  readonly _userNameVo: PreferNominal
  readonly value: string

  constructor(value: string | null | undefined) {
    if (!value) throw new TypeError('User name is required')
    if (value.length < 3) throw new TypeError('User name is too short')
    if (value.length > 20) throw new TypeError('User name is too long')

    this.value = value
  }
}
