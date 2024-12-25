import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Vote {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => User) // Relating to the User entity
	@ManyToOne(() => User, (user) => user.votes, { onDelete: 'CASCADE' }) // Cascade delete
	user: User;

	@Field(() => Post) // Relating to the Post entity
	@ManyToOne(() => Post, (post) => post.votes, { onDelete: 'CASCADE' }) // Cascade delete
	post: Post;

	@Field() // Indicates whether the vote is an upvote or downvote
	@Column()
	isUpvote: boolean; // true for upvote, false for downvote
}
