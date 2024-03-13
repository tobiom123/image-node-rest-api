import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { AwsService } from 'src/aws/aws.service';

@Controller('image')
export class ImageController {
  constructor(
    private readonly imageService: ImageService,
    private readonly awsService: AwsService
  ) { }


  @Get('upload-url')
  getUploadUrl(@Query('fileName') fileName: string, @Query('contentType') contentType: string) {
    return this.awsService.getUploadUrl(fileName, contentType);
  }

  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(+id);
  }
}
