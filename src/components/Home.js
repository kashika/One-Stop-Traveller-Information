import * as API from '../api/api';

let React = require('react');
var Carousel = require('react-bootstrap').Carousel;
let imgStyle = {width: '100%', height: '700px'};
let footerText = {color: '#5DADE2'}

var style1="background-image:url(../images/home.jpg)"
var img1 = require('../images/home.jpg');
var img2 = require('../images/popular_2.jpg');



class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        searchBy: {
          city: "",
          stars: 0,
          reviews: 0
        }
      };
      this.handleSearch = this.handleSearch.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

onSubmit(event){
  event.preventDefault();
  console.log("Prevent default on submit");
}

handleSearch(){

  // console.log("Finding using request: ", req);
  // console.log("Form data: ", this.state.searchBy.city);
  // console.log("Stars: ", this.state.searchBy.stars);
  // console.log("Reviews: ", this.state.searchBy.reviews);

  API.getfeatureinfo()
    .then((res) => {
                console.log("Request: " +[res]);
                if (res) {
                    // console.log(' Success call.')
                    this.setState({
                        isLoggedIn: true,
                        sensordata: res
                    });
                    let data = res;
                    // console.log('ID: ', this.state.sensordata.sensorID)
                    console.log('Data from server : ', data)
                    this.props.history.push('/');
                } else if (res.status === '401') {
                    console.log("No records");
                    this.setState({
                        isLoggedIn: true,
                        message: "No record found.",
                    });
                } else if (res.status === '402') {
                    this.setState({
                        isLoggedIn: false,
                        message: "Session Expired!",
                    });
                    this.props.history.push('/');
                }
            });




}

componentDidMount(){
  console.log("Mounted from class!");
}

  render() {
// function Home() {
    return (
        <div>
        <div className="home">
            <div className="home_background"></div>
            <div className="home_content">
                {/*<div className="home_content_inner">*/}
                {/*    <div className="home_text_large">Discover</div>*/}
                {/*    <div className="home_text_small">Discover new worlds</div>*/}
                {/*</div>*/}

            {/*-- Find Form --*/}

            <div className="find">

                <div className="find_background parallax-window" data-parallax="scroll" data-image-src="../images/find.jpg" data-speed="0.8"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="find_title text-center">Find the Adventure of a lifetime</div>
                        </div>
                        <div className="col-12">
                            <div className="find_form_container">
                                <form action="#" id="find_form" className="find_form d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-between justify-content-start flex-wrap" onSubmit={this.onSubmit}>
                                    <div className="find_item">
                                        <div>Destination city:</div>
                                        <input type="text" className="destination find_input"  placeholder="Enter city" onChange={event => {
                                                  this.setState({
                                                    searchBy: {
                                                      ...this.state.searchBy,
                                                    city: event.target.value
                                                  }
                                                  });
                                                }} />
                                    </div>
                                    <div className="find_item">
                                        <div>Ratings:</div>
                                        <select name="ratings" id="ratings" className="dropdown_item_select find_input" onChange={event => {
                                                  this.setState({
                                                    searchBy: {
                                                      ...this.state.searchBy,
                                                    stars: event.target.value
                                                  }
                                                  });
                                                }}>
                                            <option>Select stars</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <div className="find_item">
                                        <div>Min reviews</div>
                                        <select name="min_reviews" id="min_reviews" className="dropdown_item_select find_input" onChange={event => {
                                                  this.setState({
                                                    searchBy: {
                                                      ...this.state.searchBy,
                                                    reviews: event.target.value
                                                  }
                                                  });
                                                }}>
                                            <option>&nbsp;</option>
                                            <option value="0">0</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                        </select>
                                    </div>
                                    <div className="find_item">
                                      { /* <div>Max price</div>
                                        <select name="max_price" id="max_price" className="dropdown_item_select find_input">
                                            <option>&nbsp;</option>
                                            <option>Price</option>
                                            <option>Price</option>
                                        </select>*/}
                                    </div>
                                    <button className="button find_button" type="button" onClick={this.handleSearch}>Find</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div>
        </div>
    );
}
}
export default Home;
