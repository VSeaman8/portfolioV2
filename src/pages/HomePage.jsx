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
            {/*<h3>London, the cosmopolitan city</h3>*/}
            <p>
              After working in the library service for the last 15 years I
              decided it was time for a change. And what better change could
              there be but to move into technology and learn how websites and
              programs are created so that I too could create!
            </p>
          </div>
        </section>
      </main>
      <div class="d-flex flex-column align-items-center" id="social-media">
        <h2 class="title-enhancement short">Social Media:</h2>
        <div class="d-flex justify-content-center w-50">
          <button class="btn" id="github-button">
            <svg
              width="40"
              height="40"
              fill="#0092E4"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
            </svg>
          </button>
          <button class="btn" id="linkedin-button">
            <svg
              width="40"
              height="40"
              fill="#0092E4"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
