import { Injectable } from '@nestjs/common'
import { User } from './user.object-type'

@Injectable()
export class UserService {
  private readonly users: User[] = []

  getUsers(): User[] {
    const user1 = new User()
    user1.id = 1
    user1.email = 'hoge@example.com'
    user1.name = 'hoge'
    this.users.push(user1)

    return this.users
  }
}
