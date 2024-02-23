import { Injectable } from '@nestjs/common';
import { HotelsDto } from './dto/hotels.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './schemas/hotels.schema';
import { HotelsRepository } from './hotels.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class HotelsService {
  constructor(private readonly hotelsRepository: HotelsRepository) {}

  async getHotelById(hotelId: string): Promise<Hotel> {
    return this.hotelsRepository.findOne({ hotelId });
  }

  async getHotelByName(hotelName: string): Promise<Hotel> {
    return this.hotelsRepository.findOne({ hotelName });
  }

  async getHotelList(): Promise<Hotel[]> {
    return this.hotelsRepository.find({});
  }

  async createHotel(hotelsDto: HotelsDto): Promise<Hotel> {
    return this.hotelsRepository.create(hotelsDto);
  }

  async bookHotel(
    hotelId: string,
    updateHotelDto: UpdateHotelDto,
  ): Promise<Hotel> {
    updateHotelDto.reservationId = uuidv4();
    return this.hotelsRepository.findOneAndUpdate(hotelId, updateHotelDto);
  }
}
