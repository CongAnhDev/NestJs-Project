import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:anhteo2002@cluster0.r3vvrwe.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
