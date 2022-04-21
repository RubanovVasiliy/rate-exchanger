import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CurrencyDocument = Currency & Document;

@Schema()
export class Currency {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  numCode: number;

  @Prop({ required: true })
  charCode: string;

  @Prop({ required: true })
  nominal: number;
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);
