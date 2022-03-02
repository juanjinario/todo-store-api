import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class OwnParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const intValue = parseInt(value, 10);
    if (isNaN(intValue)) {
      throw new BadRequestException(`${value} is not a integer`);
    }
    return intValue;
  }
}
