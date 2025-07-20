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

  return (
    <div className="container">

      <button onClick={toggleTheme} style={{ float: 'right' }}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <header>
        <h1>Soren Mohaghegh</h1>
        <p>
          AWS Cloud Support Engineer I (CSE I)
          <br />
          Herndon, VA
        </p>
      </header>

      <section>
        <h2>Objective</h2>
        <p>
          Seeking a technical role in software development or cloud engineering where I can leverage my experience with AWS services, Linux systems, and programming to deliver scalable, efficient solutions and grow as a contributor to modern infrastructure and application development.        </p>
      </section>



      <section>
        <h2>Education</h2>
        <p>
          <strong>Virginia Commonwealth University</strong>
          <br />
          Richmond, Virginia
          <br />
          B.S. Information Systems (Dec. 2019)
        </p>
      </section>

      <section>
        <h2>Key Skills</h2>
        <div class="skills-grid">
          <div class="skill-block">
            <strong>Cloud & Infrastructure:</strong> Deploying and maintaining production AWS environments (EC2, S3, IAM, etc.)
          </div>
          <div class="skill-block">
            <strong>Linux System Administration:</strong> AL2, RHEL, Ubuntu, SUSE, and more — hardware/software troubleshooting
          </div>
          <div class="skill-block">
            <strong>Networking:</strong> TCP/IP, DNS, firewalls, load balancers
          </div>
          <div class="skill-block">
            <strong>Programming & Scripting:</strong> Python, Java, JavaScript, TypeScript, Bash
          </div>
          <div class="skill-block">
            <strong>Web Technologies:</strong> HTML, CSS, Apache, NGINX
          </div>
          <div class="skill-block">
            <strong>Version Control:</strong> Git, GitHub — team collaboration
          </div>
          <div class="skill-block">
            <strong>DevOps Concepts:</strong> CI/CD pipelines, Docker, cloud-native tooling
          </div>
        </div>
      </section>


      <section>
        <h2>Experience</h2>

        <h3>
          Cloud Support Engineer I (CSE I) - AWS
          <br />
          <small>EC2 Linux Support – Herndon, VA, June 2022 - Present</small>
        </h3>
        <ul>
          <li>Provide Enterprise level support to customers for the following AWS Services: EC2 Linux, EBS, S3, Systems Manager, Auto Scaling, IAM, ElastiCache, Lightsail, CloudWatch, CloudTrail, Image Builder, VM I/E, CloudShell, Compute Optimizer, Health, Trusted Advisor, KMS, Migration Hub, Outposts, and more.</li>
          <li>Diagnose and resolve sensitive, high-priority production issues for enterprise-level AWS customers, minimizing downtime.</li>
          <li>Deploy and configure various production environments using knowledge of EC2 Instances, VPCs, Elastic Load Balancers, Route53 hosted zones and more.</li>
          <li>Collaborate with internal service teams to identify and resolve bugs in AWS services and implement customer feature requests.</li>
          <li>Work rotational On-call shift as the primary point of contact for global EC2 Linux related issues.</li>
        </ul>

        <h3>
          Software Development Engineer Intern (SDE Intern) - AWS
          <br />
          <small>EC2 Core / EC2 Metering – Arlington, VA, November 2023 - August 2024</small>
        </h3>
        <ul>
          <li>Developed and maintained AWS EC2 Metering services that audits all customer EC2 instances, network, capacity reservation, disk (and other related EC2 resources) usage.</li>
          <li>Increased metering efficiency by adding additional functionality to Apache Spark big data auditing platform for EC2 Metering service by implementing S3 and other AWS services.</li>
          <li>Completed 10 month SDE boot camp prior to internship (parallel with Cloud Support Engineer I role).</li>
        </ul>

        <h3>
          Data Center Operations Technician – AWS
          <br />
          <small>Ashburn, VA, April 2020 - June 2022</small>
        </h3>
        <ul>
          <li>Monitored, repaired, and maintained AWS EC2, S3 and EBS host types by utilizing diagnostic tools within Unix/Linux.</li>
          <li>Worked a rotational, on-call shift in order to maintain functionality of high priority infrastructure within AWS data centers.</li>
          <li>Utilized JavaScript and Python to build scripts in order to automate repetitive tasks for fellow technicians.</li>
          <li>Troubleshooted TOR switch issues such as link failures, fiber issues or device downs.</li>
          <li>Created internal SOPs, wikis and other useful resources to train and keep employees up to date with best practices.</li>
          <li>Collaborated with hardware engineering teams to identify and resolve large-scale events and server bugs.</li>
          <li>Utilized AWS internal ticketing systems to remediate issues within various AWS data centers.</li>
        </ul>

        <h3>
          Technical Support Engineer - Empriza Biotech
          <br />
          <small>Richmond, VA, November 2017 – December 2019</small>
        </h3>
        <ul>
          <li>Created logistics tracking systems to document and organize all inbound and outbound shipments.</li>
          <li>Migrated the startup from an online accounting system to a localized server, giving the accounting team more powerful tools and increased reliability.</li>
          <li>Managed IT infrastructure, including purchasing workstations, troubleshooting hardware and software, and maintaining inventory of $400,000 worth of materials.</li>
        </ul>

        <h3>
          Medical Office Assistant - OrthoVirginia
          <br />
          <small>Herndon, VA, May 2016 – August 2016</small>
        </h3>
        <ul>
          <li>Utilized Allscripts to maintain patient appointment schedules as directed by physicians.</li>
          <li>Interacted with IT staff to report system availability issues and helped to troubleshoot equipment issues.</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
