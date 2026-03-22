import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Resume <span>&</span>
          <br /> Education
        </h2>
        <div className="resume-btn-container">
           <a href="/images/MY CV_page-0001.jpg" target="_blank" rel="noopener noreferrer" className="resume-btn">
             View My CV
           </a>
        </div>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              CGPA: 6.61. Pursuing B.Tech CSE. Participated in Binary Blitz Hackathon and solved 200+ problems on LeetCode focusing on DSA.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Basic of DSA using C++ | Training</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>Summer 2025</h3>
            </div>
            <p>
              Completed certified skill development training on core Data Structure & Algorithm fundamentals. Delivered the Predictive Crop Disease project, improving prediction reliability by 35%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate - PCM</h4>
                <h5>Inter Science College</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Hazaribagh, Jharkhand. Completed intermediate education focusing on Physics, Chemistry, and Mathematics. Percentage: 75.6%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>Munam Public School</h5>
              </div>
              <h3>2020 - 2021</h3>
            </div>
            <p>
              Hazaribagh, Jharkhand. Completed matriculation with a strong academic foundation. Percentage: 64.2%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
