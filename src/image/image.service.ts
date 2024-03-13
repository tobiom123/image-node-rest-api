import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>
  ) { }

  async create(createImageDto: CreateImageDto): Promise<Image> {
    const newImage = this.imageRepository.create(createImageDto);
    await this.imageRepository.save(newImage);

    return newImage;
  }

  findAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  findOne(id: number): Promise<Image | null> {
    return this.imageRepository.findOneBy({ id });
  }
}
