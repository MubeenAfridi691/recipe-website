import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Category() {
    const { id }=useParams()
    const [data, setData] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const api = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`);
        setData(api.data.meals)
        console.log(api)
      } catch (error) {
        console.log(error)
      }
    };
    fetchdata();
  }, [id]);
  return (
    <div className='container'>
        <div className="row">
            {data.map((p, index) => (
                <div className="col-lg-4" key={index}>
                    <div>
                        <img className='rounded mx-3' src={p.strMealThumb} style={{ width: '300px' }} alt={p.strMeal} />
                        <div>
                            <h5 className="card-title fw-3">{p.strMeal}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

