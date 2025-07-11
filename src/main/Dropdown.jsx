import './Main.css'

function Dropdown() {
    return(
        <>
            <select name="currency-select" class="currency-select">

                <button>
                    <selectedcontent></selectedcontent>
                    <span class="arrow"></span>
                </button>

                <option value="tagalog" selected>
                    <div class="currency">
                        <div>Tagalog</div>
                    </div>
                </option>

                <option value="cebuano">
                    <div class="currency">
                        <div>Cebuano</div>
                    </div>
                </option>

                <option value="ilokano">
                    <div class="currency">
                        <div>Ilokano</div>
                    </div>
                </option>

                <option value="waray">
                    <div class="currency">
                        <div>Waray</div>
                    </div>
                </option>

                <option value="pangasinan">
                    <div class="currency">
                        <div>Pangasinan</div>
                    </div>
                </option>

            </select>
        </>
    );
}
export default Dropdown;