import "./HomePage.css";
import profilePic from "../assets/images/victoriaSeamanProfile.jpg";

const Homepage = () => {
  return (
    <div className="container">
      <header>
        <h3>JUNIOR SOFTWARE ENGINEER</h3>
        <h1>Victoria Seaman</h1>
        <button className="homepageBtn">Learn Even more</button>
      </header>
      <main>
        <section className="grid grid-2-columns">
          <div>
            <img
              className="bridge-img"
              src={profilePic}
              alt="Victoria Seaman"
            ></img>
          </div>
          <div>
            <h2>Who am I?</h2>
            <h3>London, the cosmopolitan city</h3>
            <p>
              After working in the library service for the last 15 years I
              decided it was time for a change. And what better change could
              there be but to move into technology and learn how websites and
              programs are created so that I too could create!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
