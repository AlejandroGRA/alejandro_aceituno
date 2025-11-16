export const resumeData = {
  header: {
    name: "Alex Rodriguez",
    title: "Senior Data Engineer",
    email: "alex.rodriguez@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/alexrodriguez",
    github: "https://github.com/alexrodriguez"
  },
  
  experience: [
    {
      title: "Senior Data Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Led the design and implementation of a real-time data pipeline processing 50M+ events daily using Apache Kafka and Apache Spark",
        "Architected and deployed cloud-based data warehouse on AWS Redshift, reducing query response time by 60%",
        "Developed automated ETL processes using Python and Apache Airflow, improving data processing efficiency by 40%",
        "Collaborated with cross-functional teams to establish data governance policies and ensure data quality standards",
        "Mentored junior data engineers and conducted technical interviews for new team members"
      ],
      technologies: ["Python", "Apache Spark", "Apache Kafka", "AWS", "Redshift", "Apache Airflow", "Docker", "Kubernetes"]
    },
    {
      title: "Data Engineer",
      company: "DataFlow Inc.",
      location: "Austin, TX",
      period: "2019 - 2021",
      description: [
        "Built and maintained data pipelines for machine learning models using Python and Apache Beam",
        "Optimized SQL queries and database performance, resulting in 30% faster data retrieval",
        "Implemented data validation and monitoring systems using Great Expectations framework",
        "Worked with stakeholders to define data requirements and deliver analytics solutions"
      ],
      technologies: ["Python", "Apache Beam", "SQL", "PostgreSQL", "Great Expectations", "Git", "Jenkins"]
    },
    {
      title: "Junior Data Engineer",
      company: "Analytics Pro",
      location: "Seattle, WA",
      period: "2018 - 2019",
      description: [
        "Developed data extraction scripts and automated data collection processes",
        "Assisted in building data models and dimensional schemas for business intelligence",
        "Participated in data quality assessment and implemented data cleaning procedures"
      ],
      technologies: ["Python", "SQL", "Pandas", "NumPy", "Jupyter", "Tableau"]
    }
  ],
  
  skills: [
    {
      category: "Programming Languages",
      skills: ["Python", "SQL", "Scala", "Java", "R", "Bash"]
    },
    {
      category: "Big Data Technologies",
      skills: ["Apache Spark", "Apache Kafka", "Apache Airflow", "Apache Beam", "Hadoop", "Hive"]
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Google Cloud Platform", "Azure", "Databricks", "Snowflake"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Redshift"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Git", "Jenkins", "Terraform", "Grafana"]
    },
    {
      category: "Data Visualization",
      skills: ["Tableau", "Power BI", "Grafana", "Plotly", "D3.js"]
    }
  ],
  
  education: [
    {
      degree: "Master of Science in Data Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2016 - 2018",
      gpa: "3.8/4.0",
      relevantCoursework: [
        "Machine Learning", "Big Data Analytics", "Database Systems", 
        "Statistical Computing", "Data Mining", "Distributed Systems"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2012 - 2016",
      gpa: "3.6/4.0",
      relevantCoursework: [
        "Data Structures", "Algorithms", "Database Design", 
        "Software Engineering", "Statistics", "Linear Algebra"
      ]
    }
  ],
  
  projects: [
    {
      title: "Real-time Analytics Platform",
      description: "Built a scalable real-time analytics platform processing streaming data from multiple sources, providing instant insights to business stakeholders.",
      technologies: ["Apache Kafka", "Apache Spark", "Python", "AWS", "Docker"],
      githubUrl: "https://github.com/alexrodriguez/realtime-analytics",
      liveUrl: "https://analytics-demo.com",
      highlights: [
        "Processes 100M+ events per day with sub-second latency",
        "Implemented fault-tolerant architecture with 99.9% uptime",
        "Reduced data processing costs by 45% through optimization"
      ]
    },
    {
      title: "Data Quality Monitoring System",
      description: "Developed an automated data quality monitoring system that detects anomalies and data drift in real-time using machine learning techniques.",
      technologies: ["Python", "Apache Airflow", "Great Expectations", "MLflow", "PostgreSQL"],
      githubUrl: "https://github.com/alexrodriguez/data-quality-monitor",
      highlights: [
        "Reduced data quality issues by 70% through automated detection",
        "Implemented custom anomaly detection algorithms",
        "Integrated with existing data pipelines seamlessly"
      ]
    },
    {
      title: "Cloud Data Migration Tool",
      description: "Created a comprehensive tool for migrating on-premises data warehouses to cloud platforms with zero downtime.",
      technologies: ["Python", "AWS", "Terraform", "Docker", "Apache Airflow"],
      githubUrl: "https://github.com/alexrodriguez/cloud-migration-tool",
      highlights: [
        "Successfully migrated 50+ TB of data with zero data loss",
        "Automated schema conversion and data type mapping",
        "Reduced migration time by 60% compared to manual processes"
      ]
    }
  ],
  
  certifications: [
    {
      name: "AWS Certified Data Analytics - Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-DAS-123456",
      credentialUrl: "https://aws.amazon.com/verification"
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PDE-789012",
      credentialUrl: "https://cloud.google.com/certification"
    },
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      date: "2022",
      credentialId: "DB-CDE-345678",
      credentialUrl: "https://databricks.com/certification"
    },
    {
      name: "Apache Spark Developer Certification",
      issuer: "Databricks",
      date: "2021",
      credentialId: "DB-SPARK-901234",
      credentialUrl: "https://databricks.com/certification"
    }
  ]
};

