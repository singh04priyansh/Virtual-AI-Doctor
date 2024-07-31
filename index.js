import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Chatbot from './Chatbot';
import SymptomChecker from './SymptomChecker';
import DiagnosisReport from './DiagnosisReport';

const App = () => {
  // Example data for DiagnosisReport, replace with actual data from symptom checker
  const symptomsEntered = 'Fever, cough, and shortness of breath';
  const diagnosisResult = 'Possible respiratory infection';
  const suggestedActionsList = [
    'Consult with a healthcare provider',
    'Take prescribed medications',
    'Rest and stay hydrated',
    'Monitor symptoms and seek emergency care if they worsen'
  ];

  return (
    <div className="app">
      <h1>Welcome to AI Doctor</h1>
      <Chatbot />
      <SymptomChecker />
      <DiagnosisReport
        symptoms={symptomsEntered}
        diagnosis={diagnosisResult}
        suggestedActions={suggestedActionsList}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
