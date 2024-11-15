import { Query, Resolver } from '@nestjs/graphql'
import { Task } from './task.object-type'
import { TaskService } from './task.service'

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { nullable: 'items' })
  tasks(): Task[] {
    return this.taskService.getTasks()
  }
}
