import React from 'react';
import { Tile } from '@carbon/react';
import { EmptyDataIllustration } from './EmptyDataIllustration';
import styles from './empty-state.scss';

interface EmptyStateProps {
  headerTitle: string;
  displayText: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ headerTitle, displayText }) => {
  return (
    <Tile className={styles.tile}>
      <div className={styles.desktopHeading}>
        <h4>{headerTitle}</h4>
      </div>
      <div className={styles.centeredContent}>
        <EmptyDataIllustration />
        <p className={styles.content}>{displayText}</p>
      </div>
    </Tile>
  );
};

export default EmptyState;
