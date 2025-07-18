import './Main.css'
import Header from '../headbg/header.jsx'
import Dropdown from './Dropdown.jsx'
import TextArea from './TextArea.jsx'
import Switch from '../assets/switch.png'
import React, { useState } from 'react';

function Main() {
    const [text, setText] = useState('');
    const [srcLang, setSrcLang] = useState('tgl_Latn');
    const [tgtLang, setTgtLang] = useState('ceb_Latn');
    const [translated, setTranslated] = useState('');

    // Handle changes for the second dropdown
    const handleDropdown1Change = (event) => {
        const newSrcLang = event.target.value;
        if (newSrcLang === tgtLang) {
        // Swap the values if they would be the same
        setSrcLang(tgtLang);
        setTgtLang(srcLang);
        } else {
        setSrcLang(newSrcLang);
        }
        setText('');
        setTranslated('');
    };

    // Handle changes for the second dropdown
    const handleDropdown2Change = (event) => {
        const newTgtLang = event.target.value;
        if (newTgtLang === srcLang) {
        // Swap the values if they would be the same
        setTgtLang(srcLang);
        setSrcLang(tgtLang);
        } else {
        setTgtLang(newTgtLang);
        }
        setText('');
        setTranslated('');
    };

    // Handle Translation and Communication with API
    const handleTranslate = async () => {
        try {
        const res = await fetch('http://127.0.0.1:8000/translate/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
            text: text,
            src_lang: srcLang,
            tgt_lang: tgtLang,
            }),
        });

        const result = await res.text(); 
        setTranslated(result);
        } catch (err) {
        setTranslated('Error: ' + err.message);
        }
    };

    // Handle switch button click to swap dropdown values
    const handleSwitch = () => {
        setSrcLang(tgtLang);
        setTgtLang(srcLang);
        setText('');
        setTranslated('');
    };
    
    // Language code to name mapping
    const getLanguageName = (langCode) => {
    const languageMap = {
        'tgl_Latn': 'Tagalog',
        'ceb_Latn': 'Cebuano',
        'ilo_Latn': 'Ilokano',
        'war_Latn': 'Waray',
        'pag_Latn': 'Pangasinan',
    };
    
    return languageMap[langCode];
    };

    // Handle changes for the first textarea, clearing translated text if input is empty
    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        if (!newText) {
        setTranslated(''); // Clear translated text when input is empty
        }
    };

    return (
        <>
            <Header/>
            <div className='container'>
                <div class='filipino'>
                    <h2>Filipino Dialect Translator</h2>
                </div>

                <div className='dropdown'>
                    <Dropdown value={srcLang} onChange={handleDropdown1Change}/>
                    <button className='switch' onClick={handleSwitch}>
                        <img src={Switch} alt="switch"/>
                    </button>
                    <Dropdown value={tgtLang} onChange={handleDropdown2Change}/>
                </div>

                <div className='translate'>
                    <TextArea value={text} onChange={handleTextChange} label={getLanguageName(srcLang)}/>
                    <TextArea value={translated} onChange={() => {}} label={getLanguageName(tgtLang)} />
                    {/*<svg className="corner-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6673 9.33325V9.33325C18.6673 7.44763 18.6673 6.50482 18.0815 5.91904C18.0815 5.91904 18.0815 5.91904 18.0815 5.91904C17.4957 5.33325 16.5529 5.33325 14.6673 5.33325H9.33398C7.44837 5.33325 6.50556 5.33325 5.91977 5.91904C5.33398 6.50482 5.33398 7.44763 5.33398 9.33325V14.6666C5.33398 16.5522 5.33398 17.495 5.91977 18.0808C5.91977 18.0808 5.91977 18.0808 5.91977 18.0808C6.50556 18.6666 7.44837 18.6666 9.33398 18.6666V18.6666" stroke="#7581F8" strokeWidth="2"/>
                        <rect x="13.334" y="13.3333" width="13.3333" height="13.3333" rx="2" stroke="#7581F8" strokeWidth="2"/>
                    </svg>*/}
                </div>

                
                <div className='translate-button'>
                    <button className='translatebtn' onClick={handleTranslate}>Translate</button>
                </div>
            </div>
        </>
    );
}

export default Main;