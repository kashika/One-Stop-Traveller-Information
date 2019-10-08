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
          reviews: 0,
        },
        searchData: [],
        search: 0,
        // sample : [{name:"one"},
        // {name:"two"},
        // {vals:"three"},
        // {vals:"four"}]

      };
      this.handleSearch = this.handleSearch.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

onSubmit(event){
  event.preventDefault();
  console.log("Prevent default on submit");

}

handleSearch(){
   this.setState({search : 1 });
  
  console.log("Search request submitted? ", this.state.search);
  console.log("Search request with stars: ", this.state.searchBy.stars);
  let star = this.state.searchBy.stars;
  // console.log("Finding using request: ", req);
  // console.log("Form data: ", this.state.searchBy.city);
  // console.log("Stars: ", this.state.searchBy.stars);
  // console.log("Reviews: ", this.state.searchBy.reviews);

  API.getfeatureinfo(star)
    .then((res) => {
                console.log("Requesting stars: " +star);
                if (res) {
                    // console.log(' Success call.')
                    this.setState({
                        isLoggedIn: true,
                        searchData: res
                    });
                    let data = res;
                    this.state.searchData = data;
                    console.log('starID: ', star);
                    console.log('ID: ', this.state.searchData._id);
                    console.log('Business Name: ', this.state.searchData.name);
                    console.log('City: ', this.state.searchData.city);
                    console.log('Stars: ', this.state.searchData.stars);
                    console.log('Reviews: ', this.state.searchData.review_count);
                    // console.log('State: ', this.state.searchData.state);
                    // this.props.history.push('/');
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
    var self = this;

      // if(this.state.search==1 && this.state.searchData.length>0){
      //   console.log("Search data: "+this.state.searchData);
      //   Object.keys(this.state.searchData).map(pd => {
      //     console.log("ObjectKeys search data:" + this.state.searchData[pd].state);
      //       }
      //   );
      // }


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
                                <div>
                                </div>
                                

                            </div>

                        </div>

                    </div>
                  </div>
                </div>

                    { this.state && this.state.search==1 && this.state.searchData!==undefined ?
                      <div className="col-12">
                    <table className="find_title text-center">
                            <thead>
                              <tr>
                                <th>Business Name</th>
                                <th>City</th>
                               {/* <th>Address</th>*/}
                                <th>Stars</th>
                                <th>Reviews</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>{this.state.searchData.name}</td>
                              <td>{this.state.searchData.city}</td>
                              {/*<td>{this.state.searchData.address}</td>*/}
                              <th>{this.state.searchData.stars}</th>
                              <th>{this.state.searchData.review_count}</th>
                            </tr>
                              {/*{nameslist}*/}
                              {/*{withfilter}*/}
                            </tbody>
                          </table>
                    </div> : <div className="find_title text-center">Please enter your search query!</div>
                  }
                    
        </div>
        </div>
        </div>
    );
}
}
export default Home;
