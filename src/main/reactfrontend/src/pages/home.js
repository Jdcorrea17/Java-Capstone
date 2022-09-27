import React from 'react';
import {render} from "react-dom";

function Home(){
    render(
        <body>
        <link rel="stylesheet" href="./css/homes.css" type="text/css"></link>
    <div className="logo">
        <h1>HomeFinder</h1>
        <img src="images/home-icon.png" alt="Image not found" className="img-logo"></img>
    </div>
            <br></br>
        <div className="form-home">
            <h2>Add New Houses</h2>
            <form>
                <div className="input-home">
                    <input placeholder="Address"></input>
                </div>
                <div className="input-home">
                    <input placeholder="Bedrooms"></input>
                </div>
                <div className="input-home">
                    <input placeholder="Bathrooms"></input>
                </div>
                <div className="input-home">
                    <input placeholder="SquareFt"></input>
                </div>
                <div className="input-home">
                    <input placeholder="Price"></input>
                </div>
                <div className="input-home">
                    <input placeholder="Availability"></input>
                </div>
                <div className="form-button">
                    <button type="submit">Add To Page</button>
                </div>
            </form>
        </div>
        <br></br>

            <div className="available-home">
                <h2>Available</h2>
                <div className="house1">
                    <img src="images/house1.jpeg" alt="Image Not Found" className="house1-img"></img>
                        <p>Price: $350,000</p>

                        <div>
                            <img src="images/bedroom%20icon.png" alt="Image Not Found" className="icon"></img>
                                <p className="house1-text">Bedrooms: 3</p>
                        </div>
                        <div>
                            <img src="images/bathroom%20icon.png" alt="Image Not Found" className="icon"></img>
                                <p className="house1-text">Bathrooms: 3</p>
                        </div>
                </div>
            </div>
            <br></br>

                <h2>Sold</h2>
                <div>

                </div>
            <br></br>


                    <div className="cal-input">
                        <h2>Mortgage Calculator</h2>
                        <form>
                            <div>
                                <label>Home Value:</label>
                                <input placeholder="Principle"></input>
                            </div>
                            <div>
                                <label>Interest Rate:</label>
                                <input placeholder="Interest"></input>
                            </div>

                            <div>
                                <label>Loan Term:</label>
                                <input placeholder="Mortgage"></input>
                            </div>

                            <div className="cal-button">
                                <button type="button">Calculate</button>
                            </div>
                        </form>
                    </div>
        </body>
    );
};

export default Home;
