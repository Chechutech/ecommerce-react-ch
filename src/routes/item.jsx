
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import NavBar from '../components/NavBar';


export default function ItemRoot() { 
  const params = useParams();



  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer itemId={params.id}/>
  
    </div>
  )
}