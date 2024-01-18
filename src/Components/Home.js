import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css'
const Home = () => {
  return (
    <div>
       <h1>The Generics</h1>
       
       <section id="tours" class='container'>
        <h2>TOURS</h2>
        <div>
            <div class="tour-item">
                <span class="tour-date">JUL16</span>
                <span class="tour-place">DETROIT, MI</span>
                <span class="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                <button class="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">JUL19</span>
                <span class="tour-place">TORONTO,ON</span>
                <span class="tour-spec-place">BUDWEISER STAGE</span>
                <button class="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">JUL 22</span>
                <span class="tour-place"> BRISTOW, VA</span>
                <span class="tour-spec-place">JIGGY LUBE LIVE</span>
                <button class="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">JUL 29</span>
                <span class="tour-place">PHOENIX, AZ</span>
                <span class="tour-spec-place"> AK-CHIN PAVILION</span>
                <button class="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">AUG 2</span>
                <span class="tour-place">LAS VEGAS, NV</span>
                <span class="tour-spec-place">T-MOBILE ARENA</span>
                <button class="buy-btn">BUY TICKETS</button>
            </div>
            <div class="tour-item">
                <span class="tour-date">AUG 7</span>
                <span class="tour-place">CONCORD, CA</span>
                <span class="tour-spec-place"> CONCORD PAVILION</span>
                <button class="buy-btn">BUY TICKETS</button>
            </div>
        </div>
    </section>
    <footer>
        <div class="footer-title">
            The Generics
        </div>
        <div class="footer-icons">
            <ul>
                <li><a href="https://www.youtube.com">
                <i class="bi bi-youtube"></i>
                    {/* <img src="/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt=""/> */}
                </a></li>
                <li><a href="https://spotify.com">
                <i class="bi bi-spotify"></i>
                {/* <i class="bi bi-spotify" style=" font-size: 24px"></i> */}

                    {/* <img src="/img/Spotify Logo.png" alt=""/> */}
                </a></li>
                <li><a href="https://facebook.com">
                <i class="bi bi-facebook" width="32" height="32"></i>
                    {/* <img src="/img/Facebook Logo.png" alt=""/> */}
                </a></li>
            </ul>
        </div>
    </footer>
    </div>
  )
}

export default Home
