import { ObjectId } from 'mongoose';

export class CreateCurrencyDto {
  readonly ID: string;
  readonly name: string;
  readonly value: number;
  readonly numCode: number;
  readonly charCode: string;
  readonly nominal: number;
  readonly rateId: ObjectId;
}
