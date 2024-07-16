import "./Projects.css";
import travel from "../../assets/images/travelinfowebsite.png";

const TravelWebsite = () => {
  return (
    <div className="projectContainer">
      <h1>Travel Info Website</h1>
      <p className="projectSummary">
        This was my last challenge within the Digital Futures academy and was
        the biggest Challenge yet. Building on everything I learnt throughout
        the academy (other than Java!) to create a Travel Info Website using
        third party APIs. As this was a time restricted challenge not every
        feature was included.
      </p>
      <div className="projectDetails">
        <div className="type">
          <strong className="projectDetailsText">Type</strong>
          <span className="spanText">Digital Futures Training Challenge</span>
        </div>
        <div className="stack">
          <strong className="projectDetailsText">Stack</strong>
          <ol>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Postman</li>
            <li>Chai</li>
            <li>Express</li>
          </ol>
        </div>
        <div className="code">
          <strong className="projectDetailsText">Code</strong>
          <div className="code">
            <a
              href="https://github.com/VSeaman8/DandDGenerator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github Repository</span>
            </a>
          </div>
        </div>
        <div className="live">
          <strong className="projectDetailsText">Live</strong>
          <div>
            <a
              href="https://celebrated-kataifi-d85eef.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Website </span>
            </a>
          </div>
        </div>
      </div>
      <div className="image-container">
        <a
          href="https://celebrated-kataifi-d85eef.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={travel} alt="website screenshot" />
        </a>
      </div>
      <div className="purposeContainer">
        <h3>Project Purpose and Goal</h3>
        <p>
          The purpose of this project is to develop a web-based travel
          information application for DFCorp, designed to provide users with
          valuable weather and location-based information. This application aims
          to enhance user experience by integrating a variety of features that
          can be useful for travellers. The primary goal is to display a 5-day
          weather forecast for any searchable location, with an additional
          functionality for users to save their favourite locations locally. The
          application will be responsive and adaptable to different devices,
          ensuring accessibility and usability across mobile, tablet, and
          desktop platforms. The benefits of this software include: - Providing
          up-to-date weather forecasts for travellers, helping them plan their
          trips effectively. - Allowing users to save their favourite locations
          for quick access to weather information. - Offering additional
          travel-related features, such as a map of the local area and a
          slideshow of local hotels, which can enhance the overall user
          experience and potentially increase user engagement with DFCorp's
          suite of applications.
        </p>
      </div>
      <div className="webStack">
        <h3>Web Stack and Explanation</h3>
        <p>
          For this project, the prescribed web stack was utilized to ensure
          consistency and focus on learning. I used React for its
          component-based architecture and performance benefits, alongside
          JavaScript to build interactive interfaces. The combination of HTML
          and CSS ensured a well-structured and responsive design. Express
          handled server-side operations and API requests, while Chai
          facilitated comprehensive testing. MongoDB was used for data
          management, ensuring persistence of user data such as saved favourite
          locations. This challenge provided valuable hands-on experience with
          these technologies, enhancing my skills in full-stack web development.
        </p>
      </div>
      <div className="problemProcess">
        <h3>Problems and Thought Process</h3>
        <p>
          Working on feedback from my tutor I split the challenge up into
          slices, with each slice or feature being fully functioning before
          moving onto the next feature. This also made it easier for me to write
          user stories to enable the creation of a versitle and robust website.
          This was also the **first time I was creating the backend to a website
          and and really wanted to get to grips with how the front and backend
          integrated with each other**. As I am still new to using APIs the
          biggest challenge came from them. The hotel API that I was supposed to
          be using was actually discontinued the morning after I had written the
          code. This led to alot of confusion my my part at first until after
          extensive testing with Postman and waiting on my tutor to confirm that
          I was indeed not mad and that it was discontinued. As this was a time
          oriented challenge I made the decision to keep the code in place ready
          for after the challenge when I had time to find a replacement API.
          Working on feedback from my tutor, I split the challenge into slices,
          with each slice or feature being fully functional before moving on to
          the next. This approach also made it easier to write user stories,
          enabling the creation of a versatile and robust website. This was the
          first time I created the backend of a website, and I wanted to
          understand how the front and backend integrated with each other. As I
          am still new to using APIs, they presented the biggest challenge. The
          hotel API that I was supposed to use was discontinued the morning
          after I had written the code. This led to a lot of confusion initially
          until, after extensive testing with Postman and confirmation from my
          tutor, I realized it was indeed discontinued. Due to the
          time-sensitive nature of the challenge, I decided to keep the existing
          code in place and plan to find a replacement API after the challenge.
        </p>
      </div>
      <div className="lessonLearnt">
        <h3>Lessons Learned</h3>
        <p>
          I am very proud of my first full stack website. However I am aware
          that there are several aspects to the website that needs to be worked
          on to improve the functionality of the user experience and a couple of
          bugs that have creeped into the website. Being able to apply the
          knowledge that I have learnt from the academy has shown me how far I
          have come in learning how to code. The biggest takeaway from the
          challenge has been that I need to put more effort into planning and
          preparation. From a practical sense of what I can do to improve the
          website now that I am not under timed conditions I have created a list
          to work through and is in my further work needed list below.{" "}
        </p>
      </div>
      <div className="furtherWork">
        <h3>Futher Work</h3>
        <p>
          Now that I have completed the Digital Futures Academy, I will work on
          the website at my leisure, making improvements.
          <ol>
            <li className="plainLi">
              <strong className="strongText">Update</strong>: When a user
              registers, a pop-up needs to appear confirming their
              registration—currently, no alert appears.
            </li>
            <li className="plainLi">
              <strong className="strongText">Update</strong>: When a user logs
              in, a pop-up needs to appear confirming they are logged
              in—currently, no alert appears.{" "}
            </li>
            <li className="plainLi">
              <strong className="strongText">Bug</strong>: Users are
              unexpectedly logged out after a period of time—investigate and
              research better ways of handling user sessions.
            </li>
            <li className="plainLi">
              <strong className="strongText">Update</strong>: Find a new API for
              the hotels and implement the corresponding code.
            </li>
          </ol>
          These changes will help improve the overall functionality and user
          experience of the website, and they will also serve as an opportunity
          for me to practice and refine my planning and development skills.
        </p>
      </div>
    </div>
  );
};

export default TravelWebsite;
