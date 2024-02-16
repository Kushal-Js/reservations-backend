import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Hotel, HotelDocument } from './schemas/hotels.schema';

@Injectable()
export class HotelsRepository {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async findOne(hotelFilterQuery: FilterQuery<Hotel>): Promise<Hotel> {
    return this.hotelModel.findOne(hotelFilterQuery);
  }

  async find(hotelsFilterQuery: FilterQuery<Hotel>): Promise<Hotel[]> {
    return this.hotelModel.find(hotelsFilterQuery);
  }

  async create(hotel: Hotel): Promise<Hotel> {
    const newHotel = new this.hotelModel(hotel);
    return newHotel.save();
  }

  async findOneAndUpdate(
    userFilterQuery: FilterQuery<Hotel>,
    hotel: Partial<Hotel>,
  ): Promise<Hotel> {
    return this.hotelModel.findOneAndUpdate(userFilterQuery, hotel, {
      new: true,
    });
  }
}
