import { Module } from '@nestjs/common';
import { UserDataController } from './user_data.controller';
import { UserDataService } from './user_data.service';

@Module({
  controllers: [UserDataController],
  providers: [UserDataService]
})
export class UserDataModule {}
