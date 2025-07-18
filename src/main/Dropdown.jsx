import './Main.css'
import React, { useState } from 'react';

function Dropdown({ onChange, value }) {
    return(
        <>
            <select name="currency-select" class="currency-select" value={value} onChange={onChange}>

                <button>
                    <selectedcontent></selectedcontent>
                    <span class="arrow"></span>
                </button>

                <option value="tgl_Latn" selected>
                    <div class="currency">
                        <div>Tagalog</div>
                    </div>
                </option>

                <option value="ceb_Latn">
                    <div class="currency">
                        <div>Cebuano</div>
                    </div>
                </option>

                <option value="ilo_Latn">
                    <div class="currency">
                        <div>Ilokano</div>
                    </div>
                </option>

                <option value="war_Latn">
                    <div class="currency">
                        <div>Waray</div>
                    </div>
                </option>

                <option value="pag_Latn">
                    <div class="currency">
                        <div>Pangasinan</div>
                    </div>
                </option>

            </select>
        </>
    );
}
export default Dropdown;