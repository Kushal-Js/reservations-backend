import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
  @Prop()
  hotelId: string;

  @Prop()
  hotelName: string;

  @Prop()
  address: string;

  @Prop()
  reservationId: string;

  @Prop()
  booked: boolean;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
