import Filter from "../Filter/Filter";
import "./Listpage.scss";
import { listData, userData } from "../kib/dummydata";
import { singlePostData } from "../kib/dummydata";
import Map from "../Map/Map";
import Slider from "../Sliders/Slider";

function Listpage() {
  const data = listData;
  return (
    <div className="listpage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price} </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="tittle">General</p>
          <div className="listvertical">
           <div className="feature">
            <img src="/utility.png" alt="" />
            <div className="featuretext">
              <span>Utilities</span>
              <p>Render is responsible</p>
            </div>
           </div>
            <div className="feature">
            <img src="/size.png" alt="" />
            <div className="featuretext">
              <span>Property fees</span>
              <p>Must have the 3x the rent in household incomes</p>
            </div>
           </div>
            <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="featuretext">
              <span>Pet pollicy</span>
              <p>pet allowed</p>
            </div>
           </div>
          </div>
          <p className="tittle">Room Sizes</p>
          <div className="Size">
          <div className="Sizes">
           <img src="/size.png"/>
           <span>80sqft</span>
          </div>
           <div className="Sizes">
           <img src="/bed.png"/>
           <span>2 bedroom</span>
          </div>
           <div className="Sizes">
           <img src="/bath.png"/>
           <span>1 bathroom</span>
          </div>
          </div>
          <p className="tittle">Nearby places</p>
          <div className="listhorizontal">
          <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featuretext">
                <span>School</span>
                <p>250 away</p>
              </div>
          </div>
           <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featuretext">
                <span>Bus stop</span>
                <p>100 away</p>
              </div>
          </div>
           <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featuretext">
                <span>Restaurant</span>
                <p>200 away</p>
              </div>
          </div>
          </div>
          <p className="tittle">Location</p>
          <div className="mapcontainer">
            <Map items={[singlePostData]}/>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
              <button>
              <img src="/save.png" alt="" />
              Save a place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listpage;
