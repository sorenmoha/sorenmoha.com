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
        setTimeout(typeNextChar, 27);  //delay per char in single line
      } else if (currentLine < bannerLines.length - 1) {
        currentLine++;
        currentChar = 0;
        setTimeout(typeNextChar, 1);  //delay to move to next line
      }
    };
  
    typeNextChar();
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
          <section className="half">
            <h2>Objective</h2>
            <p>
              Seeking a role in software or cloud engineering where I can apply my experience with Linux, programming, and cloud services to build scalable, efficient systems and grow as a technical contributor.            </p>
          </section>

          <section className="half">
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

        <section className="no-hover">
          <h2>Key Skills</h2>
          <div className="skills-grid">
            <div className="skill-block">
              <strong>Languages & Scripting:</strong> Proficient in Python, Java, JavaScript, TypeScript, and Bash for backend systems, scripting, and automation.
            </div>
            <div className="skill-block">
              <strong>Frontend & Web Technologies:</strong> Experienced with HTML5, CSS3, React, and responsive design. Familiar with web servers like Apache and NGINX.
            </div>
            <div className="skill-block">
              <strong>Linux System Engineering:</strong> Advanced troubleshooting and administration in RHEL, Ubuntu, Amazon Linux, and SUSE-based environments.
            </div>
            <div className="skill-block">
              <strong>Cloud Platforms & DevOps:</strong> Hands-on deployment and support for AWS services including EC2, S3, IAM, Auto Scaling, and Systems Manager.
            </div>
            <div className="skill-block">
              <strong>Networking & Infrastructure:</strong> In-depth knowledge of TCP/IP, DNS, firewalls, VPNs, and load balancers in production environments.
            </div>
            <div className="skill-block">
              <strong>CI/CD & Version Control:</strong> Git version control, Docker containerization, CI/CD pipelines, and cloud-native DevOps tooling.
            </div>
          </div>
        </section>

        <section className="no-hover">
          <h2>Experience</h2>

          <h3>
            Linux Cloud Support Engineer - AWS
            <br />
            <small>EC2 Linux Support – Herndon, VA, June 2022 - Present</small>
          </h3>
          <ul>
            <li>Delivered support for EC2 Linux and related AWS services, ensuring uptime and resolution of complex issues across global customer environments.</li>
            <li>Troubleshot high-priority production incidents, minimizing downtime for enterprise workloads running on EC2, EBS, S3, and IAM.</li>
            <li>Configured and deployed secure AWS infrastructure, including EC2, VPCs, ELBs, and Route53, aligned to customer architecture goals.</li>
            <li>Worked cross-functionally with AWS service teams to investigate service bugs and shape new feature rollouts based on customer feedback.</li>
            <li>Served as On-Call for Linux EC2 escalations; resolved real-time incidents affecting mission-critical systems.</li>
          </ul>

          <h3>
            Software Development Engineer Intern - AWS
            <br />
            <small>EC2 Core / EC2 Metering – Arlington, VA, Nov 2023 - Aug 2024</small>
          </h3>
          <ul>
            <li>Engineered scalable solutions within EC2 Metering, enabling high-accuracy auditing of compute and network resource usage across all AWS accounts.</li>
            <li>Improved performance of Spark-based data pipelines by integrating S3 for metering logs and automating validation workflows.</li>
            <li>Graduated from internal AWS SDE boot camp (10 month), covering distributed systems, code reviews, testing pipelines, and ownership best practices.</li>
          </ul>

          <h3>
            Data Center Operations Technician – AWS
            <br />
            <small>Ashburn, VA, Apr 2020 - Jun 2022</small>
          </h3>
          <ul>
            <li>Maintained EC2, S3, and EBS host infrastructure using Linux diagnostic tooling to minimize outages and improve fleet health KPIs.</li>
            <li>Developed internal automation scripts in Python and JavaScript to streamline repetitive operational tasks, reducing manual effort by 30%.</li>
            <li>Handled on-call troubleshooting of hardware failures and networking incidents (e.g., TOR switch outages, fiber diagnostics).</li>
            <li>Contributed to technical SOPs and runbooks used globally by AWS DCO teams.</li>
          </ul>

          <h3>
            Technical Support Engineer - Empriza Biotech
            <br />
            <small>Richmond, VA, Nov 2017 – Dec 2019</small>
          </h3>
          <ul>
            <li>Led IT support for logistics and accounting systems, migrating the business from a cloud-based platform to on-prem server infrastructure.</li>
            <li>Maintained $400K+ in lab hardware and inventory; managed procurement and system imaging for workstations and lab PCs.</li>
            <li>Created internal scripts to automate task tracking and report generation for lab workflows.</li>
          </ul>

          <h3>
            Medical Office Assistant - OrthoVirginia
            <br />
            <small>Herndon, VA, May 2016 – Aug 2016</small>
          </h3>
          <ul>
            <li>Managed patient scheduling using Allscripts EHR; coordinated appointments, follow-ups, and physician calendars.</li>
            <li>Reported system errors and coordinated resolution with internal IT staff, supporting 30+ users across two sites.</li>
          </ul>
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
