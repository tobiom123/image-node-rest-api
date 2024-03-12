import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImageService {
  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  findAll() {
    return `This action returns all image`;
  }

  findOne(id: number) {
    // const image = this.images.find(image => image.id === id);

    // if (!image) throw new Error('Image not found!');

    // return image;
    return ''
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    // this.images = this.images.map(image => {
    //   if (ninja.id === id) {
    //     return {
    //       ...image,
    //       ...updateImageDto
    //     }
    //   }
    // });
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
