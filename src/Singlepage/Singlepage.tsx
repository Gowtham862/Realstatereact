import "./singlepage.scss"
import {listData} from "../../src/kib/dummydata"
import Filter from "../Filter/Filter"
import Card from "../Cards/Card"
import Map from "../Map/Map"
//  type Property ={
//     id: number;
//     title: string;
//     img: string;
//     bedroom: number;
//     bathroom: number;
//     price: number;
//     address: string;
//     latitude: number;
//     longitude: number;
// }

function Singlepage() {
    const data=listData;
    return (
        <div className="singlepage">
            <div className="right">
                <div className="wrapper">
                    <Filter/>
                    {data.map(item=>(
                       <Card key={item.id} item={item}/> 
                    ))}
                </div>
            </div>
            <div className="map">
                <Map items={data}/>
            </div>
        </div>
    )
}

export default Singlepage
