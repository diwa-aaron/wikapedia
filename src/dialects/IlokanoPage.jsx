import './Per-dialect.css';
import Header from '../headbg/header.jsx';
import Ilokano from "../assets/Ilokano.png";

function IlokanoPage() {
  return (
    <>
      <Header />
      <div className="section">
        <div className="container">

          <div className="intro">
            <h1 className="title">Ilokano: Words of the North</h1>
            <p className="subtitle">
              The major language of Northern Luzon and the third most widely spoken language in the Philippines.
            </p>
          </div>

          <div className="image-wrapper">
            <div className="ellipse" />
            <img className="image" alt="Ilokano Dialect" src={Ilokano} />
          </div>

          <div className="content">

            <h2 className="heading">Overview</h2>
            <p className="paragraph">
              Ilokano (Ilocano, Iluko, Iloko) is the primary language of northern Luzon and the third most spoken 
              language in the Philippines. It is known for its expressive vocabulary, complex grammar, and rich oral traditions.
            </p>

            <h2 className="heading">Where It Is Spoken</h2>
            <ul className="list">
              <li>Ilocos Norte, Ilocos Sur, La Union</li>
              <li>Abra, parts of Pangasinan, Tarlac, Nueva Vizcaya</li>
              <li>Cagayan Valley, Cordillera, and large communities in Metro Manila, Mindanao, and overseas</li>
            </ul>

            <h2 className="heading">Cultural Significance</h2>
            <p className="paragraph">
              The Ilokano language is the vessel for Ilocano history, traditions, and identity. It is used in oral literature, 
              traditional crafts (like inabel weaving), and culinary heritage (e.g., pinakbet, bagnet). Ilokanos value family, 
              communal unity, and the preservation of their heritage through festivals, food, and traditional arts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IlokanoPage;