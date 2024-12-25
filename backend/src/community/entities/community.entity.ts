import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';
import { User } from 'src/users/user.entity';
import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	ManyToMany,
	JoinTable,
	OneToMany
} from 'typeorm';
import { CommunityUser } from './community-user.entity';

@ObjectType()
@Entity()
export class Community {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ unique: true })
	name: string;

	@Field()
	@Column()
	description: string;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.createdCommunities)
	creator: User;

	@Field(() => [Post], { nullable: true })
	@OneToMany(() => Post, (post) => post.community)
	posts?: Post[];

	@Field(() => [CommunityUser], { nullable: true })
	@OneToMany(() => CommunityUser, (communityUser) => communityUser.community)
	communityUsers?: CommunityUser[];

	@Column('json', { nullable: true })
	data: { countPosts: number; countMembers: number };

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@UpdateDateColumn()
	updatedAt: Date;
}
