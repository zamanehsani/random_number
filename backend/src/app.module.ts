import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.modules';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { GatewayModule } from './gateway/gateway.module';


@Module({
  imports: [UsersModule, GatewayModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
