import "./project.css";
function Project() {
  return (
    <div>
      <h1>PROJECTS</h1>
      <div className="projects">
        <div className="project-list">
          <img src="/images/va-reforestation.png" alt="" />
          <div className="info">
            <h2>REFORESTATION</h2>
            <p>
              Reforest and maintain at least 60% of Cambodian national forest
              cover.
            </p>
          </div>
        </div>
        <div className="project-list">
          <img src="/images/va-natural-farming.png" alt="" />
          <div className="info">
            <h2>NATURAL FARMING</h2>
            <p>
              Designing balanced ecosystems that produce rich soils and
              nutrient-dense foods while respecting the environment and animals.
            </p>
          </div>
        </div>
        <div className="project-list">
          <img src="/images/va-ecotour.png" alt="" />
          <div className="info">
            <h2>ECO-TOURISM</h2>
            <p>
              Bring everyone closer to nature, instilling love, healthy and
              sustainable relationships among people.
            </p>
          </div>
        </div>
        <div className="project-list">
          <img src="/images/va-water.png" alt="" />
          <div className="info">
            <h2>VITAMINWATER</h2>
            <p>
              Capture purified water from air, building water and irrigation
              systems for abundance and prosperity.
            </p>
          </div>
        </div>
        <div className="project-list">
          <img src="/images/va-seedbombing.png" alt="" />
          <div className="info">
            <h2>SEED BOMBING</h2>
            <p>
              Combine tradition with ecological science and technology for
              enhanced productivity.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>STRATEGIC PARTNERS</h1>
        <p>
          We're especially pleased to have built strategic partnerships with
          forward thinking leaders in the business world.
        </p>
        <div className="partner">
          <img src="/images/smallworld.png" alt="logo" />
          <img src="/images/koompi.png" alt="logo" />
          <img src="/images/sabay.png" alt="logo" />
          <img src="/images/isi-group.png" alt="logo" />
          <img src="/images/doer.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Project;
