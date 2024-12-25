import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './vote.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Vote])],
	providers: [VotesService]
})
export class VotesModule {}
