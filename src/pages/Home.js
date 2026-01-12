import "./Home.css";
import securityImg from "../assets/images/security.png";

function Home() {
  return (
    <div className="center-container">
      
      {/* TEXT ABOVE IMAGE */}
      <h1 className="title">Cyber Security Project</h1>
      <p className="subtitle">
        Protecting Data • Preventing Cyber Attacks
      </p>

      {/* IMAGE */}
      <img
        src={securityImg}
        alt="Cyber Security"
        className="center-image"
      />

    </div>
  );
}

export default Home;
