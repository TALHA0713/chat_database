import { Module } from '@nestjs/common';
// import { UsersModule } from './module/users/users.module';
import { UserModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/database'),
    // MongooseModule.forRoot('mongodb://localhost:27017/database'),
    UserModule,
    ProductsModule,
    ChatsModule,
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
