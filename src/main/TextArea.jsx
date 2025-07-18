import './Main.css'

function TextArea({ value, onChange, label }) {
    return(
        <>
            <div className='area'>
                <h3>{label}</h3>
                <textarea value={value} onChange={onChange}></textarea>
            </div>
        </>
    );
}
export default TextArea;