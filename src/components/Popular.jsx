import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


export default function Popular() {
    const [data, setData] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const api = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s");
        setData(api.data.meals)
      } catch (error) {
        console.log(error)
      }
    };
    fetchdata();
  }, []);
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return <div style={{
    height:"50vh",
    width:"90%",
    margin:"auto"
  }}>
  
  <div className="slider-container" >
      <Slider {...settings}>
        {
          data.map((meals)=>{
            return(
          <Link to={`${meals.idMeal}`}>
        <img key={meals.idMeal} src={meals.strMealThumb} style={{height:"300px"}} />
    </Link>
        )
    })
  }
      </Slider>
    </div>
  

  </div>;
}
