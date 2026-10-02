import { useState } from 'react';

const EducationCenter = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const topics = [
      { title: 'Understanding GERD', content: 'Gastroesophageal reflux disease (GERD) occurs when stomach acid frequently flows back into the esophagus...' },
      { title: 'Importance of Colonoscopy', content: 'A colonoscopy is a crucial screening tool for colorectal cancer, allowing early detection and prevention...' },
      { title: 'Managing IBS', content: 'Irritable Bowel Syndrome (IBS) is a common disorder affecting the large intestine. Symptoms can often be managed through diet and lifestyle changes...' },
    ];

    return (
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {topics.map((topic, index) => (
            <button
              key={index}
              onClick={() => setSelectedTopic(topic)}
              className={`bg-blue-500 text-white p-4 rounded shadow hover:shadow-lg transition duration-300 ${
                selectedTopic === topic ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
              }`}
            >
              {topic.title}
            </button>
          ))}
        </div>
        {selectedTopic && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className={`text-xl font-bold mb-2 ${
              selectedTopic.title === 'Importance of Colonoscopy'
              ? 'text-red-500' 
              : (selectedTopic.title === 'Understanding GERD' || selectedTopic.title === 'Managing IBS') 
              ? 'text-green-500' 
              : 'text-black'
            }`}>
              {selectedTopic.title}
            </h3>
            <p>{selectedTopic.content}</p>
          </div>
        )}
      </div>
    );
  };

export default EducationCenter;
