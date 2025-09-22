
import './list.scss'
import { listData } from '../kib/dummydata'
import Card from '../Cards/Card'

function list() {
    return (
      <div className="list">
      {listData.map(item=>(
      <Card key={item.id} item={item}/>
      )
    ) 
      }
      </div>
    )
}

export default list
