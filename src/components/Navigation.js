
var React = require('react');

function Navigation(){
return(
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="header_container d-flex flex-row align-items-center justify-content-start">

                    <div className="logo_container">
                        <div className="logo">
                            <div>One Stop Traveller</div>
                            <div>Travel Helper</div>
                            <div className="logo_image"><img src="../images/logo.png" alt="" /></div>
                        </div>
                    </div>


                    <nav className="main_nav ml-auto">
                        <ul className="main_nav_list">
                            <li className="main_nav_item active"><a href="/">Home</a></li>
                            <li className="main_nav_item"><a href="about.html">About us</a></li>
                            <li className="main_nav_item"><a href="offers.html">Offers</a></li>
                            <li className="main_nav_item"><a href="news.html">News</a></li>
                            <li className="main_nav_item"><a href="contact.html">Contact</a></li>
                            <li className="main_nav_item"><a href="Login">Login</a></li>
                        </ul>
                    </nav>


                    <div className="search">
                        <form action="#" className="search_form">
                            <input type="search" name="search_input" className="search_input ctrl_class"
                                   required="required" placeholder="Keyword" />
                                <button type="submit" className="search_button ml-auto ctrl_class">
                                    <img src="../images/search.png" alt="" />
                                </button>

                        </form>
                    </div>


                    <div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true"></i></div>

                </div>
            </div>
        </div>
    </div>


)}

module.exports = Navigation;