import React,{ useState}  from 'react'
import "./App.css";

export default function App() {
 const [first, setFirst] = useState('');

const handleClick=(e)=>{ 
  setFirst(first.concat(e.target.name))
}

const clear=()=>{ 
  setFirst('');
}

const backSpace=()=>{ 
  setFirst(first.slice(0,first.length -1));
}

const calculate=()=>{ 
try{ 
  setFirst( eval(first).toString());
}catch(err){ 
  setFirst('ERROR');
}

}

  return (<>
  <div className='Container'>
    <form>
<input type="text" value={first}></input>
    </form>
    <div className='keypad'>
<button  onClick={clear} className='highlight'  id="clear">clear</button>
<button onClick={backSpace} className="highlight" >C</button>
<button name="/" className='highlight' onClick={handleClick}>&divide;</button>
<button name="7" onClick={handleClick}>7</button>
<button name="8" onClick={handleClick}>8</button>
<button name="9" onClick={handleClick}>9</button>
<button name="*" className='highlight' onClick={handleClick}>&times;</button>
<button name="4" onClick={handleClick}>4</button>
<button name="5" onClick={handleClick}>5</button>
<button name="6" onClick={handleClick}>6</button>
<button name="-" className='highlight' onClick={handleClick}>-</button>
<button name="1" onClick={handleClick}>1</button>
<button name="2" onClick={handleClick}>2</button>
<button name="3" onClick={handleClick}>3</button>
<button name="+" className='highlight' onClick={handleClick}>+</button>
<button name="0" id="zee" onClick={handleClick}>0</button>
<button name="."  onClick={handleClick}>.</button>
<button name="=" className='highlight' onClick={calculate} id="result" >=</button>
</div>
</div>
</>
  )
}
