import './Per-dialect.css';
import Header from '../headbg/header.jsx';
import Pangasinan from "../assets/Pangasinan.png";

function PangasinanPage() {
  return (
    <>
      <Header />
      <div className="section">
        <div className="container">

          <div className="intro">
            <h1 className="title">Pangasinan: Pride of the West</h1>
            <p className="subtitle">
              A major language of Pangasinan province in Luzon, with a unique identity among Philippine languages.
            </p>
          </div>

          <div className="image-wrapper">
            <div className="ellipse" />
            <img className="image" alt="Pangasinan Dialect" src={Pangasinan} />
          </div>

          <div className="content">

            <h2 className="heading">Overview</h2>
            <p className="paragraph">
              Pangasinan is an Austronesian language spoken in the northwestern province of Pangasinan in Luzon. 
              It is distinctly different from Tagalog and Ilokano and belongs to the Northern Philippine branch of 
              the Malayo-Polynesian family. The language has an ancient literary tradition and is one of the country’s 
              major regional languages.
            </p>

            <h2 className="heading">Where It Is Spoken</h2>
            <ul className="list">
              <li>Pangasinan province</li>
              <li>Parts of La Union</li>
              <li>Tarlac</li>
              <li>Nueva Ecija</li>
              <li>Zambales</li>
            </ul>

            <h2 className="heading">Cultural Significance</h2>
            <p className="paragraph">
              The Pangasinan language is integral to the area's identity, history, and literature. It preserves traditional 
              myths, riddles, proverbs, and epic poetry (such as the “Tebag”). The language has also played a role in shaping 
              religious traditions and local governance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PangasinanPage;