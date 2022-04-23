import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { Currency } from './schemas/currency.schema';
import mongoose from 'mongoose';
import { Rate } from './schemas/rate.schema';

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Post()
  create(@Body() dto: CreateRateDto) {
    return this.rateService.create(dto);
  }

  @Get()
  findAll(
    @Query('take') take: number,
    @Query('offset') offset: number,
  ): Promise<Rate[]> {
    return this.rateService.findAll(take, offset);
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId): Promise<Rate> {
    return this.rateService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: ObjectId,
    @Body() updateRateDto: UpdateRateDto,
  ): Promise<boolean> {
    return this.rateService.update(id, updateRateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId): Promise<mongoose.Schema.Types.ObjectId> {
    return this.rateService.delete(id);
  }

  @Post('/currency')
  addCurrency(@Body() dto: CreateCurrencyDto): Promise<Currency> {
    return this.rateService.addCurrency(dto);
  }
}
