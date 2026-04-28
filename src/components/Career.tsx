import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (B.Tech) in IT</h4>
                <h5>Narula Institute of Technology</h5>
              </div>
              <h3>2023-Present</h3>
            </div>
            <p>
              Currently studying Information Technology, maintaining a CGPA of 8.94 up to the 5th semester.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Examination (CBSE)</h4>
                <h5>Army Public School Barrackpore</h5>
              </div>
              <h3>2021-2022</h3>
            </div>
            <p>
              Completed Higher Secondary education with a score of 80.80%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Examination (CBSE)</h4>
                <h5>Army Public School Barrackpore</h5>
              </div>
              <h3>2019-2020</h3>
            </div>
            <p>
              Completed Secondary education with a score of 91.60%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
