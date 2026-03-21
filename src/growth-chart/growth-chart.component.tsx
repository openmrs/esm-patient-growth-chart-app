import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { DataTableSkeleton, Tile } from '@carbon/react';
import CardHeader from '../components/card-header/CardHeader';
import EmptyState from '../components/empty-state/EmptyState';
import GrowthChartVisualization from './growth-chart-visualization.component';
import { useGrowthChartData, usePatient } from './growth-chart.resource';
import styles from './growth-chart-main.scss';

interface GrowthChartProps {
  patientUuid: string;
  patient?: fhir.Patient;
}

const GrowthChart: React.FC<GrowthChartProps> = ({ patientUuid, patient: patientProp }) => {
  const { t } = useTranslation();
  const {
    patient: fetchedPatient,
    isLoading: isPatientLoading,
    isError: isPatientError,
  } = usePatient(patientProp ? null : patientUuid);
  const patient = patientProp || fetchedPatient;
  const { data, isLoading, isError } = useGrowthChartData(patient);

  const ageInMonths = useMemo(() => {
    const birthDate = dayjs(patient?.birthDate);
    return birthDate.isValid() ? dayjs().diff(birthDate, 'month', true) : null;
  }, [patient?.birthDate]);

  if (isPatientLoading || isLoading) {
    return <DataTableSkeleton />;
  }

  if (isPatientError) {
    return <Tile>{t('errorFetchingPatient', 'Unable to fetch patient data')}</Tile>;
  }

  if (isError) {
    return <Tile>{t('errorLoadingData', 'Error loading growth chart data')}</Tile>;
  }

  if (!data?.patient) {
    return <Tile>{t('errorDataUnavailable', 'Patient data not available')}</Tile>;
  }

  if (ageInMonths !== null && ageInMonths > 60) {
    return (
      <EmptyState
        headerTitle={t('growthChartUnavailable', 'Growth Chart Unavailable')}
        displayText={t(
          'patientOlderThanFiveYears',
          'Growth charts are only available for patients under 5 years of age.',
        )}
      />
    );
  }

  return (
    <div className={styles.container}>
      <CardHeader title={t('growthChart', 'Growth Chart')} />
      <div className={styles.visualizationContainer}>
        <GrowthChartVisualization data={data} />
      </div>
    </div>
  );
};

export default GrowthChart;
