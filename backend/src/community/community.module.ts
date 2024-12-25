import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityResolver } from './community.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './entities/community.entity';
import { CommunityUser } from './entities/community-user.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Community, CommunityUser])],
	providers: [CommunityResolver, CommunityService]
})
export class CommunityModule {}
