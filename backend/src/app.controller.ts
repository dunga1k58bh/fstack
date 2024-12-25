import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('products')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getProducts() {
		return [
			{ id: 1, name: 'Product 1', price: 10 },
			{ id: 2, name: 'Product 2', price: 20 }
		];
	}
}
