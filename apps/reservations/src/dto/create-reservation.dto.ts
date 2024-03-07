import { Type } from 'class-transformer';
import { IsDate, IsString, IsOptional } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  hotelId: string;
  @IsString()
  @IsOptional()
  reservationId: string;
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;
}
