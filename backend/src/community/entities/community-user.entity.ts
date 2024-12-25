// src/community/entities/community-user.entity.ts
import {
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	Column
} from 'typeorm';
import { Community } from './community.entity';
import { User } from 'src/users/user.entity';
import { CommunityRole } from 'src/common/enums/role.enum';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class CommunityUser {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({
		type: 'enum',
		enum: CommunityRole
	})
	role: string;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.communityUsers)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@Field(() => Community)
	@ManyToOne(() => Community, (community) => community.communityUsers)
	@JoinColumn({ name: 'community_id' })
	community: Community;
}
