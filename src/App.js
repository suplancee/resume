import  './App.css' ; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <Contact />
          </div>
          <div className="Experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>LANCE PAGCU CHINCUANCO</h1>
      <p><em>Lead Cloud Infrastructure Architect</em></p>
    </div>
  );
}


function Contact() {
  return(
  <div>
    <h2>CONTACT</h2>
    <p>lancechincuanco@gmail.com<FaEnvelope class="icon" /></p>
    <p>+63-945-621-543<FaPhone class="icon" /></p>
    <p>San Fernando, Pamp<FaMapMarkerAlt class="icon" /></p>
    <p><a href="https://www.linkedin.com/in/lance-chincuanco-6b74a8328/" target="_blank" rel="noopener noreferrer" class="link">  LinkedIn</a><FaLinkedin class="icon" /></p>
    <p><a href="https://github.com/suplancee" target="_blank" rel="noopener noreferrer" class="link">Github</a><FaGithub class="icon" /></p>

    <h2>EDUCATION</h2>
    <p>Bachelor of Science</p>
    <p>Information Technology</p>
    <p>University of the Assumption</p>
    <p>2022 - 2026</p>
    <p>San Fernando, Pamp</p>

    <h2>SKILLS</h2>
    <p>Python</p>
    <p>Java</p>
    <p>SQL</p>
    <p>AWS</p>
    <p>Routing</p>
    <p>HTML</p>
    <p>CSS</p>
    <p>Linux</p>
    <p>Power BI</p>
    <p>Github</p>
    <p>Firewalls</p>

  </div>
  );
}

function Experience() {
  return(
  <div>
    <h1>WORK EXPERIENCE</h1>
    <h2>Lead Cloud Infrastructure Architect</h2>
    <h3>Microsoft Azure</h3>
    <h3>2033 – current / Redmond, Washington, USA</h3>
    <ul>
      <li>Developed advanced cloud-native architecture to support Microsoft Azure clients, improving scalability for high-traffic applications.</li>
      <li>Implemented zero-trust security models across various Azure environments, safeguarding customer data from potential breaches.</li>
      <li>Optimized Azure Storage and Networking, cutting operational expenses for enterprise clients by 25%.</li>
      <li>Led cross-functional teams to integrate AI-driven predictive analytics into cloud infrastructure, <strong><u>boosting resource allocation efficiency by 60%.</u></strong></li>
    </ul>
        
    <h2>Senior Cloud Infrastructure Engineer</h2>
    <h3>Google Cloud</h3>
    <h3>2029 – 2032 / Mountain View, California, USA</h3>
    <ul>
      <li>Designed and built custom hybrid cloud solutions, allowing enterprise clients to scale between on-premises and Google Cloud Platform (GCP) seamlessly.</li>
      <li>Led an initiative to optimize Kubernetes clusters on GCP, <strong><u>improving resource utilization by 50%, saving clients over $5M in operational costs.</u></strong></li>
      <li>Created automated monitoring systems using Google Cloud Monitoring, significantly reducing incident response time by 70%.</li>
      <li>Trained and mentored 20+ junior engineers, creating a specialized team that became the company's go-to group for complex cloud infrastructure projects.</li>
    </ul>


    <h2>Cloud Infrastructure Engineer </h2>
    <h3>Amazon Web Services (AWS)</h3>
    <h3>2026 – 2029 / Seattle, Washington, USA</h3>
    <ul>
      <li>Implemented multi-region failover solutions that improved system reliability, reducing downtime by 95%.</li>
      <li>Optimized cloud infrastructure by integrating automation tools (Terraform, AWS CloudFormation), leading to a 40% reduction in deployment times.</li>
      <li>Led a team to migrate 500+ on-premises workloads to the AWS cloud, <strong><u>cutting infrastructure costs by 30%.</u></strong></li>
      <li>Developed robust security policies using AWS IAM and encryption, enhancing data protection and achieving 100% compliance with industry standards.</li>
    </ul>

   
  </div>
  );
}