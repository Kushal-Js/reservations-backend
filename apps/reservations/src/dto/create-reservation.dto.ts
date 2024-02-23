import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class CreateReservationDto {
  hotelId: string;
  reservationId: string;
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;
}
