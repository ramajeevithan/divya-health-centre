import { useState } from 'react';

const VirtualTour = () => {
    const [currentOrgan, setCurrentOrgan] = useState('stomach');
    
    const organInfo = {
      stomach: "The stomach is a muscular organ that breaks down food using stomach acid.",
      smallIntestine: "The small intestine absorbs most of the nutrients from the food we eat.",
      largeIntestine: "The large intestine absorbs water and forms stool.",
      liver: "The liver produces bile and helps in detoxification.",
      pancreas: "The pancreas produces enzymes that help in digestion."
    };

    return (
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-wrap justify-center mb-4">
          {Object.keys(organInfo).map(organ => (
            <button
              key={organ}
              onClick={() => setCurrentOrgan(organ)}
              className={`mx-2 mb-2 px-4 py-2 rounded ${
                currentOrgan === organ ? 'bg-purple-600 text-white' : 'bg-gray-200'
              }`}
            >
              {organ.charAt(0).toUpperCase() + organ.slice(1)}
            </button>
          ))}
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">{currentOrgan.charAt(0).toUpperCase() + currentOrgan.slice(1)}</h3>
          <p>{organInfo[currentOrgan]}</p>
        </div>
      </div>
    );
  };

export default VirtualTour;
