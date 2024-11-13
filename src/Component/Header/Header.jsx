import React from 'react'
import ReactLogo from "../../assets/react.svg"

import NavItems from '../NavItems/NavItems'

const Header = (props) => {
  return (
    <div className='h-[50px] w-full py-[0.5rem] px-[1rem] border-b border-neutral-300 mb-[1rem] justify-between items-center flex'>
<div>
    <img src={ReactLogo} alt="" className='w-[30px] h-[30px]' />
</div>
<div>
 < NavItems navItems={props.navItems}/>
</div>




<div>
<button onClick={props.increaseCounter} className="py-1 px-3 bg-blue-500 text-white mr-1">INCREMENT</button>
<button onClick={props.decreaseCounter} className="className=py-1 px-3 bg-blue-500 text-white">DECREMENT</button>
<button onClick={props.resetCounter} className="bg-green-700 ml-2">RESET</button>
 
</div>
<div className='flex  items-center '>
    <img src={ReactLogo} alt="" className='w-[30px] h-[30px] mr-[10px]' />
    <p>{props.name}</p>
</div>
        
    </div>
  )
}

export default Header