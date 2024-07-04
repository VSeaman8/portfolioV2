const Projects = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col">
          <div className="card project-card" id="weather">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/402/original/tom-barrett-hgGplX3PFBg-unsplash.jpg?1692016809"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Whatever the Weather</h5>
              <hr />
              <p className="card-text">Check out my Weather App...</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card project-card">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/562/original/jack-finnigan-Mxqvo8hhY1s-unsplash.jpg?1695044618"
              alt="..."
            />
            <div className="card-body" id="london-travel">
              <h5 className="card-title">Travel Website</h5>
              <hr />
              <p className="card-text">
                A little website that is responsive and gives you a taste of
                London
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card project-card">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/091/127/original/clint-bustrillos-X-A-LJVAhzk-unsplash.jpg?1690276039"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" id="boardGames">
              <h5 className="card-title">Coming Soon</h5>
              <hr />
              <p className="card-text">The Lux Life of Board Games website</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="title-enhancement short" id="bootcamp">
        The bootcamp that started it all.....
      </h2>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col">
          <div className="card project-card">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/897/original/images.jpg?1692363432"
              className="card-img-top"
            />
            <div className="card-body" id="hyperion">
              <h5 className="card-title">Hyperion Portfolio</h5>
              <hr />
              <p className="card-text">
                My Exploration of Python with the Hyperion Bootcamp. Feel free
                to have a gander!
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card project-card">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/091/138/original/dice-1680805704965.jpg?1690278426"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Coming Soon</h5>
              <hr />
              <p className="card-text">
                I try and work out if I can create a using D&D adventure using
                python
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="title-enhancement short">Misc.</h2>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col">
          <div className="card project-card">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/898/original/pankaj-patel-bYiw48KLbmw-unsplash.jpg?1692363455"
              className="card-img-top"
            />
            <div className="card-body" id="tools">
              <h5 className="card-title">Tools of the Trade</h5>
              <hr />
              <p className="card-text">
                <ul>
                  <li>VS Code</li>
                  <li>GitHub</li>
                  <li>HTML & CSS</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>Python</li>
                  <li>React</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card project-card">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/093/899/original/joao-ferrao-4YzrcDNcRVg-unsplash.jpg?1692363632"
              alt="Photo by João Ferrão on Unsplash"
            />
            <div className="card-body" id="resume">
              <h5 className="card-title">Resume</h5>
              <hr />
              <p className="card-text">
                Click on me and find out about all the things I did before
                now...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
