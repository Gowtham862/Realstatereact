import { useState } from "react";
import "./Search.scss";
const types = ["buy","rent"];
function Search() {
    const [querys,setquerys]=useState({
        type:"buy",
        location:"",
        minprice:0,
        maxprice:0,
    });
    const switchtype=(val)=>{
        setquerys((prev)=>({...prev,type:val}))

    }
  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type)=>{
           return <button key={type} className={querys.type===type?"active":""} onClick={()=>switchtype(type)}>{type}</button>
        })}
        </div>
        <form>
          <input type="text" name="location" placeholder="city" />
          <input
            type="number"
            name="minprice"
            min={0}
            max={10000}
            placeholder="min price"
          />
          <input
            type="number"
            name="maxprice"
            min={0}
            max={100000}
            placeholder="Max price"
          />
          <button>
            <img src="/search.png" alt="" />
          </button>
        </form>
      
    </div>
  );
}

export default Search;
