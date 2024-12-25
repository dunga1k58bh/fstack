import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { UsersModule } from 'src/users/users.module';
import { PostResolver } from './posts.resolver';

@Module({
	imports: [TypeOrmModule.forFeature([Post]), UsersModule],
	providers: [PostsService, PostResolver]
})
export class PostsModule {}
