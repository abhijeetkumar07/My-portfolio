import "./styles/Career.css";

const Certificates = () => {
  return (
    <div className="career-section section-container" id="certificates">
      <div className="career-container">
        <h2>
          My <span>Certificates</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI</h4>
                <h5>Oracle University</h5>
              </div>
            </div>
            <p>
              Completed certification on Generative AI, learning about foundation models, LLMs, and prompt engineering.
              <br />
              <br />
              <a href="/images/eCertificate Oracle_page-0001.jpg" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Basics</h4>
                <h5>Oracle University</h5>
              </div>
            </div>
            <p>
               Foundations of Data Science, covering data analysis, visualization, and basic machine learning concepts.
               <br />
               <br />
               <a href="/images/eCertificate Oracle data science_page-0001.jpg" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Responsive Web Design</h4>
                <h5>FreeCodeCamp</h5>
              </div>
            </div>
            <p>
              Developer Certification, representing approximately 300 hours of coursework focusing on HTML, CSS, and Responsive Design.
              <br />
              <br />
              <a href="/images/Freecode camp.png" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
