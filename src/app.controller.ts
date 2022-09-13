import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@Controller('/dev')
export class AppController {
  constructor(private readonly appService: AppService) {}

}
