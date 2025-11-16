import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  relevantCoursework?: string[];
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="section">
      <h2>Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-location">{edu.location}</p>
                {edu.gpa && (
                  <p className="education-gpa">GPA: {edu.gpa}</p>
                )}
              </div>
              <span className="education-period">
                {edu.period}
              </span>
            </div>
            
            {edu.relevantCoursework && (
              <div className="coursework">
                <h4>Relevant Coursework:</h4>
                <div className="coursework-tags">
                  {edu.relevantCoursework.map((course, courseIndex) => (
                    <span key={courseIndex} className="coursework-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
