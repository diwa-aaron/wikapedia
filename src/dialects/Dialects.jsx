import './Dialects.css'
import Header from '../headbg/header.jsx'
import tagalog_dialect from "../assets/tagalog_dialect.jpg"
import cebuano_dialect from "../assets/cebuano_dialect.jpg"
import waray_dialect from "../assets/waray_dialect.jpg"
import pangasinan_dialect from "../assets/pangasinan_dialect.png"
import ilocano_dialect from "../assets/ilocano_dialect.jpg"
import wikapedia_header from "../assets/wikapedia_header.png"
import { useNavigate } from 'react-router-dom';

function Dialects() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="dialects">
                <div className="rec_container">
                    <div className="upper" />
                    <div className="dialect_title">
                        Discover <br />
                        Philippine Dialects
                    </div>
                    <p className="description">
                        Learn more about the many Filipino dialects—where they’re spoken, and the culture behind each one.
                    </p>
                    <div className="container-image">
                      <img src={wikapedia_header} alt="Decorative Dialect" />
                    </div>
                </div>

                <div className="cards-container">
                    <div className="card">
                        <img className="img" src={tagalog_dialect} alt="Tagalog" />
                        <div className="card-title">Tagalog</div>
                        <p className="card-desc">
                            Tagalog is widely spoken in Luzon and serves as the foundation of
                            the Filipino national language. It is used in everyday conversation,
                            media, and education across the country.
                        </p>
                        <div className="button" onClick={() => navigate("/Tagalog")}>
                            <div className="button_text">Learn More</div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="img" src={cebuano_dialect} alt="Cebuano" />
                        <div className="card-title">Cebuano</div>
                        <p className="card-desc">
                            Cebuano is one of the most commonly spoken dialects in the Visayas 
                            and Mindanao. It has a strong presence in local culture, songs, and
                            storytelling.
                        </p>
                        <div className="button" onClick={() => navigate("/Cebuano")}>
                            <div className="button_text">Learn More</div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="img" src={ilocano_dialect} alt="Ilokano" />
                        <div className="card-title">Ilokano</div>
                        <p className="card-desc">
                            Ilokano is native to Northern Luzon and is known for its deep
                            literary and oral traditions. It reflects the values and lifestyle
                            of Ilocano communities.
                        </p>
                        <div className="button" onClick={() => navigate("/Ilokano")}>
                            <div className="button_text">Learn More</div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="img" src={waray_dialect} alt="Waray" />
                        <div className="card-title">Waray</div>
                        <p className="card-desc">
                            Waray is spoken in Eastern Visayas, especially in Samar and Leyte.
                            It is lively and expressive, often heard during local festivals like
                            Pintados-Kasadyaan.
                        </p>
                        <div className="button" onClick={() => navigate("/Waray")}>
                            <div className="button_text">Learn More</div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="img" src={pangasinan_dialect} alt="Pangasinan" />
                        <div className="card-title">Pangasinan</div>
                        <p className="card-desc">
                            Pangasinan is used in the province of the same name and surrounding
                            areas. It carries the rich history and traditions of coastal and
                            agricultural life.
                        </p>
                        <div className="button" onClick={() => navigate("/Pangasinan")}>
                            <div className="button_text">Learn More</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialects;