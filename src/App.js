import logo from './logo.svg';
import './App.css';

function App() {

    return (
        <div className="App">
            <header className="head">
               
            </header>
            <body>
                <div className="SideBar">
                    <a href="/">
                        <img src="logoFF.png" className="mainLogo" alt="home" />
                    </a>
                    <div className="navigationOptions">
                        <div className="option">
                            <a href="">
                                <img src="linkedin.png" className="social" alt="linkedin" />
                            </a>
                        </div>
                        <div className="option">
                            <a href="">
                                <img src="GitHub-Mark-Light-64px.png" className="social" alt="github" />
                            </a>
                        </div>
                        <div className="option">
                            <a href="">
                                <img src="GitHub-Mark-Light-64px.png" className="social" alt="github" />
                            </a>
                        </div>
                    </div>
                    <div className="socialOptions">
                        <div className="option">
                            <a href="https://www.linkedin.com/in/dan-mihailescu-3a7123134/">
                                <img src="linkedin.png" className="social" alt="linkedin" />
                            </a>
                        </div>
                        <div className="option">
                            <a href="https://github.com/DanMihailescu?tab=repositories">
                                <img src="GitHub-Mark-Light-64px.png" className="social" alt="github" />
                            </a>
                        </div>
                        <div className="option">
                            <a href="">
                                <img src="GitHub-Mark-Light-64px.png" className="social" alt="github" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="sky-container">
                    <div class="star-rotate">
                        <div class="star">
                        </div>
                        <div class="star"></div>
                        <div class="star">
                        </div>
                        <div class="star"></div>
                        <div class="star">
                        </div>
                        <div class="star"></div>
                        <div class="star"></div>
                    </div>
                </div>

                <div class="projects">
                    <div class="option">
                        <embed src="http://carlingtire.com" />
                    </div>
                </div>

                <!--- Page footer containing basic information/links --->
                <footer class="foot">
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </footer>
            </body>
        </div>
    );
}
/** 
function sideBar() {
    return (
        <div className="SideBar">
            <div className="option">
                <a href="/">
                    <img src="logo.png" alt="home"/>
                </a>
            </div>
        </div>
    );
}*/

export default App;
