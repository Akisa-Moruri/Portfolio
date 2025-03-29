import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

function Education() {
  const educationData = [
    {
      year: 'February 2024 - November 2024',
      school: 'Moringa School',
      course: 'Certification in Software Engineering',
    },
    
    {
      year: '2010 - 2013',
      school: 'Kenya Institute of Surveying and Mapping',
      course: 'Diploma in Land Surveying',
    },
    {
      year: 'January 2009 - November 2010',
      school: 'Mt. Kenya University',
      course: 'Diploma in Business Information Technology',
    },
    
    
  ];

  return (
    <div id="education">      
      <section className="w-full h-full bg-gray-400 dark:bg-gray-200 px-6 py-12">
        <h3 className="my-6 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
          Education
        </h3>        
        {educationData.map((item, index) => (
          <div key={index} className="my-8">
            <div className="rounded-2xl bg-indigo-600/80 w-3/4 lg:w-1/2 mx-auto px-4 py-8 text-gray-100 border-2 border-gray-600/30">
              <div className="flex items-center">
                <AcademicCapIcon className="h-6 w-6 text-teal-400 mr-2" />
                <h4 className="text-lg font-medium">{item.year}</h4>
              </div>
              <p className="mt-2 text-base font-semibold">{item.school}</p>
              {item.course && (
                <p className="mt-1 text-sm italic text-gray-300">{item.course}</p>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Education;
