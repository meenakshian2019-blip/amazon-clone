import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
             className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.png"
             alt=""
            />

            <div className="home__row">
                <Product 
                id="12321341"
                title="The Lean Startup: How Today's Entreprenuers Use Continuous Innovation to Create Radically Successful Businesses" 
                price={289.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                rating={5} />
                <Product 
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={14999.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/510uEUwLn-L._SX569_.jpg"/>
            </div>

            <div className="home__row">
                <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={28499.00}
                rating={3}
                image="https://m.media-amazon.com/images/I/71csMSjrpyS._AC_SX679_.jpg"/>
                <Product 
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={6999.00}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
                <Product 
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={58999.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/41xL4L4cu4L._SX342_SY445_QL70_FMwebp_.jpg"/>
            </div>

            <div className="home__row">
                <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={150000.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/71FxNbFHhpL._SX679_.jpg"/>
            </div>
        </div>
    </div>
  );
}

export default Home;