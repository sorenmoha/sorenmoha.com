import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Typewriter animation
  const bannerLines = [
    'Cloud Support Engineer',
    'Amazon Web Services',
    'Washington DC Metro Area',
  ];
  const [typedLines, setTypedLines] = useState(['', '', '']);

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;

    const typeNextChar = () => {
      setTypedLines((prevLines) => {
        const newLines = [...prevLines];
        const fullLine = bannerLines[currentLine];
        newLines[currentLine] = fullLine.slice(0, currentChar + 1);
        return newLines;
      });

      if (currentChar < bannerLines[currentLine].length - 1) {
        currentChar++;
        setTimeout(typeNextChar, 27); //delay per char in single line
      } else if (currentLine < bannerLines.length - 1) {
        currentLine++;
        currentChar = 0;
        setTimeout(typeNextChar, 1); //delay to next line
      }
    };

    typeNextChar();
  }, []);

  // Scroll-triggered zoom-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-zoom');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

 return (
  <>
    <div className="navbar">
      <div className="nav-left">
        <a href="https://www.youtube.com/@Swift-Media">
          <img src="/SM-PFP-youtube.jpg" alt="Soren Logo" className="logo" />
        </a>
      </div>

      <div className="nav-center">
        <a href="https://github.com/sorenmoha">GitHub</a>
        <a href="https://www.linkedin.com/in/soren-mohaghegh/">LinkedIn</a>
        <a href="https://sorenmoha.github.io/pictures.html">Media</a>
      </div>

      <div className="nav-right">
        <button onClick={toggleTheme} data-tooltip={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
          {theme === 'light' ? '🌙' : '💡'}
        </button>
      </div>
    </div>

    <div className="container">
      <header>
        <h1>Soren Mohaghegh</h1>
        <p>
          {typedLines.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </header>

      <div className="two-column">
        <section className="half scroll-zoom">
          <h2>Objective</h2>
          <p>
            Seeking a role in software or cloud engineering where I can apply my experience with Linux, programming, and cloud services to build scalable, efficient systems and grow as a technical contributor.
          </p>
        </section>

        <section className="half scroll-zoom">
          <h2>Education</h2>
          <p>
            <strong>Virginia Commonwealth University</strong>
            <br />
            Richmond, Virginia
            <br />
            B.S. Information Systems - 2019
          </p>
        </section>
      </div>

      <section className="no-hover scroll-zoom">
        <h2>Key Skills</h2>
        <div className="skills-grid">
          <div className="skill-block hover-zoom">
            <strong>Languages & Scripting:</strong> Proficient in Python, Java, JavaScript, TypeScript, and Bash for backend systems, scripting, and automation.
          </div>
          <div className="skill-block hover-zoom">
            <strong>Frontend & Web Technologies:</strong> Experienced with HTML5, CSS3, React, and responsive design. Familiar with web servers like Apache and NGINX.
          </div>
          <div className="skill-block hover-zoom">
            <strong>Linux System Engineering:</strong> Advanced troubleshooting and administration in RHEL, Ubuntu, Amazon Linux, and SUSE-based environments.
          </div>
          <div className="skill-block hover-zoom">
            <strong>Cloud Platforms & DevOps:</strong> Hands-on deployment and support for AWS services including EC2, S3, IAM, Auto Scaling, and Systems Manager.
          </div>
          <div className="skill-block hover-zoom">
            <strong>Networking & Infrastructure:</strong> In-depth knowledge of TCP/IP, DNS, firewalls, VPNs, and load balancers in production environments.
          </div>
          <div className="skill-block hover-zoom">
            <strong>CI/CD & Version Control:</strong> Git version control, Docker containerization, CI/CD pipelines, and cloud-native DevOps tooling.
          </div>
        </div>
      </section>

      <section className="no-hover">
        <h2>Experience</h2>

        {[
          {
            title: 'Linux Cloud Support Engineer - AWS',
            date: 'EC2 Linux Support – Herndon, VA, June 2022 - Present',
            items: [
              'Delivered support for EC2 Linux and related AWS services, ensuring uptime and resolution of complex issues across global customer environments.',
              'Troubleshot high-priority production incidents, minimizing downtime for enterprise workloads running on EC2, EBS, S3, and IAM.',
              'Configured and deployed secure AWS infrastructure, including EC2, VPCs, ELBs, and Route53, aligned to customer architecture goals.',
              'Worked cross-functionally with AWS service teams to investigate service bugs and shape new feature rollouts based on customer feedback.',
              'Served as On-Call for Linux EC2 escalations; resolved real-time incidents affecting mission-critical systems.',
            ],
          },
          {
            title: 'Software Development Engineer Intern - AWS',
            date: 'EC2 Core / EC2 Metering – Arlington, VA, Nov 2023 - Aug 2024',
            items: [
              'Engineered scalable solutions within EC2 Metering, enabling high-accuracy auditing of compute and network resource usage across all AWS accounts.',
              'Improved performance of Spark-based data pipelines by integrating S3 for metering logs and automating validation workflows.',
              'Graduated from internal AWS SDE boot camp (10 month), covering distributed systems, code reviews, testing pipelines, and ownership best practices.',
            ],
          },
          {
            title: 'Data Center Operations Technician – AWS',
            date: 'Ashburn, VA, Apr 2020 - Jun 2022',
            items: [
              'Maintained EC2, S3, and EBS host infrastructure using Linux diagnostic tooling to minimize outages and improve fleet health KPIs.',
              'Developed internal automation scripts in Python and JavaScript to streamline repetitive operational tasks, reducing manual effort by 30%.',
              'Handled on-call troubleshooting of hardware failures and networking incidents (e.g., TOR switch outages, fiber diagnostics).',
              'Contributed to technical SOPs and runbooks used globally by AWS DCO teams.',
            ],
          },
          {
            title: 'Technical Support Engineer - Empriza Biotech',
            date: 'Richmond, VA, Nov 2017 – Dec 2019',
            items: [
              'Led IT support for logistics and accounting systems, migrating the business from a cloud-based platform to on-prem server infrastructure.',
              'Maintained $400K+ in lab hardware and inventory; managed procurement and system imaging for workstations and lab PCs.',
              'Created internal scripts to automate task tracking and report generation for lab workflows.',
            ],
          },
          {
            title: 'Medical Office Assistant - OrthoVirginia',
            date: 'Herndon, VA, May 2016 – Aug 2016',
            items: [
              'Managed patient scheduling using Allscripts EHR; coordinated appointments, follow-ups, and physician calendars.',
              'Reported system errors and coordinated resolution with internal IT staff, supporting 30+ users across two sites.',
            ],
          },
        ].map((job, idx) => (
          <div key={idx} className="scroll-zoom hover-zoom">
            <h3>
              {job.title}
              <br />
              <small>{job.date}</small>
            </h3>
            <ul>
              {job.items.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>

    <footer className="footer">
      <div className="footer-line">
        <a href="mailto:soren@sorenmoha.com">soren@sorenmoha.com</a>
        <span className="footer-links">
          <a href="https://github.com/sorenmoha">GitHub</a>
          <span className="divider">|</span>
          <a href="https://www.linkedin.com/in/soren-mohaghegh/">LinkedIn</a>
          <span className="divider">|</span>
          <a href="https://sorenmoha.github.io/pictures.html">Media</a>
        </span>
      </div>
      <small>© 2025 Soren Mohaghegh</small>
    </footer>
  </>
);
}

export default App;