import './Per-dialect.css';
import Header from '../headbg/header.jsx';
import Tagalog from "../assets/Tagalog.png";

function TagalogPage() {
  return (
    <>
      <Header />
      <div className="section">
        <div className="container">

          <div className="intro">
            <h1 className="title">Tagalog: Heart of the Capital</h1>
            <p className="subtitle">
              Widely spoken in Luzon and the foundation of the Filipino national language.
            </p>
          </div>

          <div className="image-wrapper">
            <div className="ellipse" />
            <img className="image" alt="Tagalog Dialect" src={Tagalog} />
          </div>

          <div className="content">

            <h2 className="heading">Overview</h2>
            <p className="paragraph">
              Tagalog is the basis for Filipino, the official national language understood and spoken by the
              majority of Filipinos nationwide, making it the most widely spoken language at home with over
              43 million native speakers according to the 2020 census. The geographic concentration and
              widespread use reflect Tagalog’s central role in Philippine language, culture, and governance.
            </p>

            <h2 className="heading">Where It Is Spoken</h2>
            <ul className="list">
              <li>Central and Southern Luzon, including Metro Manila</li>
              <li>Provinces like Batangas, Laguna, Cavite, Rizal, Bulacan, and Quezon</li>
              <li>Parts of Mindoro, Marinduque, and northern Palawan</li>
              <li>Widely used in urban places nationwide and by diaspora communities in the US, Canada, and the Middle East</li>
            </ul>

            <h2 className="heading">Cultural Significance</h2>
            <p className="paragraph">
              Tagalog is deeply embedded in the culture and identity of many Filipinos. It is the primary
              medium for popular music, film, and television, as well as traditional forms such as balagtasan
              (poetic debate), folk tales, and epic literature (e.g., “Florante at Laura”, “Ibong Adarna”).
              Many national heroes, like Dr. Jose Rizal, wrote in Tagalog. The language is central to religious
              practices, family life, and social rituals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TagalogPage;