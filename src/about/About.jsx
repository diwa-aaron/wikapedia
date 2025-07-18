import './About.css';
import AboutGIF from '../assets/about.gif';
import nagkaonkana from '../assets/talking.png';
import AboutCicle from './AboutCircle';
import PrompImage from '../assets/PrompImage.png';
import Student from '../assets/Student.png';
import Researcher from '../assets/Researcher.png';
import Culture from '../assets/Culture.png';
import Background from '../assets/AboutBackgroundImg.png';
import Header from '../headbg/header.jsx'

function About() {
  return (
    <body>

    <Header/>
      <div className="FirstDiv">
        <div className="FirstdivTextdiv">
          <h1 className="FirstdivHeader">Know more about Wikapedia</h1>
          <p className="FirstdivParagraph">Wikapedia is a web-based platform that helps users explore and translate Tagalog and other Filipino dialects.</p>
        </div>
        <div className="FirstdivImagediv">
          <img className="FirstdivImage2" src={Background} alt="Background" />
          <img className="FirstdivImage" src={AboutGIF} alt="Chat GIF" />
        </div>
      </div>

      <div className="SecondDiv">
          <AboutCicle   
                    widthMin="100px"
                    widthMid="50vw"
                    widthMax="700px"
                    heightMin="100px"
                    heightMid="50vw"
                    heightMax="700px">
            <img className="SeconddivImage" src={nagkaonkana} alt="Picturepic" /></AboutCicle>
            <div className="SeconddivTextdiv">
          <p className="SeconddivdivParagraph">It aims to preserve the richness of our local languages by making them easier to learn, understand, and share.</p>
          </div>
      </div>

      <div className="ThirdDiv">
            <AboutCicle   
                    widthMin="150px"
                    widthMax="200px"
                    heightMin="150px"
                    heightMax="200px">
              <div className="NumberInsideCircle"><h1>5</h1></div>                
            </AboutCicle>
          <div className="ThirddivTextdiv">
            <p className="ThirddivParagraph1">Filipino Dialects</p>
            <p className="ThirddivParagraph2">These dialects: Tagalog, Cebuano, Ilokano, Waray, and Pangasinan, are among the most widely spoken in the Philippines.</p>
          </div>
      </div>

      <div className="FourthdDivWrapper">
      <div className="FourthdDiv">
        <div className="FourthdivTextdiv">
            <p className="FourthdivdivParagraph">It uses Natural Language Processing (NLP) technology to translate and analyze Filipino dialects. It combines language and AI to help users better understand the diversity of Philippine languages.</p>
          </div>
          <AboutCicle     
                    widthMin="100px"
                    widthMid="50vw"
                    widthMax="700px"
                    heightMin="100px"
                    heightMid="50vw"
                    heightMax="700px">           
            <img className="FourthdivImage" src={PrompImage} alt="Promp" /></AboutCicle>
      </div>
      </div>
      
      <div className='FifthDiv'>
        <p className="FifthdivHeader">Who We Aim to Help</p>
        <div className='FifthDivContainersDiv'>
            <div className='FifthDivContainers'>
          <AboutCicle     className="FifthDivContainers"
                    widthMin="150px"
                    widthMid="20vw"
                    widthMax="200px"
                    heightMin="150px"
                    heightMid="20vw"
                    heightMax="200px">           
            <img className="FifthdivImage" src={Student} alt="Student" /></AboutCicle>
            <p className='FifthdivdivParagraph1'>Students and Educators</p>
            <p className='FifthdivdivParagraph2'>For learning and teaching different Filipino dialects easily.</p>
        </div>
        <div className='FifthDivContainers'>
          <AboutCicle     className="FifthDivContainers"
                    widthMin="150px"
                    widthMid="20vw"
                    widthMax="200px"
                    heightMin="150px"
                    heightMid="20vw"
                    heightMax="200px">           
            <img className="FifthdivImage" src={Researcher} alt="Researcher" /></AboutCicle>
            <p className='FifthdivdivParagraph1'>Reaserchers & Linguists</p>
            <p className='FifthdivdivParagraph2'>For studying and exploring local dialects.</p>
        </div>
        <div className='FifthDivContainers'>
          <AboutCicle     className="FifthDivContainers"
                    widthMin="150px"
                    widthMid="20vw"
                    widthMax="200px"
                    heightMin="150px"
                    heightMid="20vw"
                    heightMax="200px">           
            <img className="FifthdivImage" src={Culture} alt="Culture" /></AboutCicle>
            <p className='FifthdivdivParagraph1'>Culture Advocates</p>
            <p className='FifthdivdivParagraph2'>For preserving and sharing our culture through language</p>
        </div>
        </div>
      </div>

      <div className="Sixthdiv">
        <p className='SixthdivP1'>“When we hide what’s native, we erase who we are.”</p>
        <p className='SixthdivP2'>-- Prof. Felipe De Leon Jr</p>
      </div>

      <footer className="Footer">
        <p className="FooterText">© 2025 | Adamson University</p>
      </footer>  
    </body>
    
  );
}

export default About;
