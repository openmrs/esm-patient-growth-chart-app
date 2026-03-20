import React from 'react';
import styles from './card-header.scss';

interface CardHeaderProps {
  title: string;
  children?: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, children }) => {
  return (
    <div className={styles.desktopHeader}>
      <header>
        <h2>{title}</h2>
      </header>
      {children}
    </div>
  );
};

export default CardHeader;
