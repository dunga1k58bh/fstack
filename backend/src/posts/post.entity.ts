import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Community } from 'src/community/entities/community.entity';
import { User } from 'src/users/user.entity';
import { Vote } from 'src/votes/vote.entity';
import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany
} from 'typeorm';

@ObjectType()
@Entity()
export class Post {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	title: string;

	@Field()
	@Column('text') // Using 'text' to allow for longer content
	content: string;

	@Field(() => User) // Relating to the User entity
	@ManyToOne(() => User, (user) => user.posts) // Assuming a one-to-many relation
	author: User;

	@Field(() => Community, { nullable: true }) // Relating to the User entity
	@ManyToOne(() => Community, (community) => community.posts) // Assuming a one-to-many relation
	community?: Community;

	@Field(() => [Vote], { nullable: true }) // Relationship with votes
	@OneToMany(() => Vote, (vote) => vote.post)
	votes?: Vote[];

	@Field(() => Int, { defaultValue: 0 }) // Upvotes
	@Column({ default: 0 })
	upvotes: number;

	@Field(() => Int, { defaultValue: 0 }) // Downvotes
	@Column({ default: 0 })
	downvotes: number;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@UpdateDateColumn()
	updatedAt: Date;
}
