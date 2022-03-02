import { Body, Controller, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Post()
  create(@Body() payload: any): any {
    return {
      message: `post satisfactorio`,
      body: payload,
    };
  }
}
