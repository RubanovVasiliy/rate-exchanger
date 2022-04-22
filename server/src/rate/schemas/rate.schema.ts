import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Currency } from './currency.schema';

export type RateDocument = Rate & Document;

@Schema()
export class Rate {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Currency' }] })
  currencies: Currency[];
}

export const RateSchema = SchemaFactory.createForClass(Rate);
