import { Controller, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HotelsService } from './hotels.service';
import { HotelsDto } from './dto/hotels.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller()
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @MessagePattern('hotel_list')
  @UsePipes(new ValidationPipe())
  async getHotelList() {
    return this.hotelsService.getHotelList();
  }

  @MessagePattern('create_hotel')
  @UsePipes(new ValidationPipe())
  async createHotel(@Payload() data: HotelsDto) {
    return this.hotelsService.createHotel(data);
  }

  @MessagePattern('book_hotel')
  @UsePipes(new ValidationPipe())
  async bookHotel(@Payload() updateHotelDto: UpdateHotelDto) {
    return this.hotelsService.bookHotel(updateHotelDto.hotelId, updateHotelDto);
  }
}
