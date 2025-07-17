import './Main.css'

function TextArea({display, text}) {
    return(
        <>
            {/*CONTAINER FOR THE WHOLE TEXT AREA*/}
            <div className='area'>

                {/*WHAT LANGUAGE IS PICKED*/}
                <h4>Tagalog</h4>

                    {/*COPY BUTTON SVG*/}
                    <svg display={display} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6673 9.33325V9.33325C18.6673 7.44763 18.6673 6.50482 18.0815 5.91904C18.0815 5.91904 18.0815 5.91904 18.0815 5.91904C17.4957 5.33325 16.5529 5.33325 14.6673 5.33325H9.33398C7.44837 5.33325 6.50556 5.33325 5.91977 5.91904C5.33398 6.50482 5.33398 7.44763 5.33398 9.33325V14.6666C5.33398 16.5522 5.33398 17.495 5.91977 18.0808C5.91977 18.0808 5.91977 18.0808 5.91977 18.0808C6.50556 18.6666 7.44837 18.6666 9.33398 18.6666V18.6666" stroke="#FFFFFF" strokeWidth="2"/>
                        <rect x="13.334" y="13.3333" width="13.3333" height="13.3333" rx="2" stroke="#FFFFFF" strokeWidth="2"/>
                    </svg>
                
                {/*ACTUAL TEXT AREA*/}
                <textarea placeholder={text}/>
            </div>
        </>
    );
}
export default TextArea;