import React, { useEffect, useState } from 'react'
import Treanding from './Treanding'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Search() {
  const { id }=useParams()
    const [data, setData] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const api = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`);
        setData(api.data.meals)
        console.log(api)
      } catch (error) {
        console.log(error)
      }
    };
    fetchdata();
  }, [id]);
  return (
    <>
<Navbar/>
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

<Treanding/>
    </>
  )
}
