import "./styles/Career.css";

const Achievements = () => {
  return (
    <div className="career-section section-container" id="achievements">
      <div className="career-container">
        <h2>
          My <span>Achievements</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Binary Blitz Hackathon</h4>
                <h5>Participant</h5>
              </div>
            </div>
            <p>
              Actively participated in the Binary Blitz Hackathon, building competitive solutions in a fast-paced environment.
              <br />
              <br />
              <a href="/images/Binary bliz.jpg" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LeetCode Problem Solver</h4>
                <h5>200+ Problems</h5>
              </div>
            </div>
            <p>
               Successfully solved over 200 data structure and algorithm problems, focusing on <Java></Java> and optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
