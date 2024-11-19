import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { PrismaClientProvider } from './prisma.provider'

@Module({
  providers: [PrismaService, PrismaClientProvider],
  exports: [PrismaService],
})
export class PrismaModule {}
