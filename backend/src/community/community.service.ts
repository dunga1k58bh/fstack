import { Injectable } from '@nestjs/common';
import { CreateCommunityInput } from './dto/create-community.input';
import { UpdateCommunityInput } from './dto/update-community.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Community } from './entities/community.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';

@Injectable()
export class CommunityService {
	constructor(
		@InjectRepository(Community)
		private readonly communityRepository: Repository<Community>
	) {}

	async create(user: User, createCommunityInput: CreateCommunityInput) {
		const { name, description } = createCommunityInput;
		const creator = user;
		if (!creator) {
			throw new Error('User not found');
		}

		const community = this.communityRepository.create({
			name,
			description,
			creator
		});

		return this.communityRepository.save(community);
	}

	async findUserCommunities(user: User) {
		const userId = user.id;
		return await this.communityRepository
			.createQueryBuilder('community')
			.leftJoinAndSelect('community.creator', 'creator')
			.where('creator.id	= :userId', { userId })
			.orderBy('community.name')
			.getMany();
	}

	async findByName(name: string) {
		return await this.communityRepository.findOneBy({ name });
	}

	async communityDetail(name: string) {
		const community = await this.communityRepository
			.createQueryBuilder('community')
			.leftJoinAndSelect('community.creator', 'creator')
			.leftJoinAndSelect('community.posts', 'posts')
			.leftJoinAndSelect('posts.author', 'author')
			.where('community.name = :name', { name })
			.orderBy('posts.createdAt', 'DESC')
			.take(10)
			.getOne();

		return community;
	}

	findAll() {
		return `This action returns all community`;
	}

	findOne(id: number) {
		return `This action returns a #${id} community`;
	}

	update(id: number, updateCommunityInput: UpdateCommunityInput) {
		return `This action updates a #${id} community`;
	}

	remove(id: number) {
		return `This action removes a #${id} community`;
	}
}
