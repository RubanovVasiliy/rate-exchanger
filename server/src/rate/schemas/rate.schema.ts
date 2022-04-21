import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Currency } from './currency.schema';

export type RateDocument = Rate & Document;

@Schema()
export class Rate {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  data: string;

  @Prop({ required: true })
  currencies: Currency[];
}

export const RateSchema = SchemaFactory.createForClass(Rate);
