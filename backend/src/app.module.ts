import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { FriendsModule } from './friends/friends.module';
import { UserDataModule } from './user_data/user_data.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), FriendsModule, UserDataModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
