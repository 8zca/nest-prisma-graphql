import { Injectable, OnModuleInit, Logger } from '@nestjs/common'
import { PrismaClient } from '@@/prisma/generated/main'
import { readReplicas } from '@prisma/extension-read-replicas'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name)

  constructor() {
    super({
      log: [{ emit: 'event', level: 'query' }],
    })
  }

  withExtensions() {
    const dbUrl = process.env.DATABASE_URL
    const replicaClient = new PrismaClient({
      datasourceUrl: dbUrl,
      log: [{ level: 'query', emit: 'event' }],
    })

    // dbUrl直接だとレプリカを見ないという報告あり
    // see: https://github.com/prisma/prisma/issues/18628#issuecomment-2346910557
    return this.$extends(readReplicas({ replicas: [replicaClient] }))
  }

  async onModuleInit() {
    await this.$connect()
    this.logger.log('Connected to the database')

    this.$on('query' as never, (e) => {
      this.logger.log(e)
    })
  }
}
