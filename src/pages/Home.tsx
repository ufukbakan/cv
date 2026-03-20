import HeroVisual from "../components/HeroVisual";
import Skills from "../components/Skills";
import TypeEffect from "../components/TypeEffect";
import Layout from "./_layout";

export default function Home() {
  return (
    <Layout>
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="badge-available">
              <span class="pulse-dot">
                <span class="pulse-dot-inner"></span>
              </span>
              Available for Leadership Roles
            </div>
            <TypeEffect id="hero-title" as='h1' className='hero-title' text='Hello World!' infinite={true} delay={5000}></TypeEffect>
            <p class="hero-description">
              I'm Ufuk (/ʔufuk/), a Senior Software Engineer specialized in building high-performance e-commerce solutions,
              fintech platforms, and scalable backend systems with modern web technologies.
            </p>
            <div class="hero-buttons">
              <a href="#journey" class="btn-primary">View Experience</a>
              <a href="#contact" class="btn-secondary">Contact Me</a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>
      <section class="stats-bar">
        <div class="container stats-grid">
          <div class="stat-item">
            <span class="stat-number">5+</span>
            <span class="stat-label">Years of Experience</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100+</span>
            <span class="stat-label">Github repositories</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">20+</span>
            <span class="stat-label">npm Packages</span>
          </div>
        </div>
      </section>
      <section class="journey-section" id="journey">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Professional Experience</h2>
            <div class="title-accent"></div>
            <p class="section-desc">
              A journey through e-commerce, fintech, and government technology innovations.
            </p>
          </div>
          <div class="experience-stack">
            <div class="experience-block">
              <div class="experience-info">
                <div class="experience-header">
                  <div class="experience-icon">
                    <span class="material-symbols-outlined">
                      shopping_bag
                    </span>
                  </div>
                  <div>
                    <h3 class="role-title">Fullstack Developer</h3>
                    <p class="role-date">Ounass • July 2024 — Present</p>
                  </div>
                </div>
                <div class="responsibility-list">
                  <h4 class="list-label">Key Responsibilities</h4>
                  <ul class="list-items">
                    <li>Part of the checkout team, contributing to e-commerce infrastructure</li>
                    <li>Directly contributed to world's first online VAT Refund for Tourists integration</li>
                    <li>Developing performant Node.js backend solutions alongside custom SSR & CSR frontends with Preact</li>
                  </ul>
                </div>
              </div>
              <div class="experience-details">
                <div class="details-stack">
                  <div>
                    <h4 class="details-heading">Technical Stack</h4>
                    <div class="accomplishments-grid">
                      <div class="metric-card">
                        <p class="metric-value">Node.js</p>
                        <p class="metric-label">Backend</p>
                      </div>
                      <div class="metric-card">
                        <p class="metric-value">Preact</p>
                        <p class="metric-label">Frontend</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="details-heading">Key Achievement</h4>
                    <p class="breakthrough-text">
                      "Successfully implemented the world's first online VAT Refund for Tourists integration, revolutionizing tax-free shopping experience."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="experience-block">
              <div class="experience-info">
                <div class="experience-header">
                  <div class="experience-icon alt">
                    <span class="material-symbols-outlined">
                      account_balance
                    </span>
                  </div>
                  <div>
                    <h3 class="role-title">Full Stack Developer</h3>
                    <p class="role-date">YapiKredi Teknoloji • July 2023 — July 2024</p>
                    <p class="role-subtitle">via Metasis Teknoloji</p>
                  </div>
                </div>
                <div class="responsibility-list">
                  <h4 class="list-label">Key Responsibilities</h4>
                  <ul class="list-items">
                    <li>Developed YapiKredi Factoring platform using Java microservices</li>
                    <li>Created React micro front-ends with Spring Boot backend</li>
                    <li>Contributed to services, unit & integration tests, and created dozens of React hooks</li>
                    <li>Led customer data migration using Spring Batch with UC4</li>
                  </ul>
                </div>
              </div>
              <div class="experience-details">
                <div class="details-stack">
                  <div>
                    <h4 class="details-heading">Technical Stack</h4>
                    <div class="accomplishments-grid">
                      <div class="metric-card">
                        <p class="metric-value">Java</p>
                        <p class="metric-label">Backend</p>
                      </div>
                      <div class="metric-card">
                        <p class="metric-value">React</p>
                        <p class="metric-label">Frontend</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="details-heading">Key Achievement</h4>
                    <p class="breakthrough-text">
                      "Successfully led customer data migration project using Spring Batch, ensuring seamless transition of critical financial data."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="experience-block">
              <div class="experience-info">
                <div class="experience-header">
                  <div class="experience-icon alt">
                    <span class="material-symbols-outlined">
                      local_police
                    </span>
                  </div>
                  <div>
                    <h3 class="role-title">Software Engineer</h3>
                    <p class="role-date">Ministry of Interior • August 2022 — July 2023</p>
                    <p class="role-subtitle">Republic of Turkey</p>
                  </div>
                </div>
                <div class="responsibility-list">
                  <h4 class="list-label">Key Responsibilities</h4>
                  <ul class="list-items">
                    <li>Developed custom OAuth protocol for wide area network (React, TypeScript, Python Flask)</li>
                    <li>Created offline WHOIS servers with Java Spring Boot and PostgreSQL</li>
                    <li>Built internal tools including a Spring Initializr clone</li>
                    <li>Contributed to top-secret projects using Scala Spark for big data preprocessing</li>
                  </ul>
                </div>
              </div>
              <div class="experience-details">
                <div class="details-stack">
                  <div>
                    <h4 class="details-heading">Technical Stack</h4>
                    <div class="accomplishments-grid">
                      <div class="metric-card">
                        <p class="metric-value">Apache Spark</p>
                        <p class="metric-label">Big Data</p>
                      </div>
                      <div class="metric-card">
                        <p class="metric-value">React</p>
                        <p class="metric-label">Frontend</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="details-heading">Key Achievement</h4>
                    <p class="breakthrough-text">
                      "Developed custom OAuth protocol and offline WHOIS servers, enhancing network security and infrastructure reliability."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="experience-block">
              <div class="experience-info">
                <div class="experience-header">
                  <div class="experience-icon alt">
                    <span class="material-symbols-outlined">
                      biotech
                    </span>
                  </div>
                  <div>
                    <h3 class="role-title">Full Stack Developer</h3>
                    <p class="role-date">TÜBİTAK BİLGEM YTE • August 2021 — August 2022</p>
                  </div>
                </div>
                <div class="responsibility-list">
                  <h4 class="list-label">Key Responsibilities</h4>
                  <ul class="list-items">
                    <li>Contributed to Turkey's Treasury and Financial Management System</li>
                    <li>Multi-billion dollar platform with dozens of microservices</li>
                    <li>Developed backend with Java, PostgreSQL and frontend with Ember.js</li>
                    <li>Worked in agile environment with Atlassian tools</li>
                  </ul>
                </div>
              </div>
              <div class="experience-details">
                <div class="details-stack">
                  <div>
                    <h4 class="details-heading">Technical Stack</h4>
                    <div class="accomplishments-grid">
                      <div class="metric-card">
                        <p class="metric-value">Java</p>
                        <p class="metric-label">Backend</p>
                      </div>
                      <div class="metric-card">
                        <p class="metric-value">Ember.js</p>
                        <p class="metric-label">Frontend</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="details-heading">Key Achievement</h4>
                    <p class="breakthrough-text">
                      "Contributed to Turkey's national Treasury and Financial Management System, a critical multi-billion dollar government platform."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <section class="learning-section" id="learning">
        <div class="container">
          <h2
            class="section-title"
          >
            Licenses &amp; Certifications
          </h2>
          <div class="certs-grid">
            <a href="https://www.coursera.org/account/accomplishments/verify/S65XMBVDCZNE" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">DeepLearning.AI</p>
                <p class="cert-name">AI-Powered Software and System Design</p>
              </div>
            </a>
            <a href="https://www.coursera.org/account/accomplishments/verify/N1O626AQTK1V" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">Google</p>
                <p class="cert-name">Foundations of User Experience (UX) Design</p>
              </div>
            </a>
            <a href="https://www.coursera.org/account/accomplishments/verify/5CXZS4B3F9YG" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">Meta</p>
                <p class="cert-name">Advanced React</p>
              </div>
            </a>
            <a href="https://www.hackerrank.com/certificates/bd94c53b4590" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">HackerRank</p>
                <p class="cert-name">Rest API</p>
              </div>
            </a>
            <a href="https://www.hackerrank.com/certificates/0f900165d939" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">HackerRank</p>
                <p class="cert-name">Python</p>
              </div>
            </a>
            <a href="https://www.hackerrank.com/certificates/3c2a341e2f10" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">HackerRank</p>
                <p class="cert-name">Java</p>
              </div>
            </a>
            <a href="https://www.hackerrank.com/certificates/8cf6f05241c1" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">HackerRank</p>
                <p class="cert-name">Node.js</p>
              </div>
            </a>
            <a href="https://www.hackerrank.com/certificates/1875c7f5f33b" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">HackerRank</p>
                <p class="cert-name">Problem Solving</p>
              </div>
            </a>
            <a href="https://www.hackerrank.com/certificates/7a8dff3f3b1d" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">HackerRank</p>
                <p class="cert-name">React</p>
              </div>
            </a>
            <a href="https://www.hackerrank.com/certificates/ad7fcc7480fa" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">HackerRank</p>
                <p class="cert-name">SQL</p>
              </div>
            </a>
            <a href="https://www.hackerrank.com/certificates/9780cfe7b407" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">HackerRank</p>
                <p class="cert-name">CSS</p>
              </div>
            </a>
            <a href="https://www.hackerrank.com/certificates/a758b00f6c0f" target="_blank" rel="noopener noreferrer" class="cert-card">
              <div class="cert-icon">
                <span class="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <div>
                <p class="cert-org">HackerRank</p>
                <p class="cert-name">JavaScript</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="learning-section" id="education">
        <div class="container">
          <h2
            class="section-title"
          >
            Education
          </h2>
          <div class="learning-grid">
            <div class="learning-card">
              <div class="learning-items">
                <div class="focus-item">
                  <div class="focus-icon">
                    <span class="material-symbols-outlined">account_balance</span>
                  </div>
                  <div class="focus-info">
                    <h3 class="focus-name">Gazi University</h3>
                    <p class="focus-source">
                      B.Sc. Computer Engineering • Graduated 2022
                    </p>
                    <p class="focus-source">GPA: 3.79/4.00 • 3rd in Department</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="learning-card">
              <div class="learning-items">
                <div class="focus-item">
                  <div class="focus-icon">
                    <span class="material-symbols-outlined">science</span>
                  </div>
                  <div class="focus-info">
                    <h3 class="focus-name">Macit Zeren Science High School</h3>
                    <p class="focus-source">Graduated 2018</p>
                    <p class="focus-source">GPA: 94/100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
