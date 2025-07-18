import './Per-dialect.css';
import Header from '../headbg/header.jsx';
import Cebuano from "../assets/Cebuano.png";

function CebuanoPage() {
  return (
    <>
      <Header />
      <div className="section">
        <div className="container">

          <div className="intro">
            <h1 className="title">Cebuano: Voice of the South</h1>
            <p className="subtitle">
              Widely spoken in the Visayas and large parts of Mindanao.
            </p>
          </div>

          <div className="image-wrapper">
            <div className="ellipse" />
            <img className="image" alt="Cebuano Dialect" src={Cebuano} />
          </div>

          <div className="contents">

            <h2 className="heading">Overview</h2>
            <p className="paragraph">
              The Visayas and portions of Mindanao are home to many speakers of the Austronesian dialect called 
              Cebuano.  The use of the "ug" definite marker, unusual pronouns, and a varied vocabulary that has 
              developed via contacts with Spanish, Malay, and other Philippine languages are some of the specific 
              characteristics of Cebuano, which is known locally as Binisaya or Bisaya.  With more over 20 million 
              speakers, it includes regional dialects with significant phonological and vocabulary variety, such as 
              Boholano and Leyteño.
            </p>

            <h2 className="heading">Where It Is Spoken</h2>
            <ul className="list">
              <li>Cebu, Bohol, Siquijor</li>
              <li>Eastern Negros (Negros Oriental)</li>
              <li>Western and Southern Leyte (Leyteño dialect)</li>
              <li>Large areas of Mindanao, including Northern Mindanao and Caraga regions</li>
              <li>Parts of Palawan and Zamboanga Peninsula</li>
            </ul>

            <h2 className="heading">Cultural Significance</h2>
            <p className="paragraph">
              Cebuano is an important medium for regional literature, performing arts, oral traditions, and festivals 
              such as Sinulog. The use of Cebuano in education, especially in Mother Tongue-Based Multilingual 
              Education (MTB-MLE), enhances communication, classroom comfort, and learning outcomes among students.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CebuanoPage;