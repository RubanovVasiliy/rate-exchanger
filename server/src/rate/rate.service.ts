import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate, RateDocument } from './schemas/rate.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Currency, CurrencyDocument } from './schemas/currency.schema';
import { CreateCurrencyDto } from './dto/create-currency.dto';

@Injectable()
export class RateService {
  constructor(
    @InjectModel(Rate.name) private rateModel: Model<RateDocument>,
    @InjectModel(Currency.name) private currencyModel: Model<CurrencyDocument>,
  ) {}

  async create(dto: CreateRateDto): Promise<ObjectId> {
    const rate = await this.rateModel.create({
      ...dto,
      date: new Date().toISOString(),
    });
    return rate._id;
  }

  async findAll(take = 7, offset = 0): Promise<Rate[]> {
    const rates = await this.rateModel
      .find()
      .limit(take)
      .skip(offset)
      .populate('currencies')
      .sort({ date: '-1' });
    return rates;
  }

  async findOne(id: ObjectId): Promise<Rate> {
    const rate = await this.rateModel.findById(id).populate('currencies');
    return rate;
  }

  async update(id: ObjectId, dto: UpdateRateDto): Promise<boolean> {
    const rate = await this.rateModel.findByIdAndUpdate(id, { ...dto });
    return rate._id;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const rate = await this.rateModel.findByIdAndDelete(id);
    return rate._id;
  }

  async addCurrency(dto: CreateCurrencyDto): Promise<Currency> {
    const rate = await this.rateModel.findById(dto.rateId);
    const currency = await this.currencyModel.create({ ...dto });
    rate.currencies.push(currency._id);
    await rate.save();
    return currency;
  }
}
