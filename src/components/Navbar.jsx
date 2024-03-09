import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar() {
  const navigation=useNavigate()
  const [input, setinput] = useState("")

   const handler=()=>{
     navigation(`/search/${input}`)
   }
  const onchange=(e)=>{
    e.preventDefault()
setinput(e.target.value)
  }
console.log(input)
  return (
    <>
    <div className="nav">
        <div className="left">
            <Link to='/' style={{textDecoration:'none',color:'white'}}><h1>Recipe</h1></Link>
        </div>
        <form onSubmit={handler} className="search">
            <input type="text" onChange={onchange} />
        </form >
        <div className="right">
          <Link  to='category/indian'><div className='link'>Pakistan</div></Link>
          <Link  to='category/chinese'><div className='link'>Chinese</div></Link>
          <Link  to='category/american'><div className='link'>American</div></Link>
          <Link  to='category/britis'><div className='link'>Britisher</div></Link>
          <Link  to='category/thai'><div className='link'>Thai</div></Link>
        </div>
    </div>
    </>
  )
}
