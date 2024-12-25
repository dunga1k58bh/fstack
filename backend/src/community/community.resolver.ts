import {
	Resolver,
	Query,
	Mutation,
	Args,
	Int,
	ResolveField
} from '@nestjs/graphql';
import { CommunityService } from './community.service';
import { Community } from './entities/community.entity';
import { CreateCommunityInput } from './dto/create-community.input';
import { UpdateCommunityInput } from './dto/update-community.input';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { User } from 'src/users/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';

@Resolver(() => Community)
@UseGuards(GqlAuthGuard)
export class CommunityResolver {
	constructor(private readonly communityService: CommunityService) {}

	@Mutation(() => Community, { nullable: true })
	createCommunity(
		@CurrentUser() user: User,
		@Args('createCommunityInput') createCommunityInput: CreateCommunityInput
	) {
		return this.communityService.create(user, createCommunityInput);
	}

	@Query(() => [Community])
	myCommunities(@CurrentUser() user: User) {
		return this.communityService.findUserCommunities(user);
	}

	@Query(() => Community)
	communityDetail(@Args('name') name: string) {
		return this.communityService.communityDetail(name);
	}

	@Query(() => [Community], { name: 'community' })
	findAll() {
		return this.communityService.findAll();
	}

	@Query(() => Community, { name: 'community' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.communityService.findOne(id);
	}

	@Mutation(() => Community)
	updateCommunity(
		@Args('updateCommunityInput') updateCommunityInput: UpdateCommunityInput
	) {
		return this.communityService.update(
			updateCommunityInput.id,
			updateCommunityInput
		);
	}

	@Mutation(() => Community)
	removeCommunity(@Args('id', { type: () => Int }) id: number) {
		return this.communityService.remove(id);
	}
}
