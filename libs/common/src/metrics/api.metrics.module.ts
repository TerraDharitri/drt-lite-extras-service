import { Global, Module } from "@nestjs/common";
import { ApiMetricsService } from "./api.metrics.service";
import { MetricsModule } from "@terradharitri/sdk-nestjs-monitoring";

@Global()
@Module({
  imports: [
    MetricsModule,
  ],
  providers: [
    ApiMetricsService,
  ],
  exports: [
    ApiMetricsService,
  ],
})
export class ApiMetricsModule { }
