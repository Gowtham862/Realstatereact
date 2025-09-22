import './Filter.scss'
function Filter() {
    return (
        <div className='filter'>
           <h4>Search results for <b>India</b></h4>
           <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input type="text" id="city" name="city" placeholder='city loaction' />
            </div>
           </div>
           <div className="bottom">
              <div className="item">
                <label htmlFor="type">Type</label>
               <select name="type" id="type">
                  <option value="buy">Any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
               </select>
            </div>
              <div className="item">
                <label htmlFor="property">property</label>
                  <select name="property" id="property">
                     <option value="apartment">Any</option>
                    <option value="apartment">Apartment</option>
                     <option value="House">House</option>
                      <option value="apartment">Apartment</option>
                       <option value="Land">Land</option>
                  </select>
            </div> 
              <div className="item">
                <label htmlFor="minprice">Min price</label>
                <input type="number" id="minprice" name="minprice" placeholder='any' />
            </div>
              <div className="item">
                <label htmlFor="maxprice">Location</label>
                <input type="number" id="maxprice" name="maxprice" placeholder='any' />
            </div>
             <div className="item">
                <label htmlFor="bedroom">Location</label>
                <input type="text" id="bedroom" name="bedroom" placeholder='any' />
            </div>
            <button>
                <img src="./search.png" alt="" />
            </button>
            
                 
           </div>
        </div>
    )
}

export default Filter
