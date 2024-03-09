import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Treanding from './Treanding'



export default function Recipedetails() {
    const [sdata, setData] = useState([])
    const [active, setactive] = useState(false)
    const {id}=useParams()
    useEffect(() => {
      const fetchdata = async () => {
        try {
          const api = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
          setData(api.data.meals[0])
          console.log(sdata)
        } catch (error) {
          console.log(error)
        }
      };
      fetchdata();
    }, [id]);

    return (

    <div>
        <Navbar/>
        <div className='details'>
            <div className="img">
            <img src={sdata.strMealThumb} alt="" style={{height:'300px'}}/>
            </div>
            <div className="description">
                
                <div className="titles">
                {
  active ? (
    <>
      <h1>FOOD: {sdata.strArea}</h1>
      <h1>INGREDIENTS</h1>
      <p>1): {sdata.strIngredient1}</p>
      <p>2): {sdata.strIngredient2}</p>
      <p>3): {sdata.strIngredient3}</p>
      <p>4): {sdata.strIngredient4}</p>
    </>
  ) : (
    ""
  )
}
                    <button onClick={(prev)=>{
                      setactive(prev => !prev)
                    }}  className='btn btn-outline-warning w-5' >ingreidents</button>
                    
                    

                </div>
            </div>
        </div>
<Treanding/>
    </div>
    
  )
}
