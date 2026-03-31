import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { DataTableSkeleton, Tile, Theme } from '@carbon/react';
import GrowthChartVisualization from './growth-chart-visualization.component';
import { useGrowthChartData } from './growth-chart.resource';
import styles from './growth-chart-main.scss';
import { EmptyCard, CardHeader } from '@openmrs/esm-framework';

interface GrowthChartProps {
  patientUuid: string;
  patient: fhir.Patient;
}

const GrowthChart: React.FC<GrowthChartProps> = ({ patientUuid, patient }) => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGrowthChartData(patient);

  const ageInMonths = useMemo(() => {
    const birthDate = dayjs(patient?.birthDate);
    return birthDate.isValid() ? dayjs().diff(birthDate, 'month', true) : null;
  }, [patient?.birthDate]);

  const isSupportedGender = useMemo(() => {
    const gender = patient?.gender?.toLowerCase();
    return gender === 'male' || gender === 'female';
  }, [patient?.gender]);

  if (isLoading) {
    return <DataTableSkeleton />;
  }

  if (isError) {
    return <Tile>{t('errorLoadingData', 'Error loading growth chart data')}</Tile>;
  }

  if (!data?.patient) {
    return <Tile>{t('errorDataUnavailable', 'Patient data not available')}</Tile>;
  }

  if ((ageInMonths !== null && ageInMonths > 60) || !isSupportedGender) {
    return (
      <EmptyCard headerTitle={t('growthChart', 'Growth Chart')} displayText={t('growthCharts', 'Growth Charts')} />
    );
  }

  return (
    <Theme theme="white">
      <div className={styles.container}>
        <CardHeader title={t('growthChart', 'Growth Chart')} />
        <div className={styles.visualizationContainer}>
          <GrowthChartVisualization data={data} />
        </div>
      </div>
    </Theme>
  );
};

export default GrowthChart;
