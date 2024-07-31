import React from 'react';

const DiagnosisReport = ({ symptoms, diagnosis, suggestedActions }) => {
  return (
    <div className="diagnosis-report">
      <h2>Diagnosis Report</h2>
      <div className="report-section">
        <h3>Symptoms Entered:</h3>
        <p>{symptoms}</p>
      </div>
      <div className="report-section">
        <h3>Diagnosis:</h3>
        <p>{diagnosis}</p>
      </div>
      <div className="report-section">
        <h3>Suggested Actions:</h3>
        <ul>
          {suggestedActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiagnosisReport;
