import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HotelsService } from './hotels.service';
import { HotelsDto } from './dto/hotels.dto';

@Controller()
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @MessagePattern('get_details')
  @UsePipes(new ValidationPipe())
  async createCharge(@Payload() data: HotelsDto) {
    return this.hotelsService.createCharge(data);
  }
}
