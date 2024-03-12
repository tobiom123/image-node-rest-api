import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async create(createImageDto: CreateImageDto): Promise<Image> {
    const newImage = this.imageRepository.create(createImageDto);
    await this.imageRepository.save(newImage);

    return newImage;
  }

  findAll() {
    return this.imageRepository.find();
  }

  async findOne(id: number): Promise<Image> {
    return await this.imageRepository.findOneOrFail(id);
  }
}
