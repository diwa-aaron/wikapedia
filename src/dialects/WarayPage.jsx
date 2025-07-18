import './Per-dialect.css';
import Header from '../headbg/header.jsx';
import Waray from "../assets/Waray.png";

function WarayPage() {
  return (
    <>
      <Header />
      <div className="section">
        <div className="container">

          <div className="intro">
            <h1 className="title">Waray: Eastern Words with Power</h1>
            <p className="subtitle">
              The major language of Northern Luzon and the third most widely spoken language in the Philippines.
            </p>
          </div>

          <div className="image-wrapper">
            <div className="ellipse" />
            <img className="image" alt="Waray Dialect" src={Waray} />
          </div>

          <div className="contents">

            <h2 className="heading">Overview</h2>
            <p className="paragraph">
              Waray, or Waray-Waray, is an Austronesian language of the Visayan subgroup, spoken by the Waray people.
               The language draws its name from its iconic use for the word "none" or "nothing" ("waray"). It is the main
                language of the Eastern Visayas.
            </p>

            <h2 className="heading">Where It Is Spoken</h2>
            <ul className="list">
              <li>Samar (Northern, Eastern, Western)</li>
              <li>Leyte (northern and eastern parts)</li>
              <li>Biliran</li>
              <li>Parts of Eastern and Northern Mindanao</li>
            </ul>

            <h2 className="heading">Cultural Significance</h2>
            <p className="paragraph">
              Waray is the heart of Eastern Visayas culture—found in its rich folk literature, songs, and oral poetry (siday). 
              Waray traditional practices and resilience are evident in festivities like the Pintados-Kasadyaan Festival, 
              centered on pre-Hispanic traditions and Catholic beliefs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WarayPage;