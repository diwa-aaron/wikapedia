import './Main.css'

function Dropdown() {
    return(
        <>
            {/*DROPDOWN*/}
            <select name="language-select" class="language-select">

                {/*SELECTED CONTENT OR WHAT IS PICKED*/}
                <button>
                    <selectedcontent></selectedcontent>
                    <span class="arrow"></span>
                </button>

                {/*TAGALOG OPTION*/}
                <option value="tagalog" selected>
                    <div>Tagalog</div>
                </option>

                {/*CEBUANO OPTION*/}
                <option value="cebuano">
                        <div>Cebuano</div>
                </option>

                {/*ILOKANO OPTION*/}
                <option value="ilokano">
                        <div>Ilokano</div>
                </option>

                {/*WARAY OPTION*/}
                <option value="waray">
                        <div>Waray</div>
                </option>

                {/*PANGASINAN OPTION*/}
                <option value="pangasinan">
                        <div>Pangasinan</div>
                </option>

            </select>
        </>
    );
}
export default Dropdown;