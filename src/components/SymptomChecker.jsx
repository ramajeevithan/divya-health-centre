import { useState } from 'react';

const SymptomChecker = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [result, setResult] = useState('');

    const symptomsList = [
      'Abdominal pain', 'Bloating', 'Nausea', 'Diarrhea', 'Constipation', 'Heartburn'
    ];

    const handleSymptomToggle = (symptom) => {
      setSymptoms(prevSymptoms => 
        prevSymptoms.includes(symptom)
          ? prevSymptoms.filter(s => s !== symptom)
          : [...prevSymptoms, symptom]
      );
    };

    const checkSymptoms = () => {
      if (symptoms.length === 0) {
        setResult('Please select at least one symptom.');
      } else if (symptoms.includes('Abdominal pain') && symptoms.includes('Bloating')) {
        setResult('These symptoms might indicate irritable bowel syndrome. Please consult our gastroenterologist.');
      } else {
        setResult('Based on your symptoms, we recommend scheduling an appointment with our specialist for a proper diagnosis.');
      }
    };

    return (
      <div className="max-w-md mx-auto">
        <div className="mb-4 flex flex-wrap justify-center">
          {symptomsList.map(symptom => (
            <button
              key={symptom}
              onClick={() => handleSymptomToggle(symptom)}
              className={`mr-2 mb-2 px-4 py-2 rounded ${
                symptoms.includes(symptom) ? 'bg-purple-600 text-white' : 'bg-gray-200'
              }`}
            >
              {symptom}
            </button>
          ))}
        </div>
        <button onClick={checkSymptoms} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Check Symptoms
        </button>
        {result && <p className="mt-4 text-lg">{result}</p>}
      </div>
    );
  };

export default SymptomChecker;
