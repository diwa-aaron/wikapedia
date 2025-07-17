import Header from '../headbg/header.jsx'
import './Home.css';
import bookImage from '../assets/book.png'

function Home() {
  return (
    <>
      {/*ADD HEADER*/}
      <Header/>

      {/*CURVED GRADIENT*/}
      <div class="curved-background"/>

      {/*BOOK IMAGE*/}
      <div>
          <img class="book-image" src={bookImage} alt="Book Illustration"/>
      </div>

      {/*MAIN CONTENT*/}
      <div class="content">
              <h1>Wikapedia</h1>
              <p>Wikapedia is a web-based translator designed to help users understand and convert Tagalog into various Filipino dialects and vice versa.</p>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF">
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
                </svg>
                Try Wikapedia
              </button>
      </div>
    </>
  );
}

export default Home;