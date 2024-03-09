import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


export default function Treanding() {
    const [data, setData] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const api = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
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
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return <div style={{
    margin:"auto",
    width:'99%'
  }}>
  
  <div className="slider-container" >
      <Slider {...settings}>
        {
    data.map((meals)=>{
        return(
          <Link key={meals.id} to={meals.idMeal}>
        <img key={meals.idMeal} src={meals.strMealThumb} style={{width:"150px"}}  />
          </Link>
        )
    })
  }
      </Slider>
    </div>
  

  </div>;
}
