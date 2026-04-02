import { type Page } from '@playwright/test';

export class GrowthChartPage {
  constructor(readonly page: Page) {}

  readonly emptyStateMessage = () => this.page.getByText(/Growth Chart Unavailable/i);
  readonly growthChartUnavailableMessage = () =>
    this.page.getByText(/Growth charts are only available for patients under 5 years of age/i);

  async goTo(patientUuid: string) {
    await this.page.goto(`/openmrs/spa/patient/${patientUuid}/chart/growth-chart`);
  }
}
