import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CommunityUser } from 'src/community/entities/community-user.entity';
import { Community } from 'src/community/entities/community.entity';
import { Post } from 'src/posts/post.entity';
import { Vote } from 'src/votes/vote.entity';
import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	ManyToMany,
	JoinTable
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
	@Field((type) => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ default: true })
	isActive: boolean;

	@Field()
	@Column()
	username: string;

	@Field()
	@Column()
	password: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	bio?: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	profilePictureUrl?: string;

	@Field()
	@Column()
	email: string;

	@Field({ defaultValue: false })
	@Column({ default: false })
	isEmailVerified: boolean;

	@Field((type) => Int, { defaultValue: 0 })
	@Column({ default: 0 })
	karma: number;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@UpdateDateColumn()
	updatedAt: Date;

	@Field(() => [Post], { nullable: true }) // Adding the relationship
	@OneToMany(() => Post, (post) => post.author) // One user can have many posts
	posts?: Post[];

	@Field(() => [Vote], { nullable: true }) // Relationship with votes
	@OneToMany(() => Vote, (vote) => vote.user)
	votes?: Vote[];

	@Field(() => [Community], { nullable: true }) // Communities created by the user
	@OneToMany(() => Community, (community) => community.creator)
	createdCommunities?: Community[];

	@Field(() => [CommunityUser], { nullable: true })
	@OneToMany(() => CommunityUser, (communityUser) => communityUser.user)
	communityUsers?: CommunityUser[];
}
