import {
  Injectable,
  OnModuleInit,
  Logger,
  OnModuleDestroy,
} from '@nestjs/common'
import { PrismaClient } from 'prisma/generated/main'
import { readReplicas } from '@prisma/extension-read-replicas'

@Injectable()
export class PrismaClientProvider
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaClientProvider.name)

  constructor() {
    super({
      log: [{ emit: 'event', level: 'query' }],
    })
  }

  withExtensions() {
    const readDbUrl = process.env.READ_DATABASE_URL ?? ''
    const replicaClient = new PrismaClient({
      datasourceUrl: readDbUrl,
      log: [{ level: 'query', emit: 'event' }],
    })
    return this.$extends(readReplicas({ replicas: [replicaClient] }))
  }

  async onModuleInit() {
    await this.$connect()
    this.logger.log('Connected to the database')

    // this.$on('query' as never, (e) => {
    //   this.logger.log(e)
    // })
  }

  onModuleDestroy() {
    return this.onModuleInit()
  }
}
