export class PostGetOutputDto {
  readonly id: number
  readonly body: string | null
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(params: {
    id: number
    body: string | null
    createdAt: Date
    updatedAt: Date
  }) {
    this.id = params.id
    this.body = params.body
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }
}
