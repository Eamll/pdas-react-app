import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./assets/alexa.png";
import CortanaImage from "./assets/cortana.png";
import SiriImage from "./assets/siri.png";
function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="In nisi qui ex consequat amet minim veniam laboris irure."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Ana"
                handle="@ana99"
                image={CortanaImage}
                description="In nisi qui ex consequat amet minim veniam laboris irure."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Juan"
                handle="@juan99"
                image={SiriImage}
                description="In nisi qui ex consequat amet minim veniam laboris irure."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
