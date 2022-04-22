import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Rate } from './rate.schema';

export type CurrencyDocument = Currency & Document;

@Schema()
export class Currency {
  @Prop({ required: true, unique: true })
  ID: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  value: string;

  @Prop({ required: true })
  numCode: string;

  @Prop({ required: true })
  charCode: string;

  @Prop({ required: true })
  nominal: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Rate' })
  rate: Rate;
}

export const CurrencySchema = SchemaFactory.createForClass(Currency);
