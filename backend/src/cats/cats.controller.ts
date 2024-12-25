import { Body, Controller, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Roles } from 'src/common/decorators/roile.decorator';
import { Role } from 'src/common/enums/role.enum';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('cats')
export class CatsController {
	constructor(private catsService: CatsService) {}

	@Get()
	async findALL(@Req() request: Request): Promise<Cat[]> {
		return this.catsService.findAll();
	}

	@Get(':id')
	@Public()
	findOne(
		@Param('id', new ParseIntPipe())
		id: number
	) {
		// get by ID logic
	}

	@Post()
	@Roles(Role.Admin)
	async create(@Body() createCatDto: CreateCatDto) {
		this.catsService.create(createCatDto);
	}
}
