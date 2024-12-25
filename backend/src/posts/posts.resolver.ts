import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Post } from './post.entity'; // Adjust the import path as necessary
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/createPostDto';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { ContextUser } from 'src/common/interfaces/context.user';

@Resolver(() => Post)
export class PostResolver {
	constructor(private readonly postService: PostsService) {}

	@Mutation(() => Post)
	async createPost(
			@CurrentUser() user: ContextUser,
			@Args('createPostDto') createPostDto: CreatePostDto
	): Promise<Post> {
		return this.postService.createPost(user, createPostDto);
	}
}
