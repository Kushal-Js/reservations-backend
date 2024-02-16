import { Injectable } from '@nestjs/common';
import { HotelsDto } from './dto/hotels.dto';
import { Hotel, HotelSchema } from './schemas/hotels.schema';
import { HotelsRepository } from './hotels.repository';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class HotelsService {
  constructor(private readonly hotelsRepository: HotelsRepository) {}

  async getUserById(userId: string): Promise<Hotel> {
    return this.hotelsRepository.findOne({ userId });
  }

  async getUserByName(name: string): Promise<Hotel> {
    return this.hotelsRepository.findOne({ name });
  }

  async getUsers(): Promise<Hotel[]> {
    return this.hotelsRepository.find({});
  }

  // async createUser(email: string, password: string): Promise<User> {
  //   const saltOrRounds = 10;
  //   const hashedPassword =
  //     password === undefined
  //       ? 'test'
  //       : await bcrypt.hash(password, saltOrRounds);
  //   return this.usersRepository.create({
  //     userId: uuidv4(),
  //     email,
  //     password: hashedPassword,
  //     age: 30,
  //     favoriteFoods: [],
  //   });
  // }

  // async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
  //   return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  // }

}
