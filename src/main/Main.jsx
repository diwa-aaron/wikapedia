import './Main.css'
import Header from '../headbg/header.jsx'
import Background from '../headbg/Background.jsx'
import Dropdown from './Dropdown.jsx'
import TextArea from './TextArea.jsx'
import Switch from '../assets/switch.png'



function Main() {
    return (
        <>
            {/*ADD HEADER*/}
            <Header/>

            {/*ADD BACKGROUND*/}
            <Background/>

            {/*DIV FOR THE WHOLE PAGE*/}
            <div className='container'>

                {/*DIV FOR THE TITLE*/}
                <div class='filipino'>
                    <h2>Filipino Dialect Translator</h2>
                </div>

                {/*DIV FOR THE DROPDOWN AND BUTTON*/}
                <div className='dropdown'>
                    <Dropdown/>
                    <button className='switch'>
                        <img src={Switch} alt="switch"/>
                    </button>
                    <Dropdown/>
                </div>

                {/*DIV FOR THE TEXT AREAS*/}
                <div className='translate'>
                    <TextArea
                        display="none"
                        text="Input text here"/>
                        
                    <TextArea
                        display="block"
                        text="Translated result will show here"/>
                </div>

                {/*DIV FOR THE TRANSLATE BUTTON*/}
                <div className='translate-button'>
                    <button className='translatebtn'>Translate</button>
                </div>
            </div>
        </>
    );
}

export default Main;