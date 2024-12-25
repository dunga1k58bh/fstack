import { CreatePostDto } from './dto/createPostDto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { UsersService } from 'src/users/users.service';
import { ContextUser } from 'src/common/interfaces/context.user';

@Injectable()
export class PostsService {
	constructor(
		@InjectRepository(Post)
		private readonly postsRepository: Repository<Post>,
		private readonly usersService: UsersService
	) {}

	async createPost(
		user: ContextUser,
		createPostDto: CreatePostDto
	): Promise<Post> {
		const authorId = user.id;
		const { title, content } = createPostDto;
		const author = await this.usersService.findOne(authorId);
		if (!author) {
			throw new Error('User lao sss');
		}

		const post = this.postsRepository.create({
			title,
			content,
			author
		});

		return this.postsRepository.save(post);
	}
}
