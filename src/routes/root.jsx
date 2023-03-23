
import './App.css';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

export default function Root() { 
const params = useParams();


const isCategoryRoute = Boolean(params.id);

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer isCategoryRoute={isCategoryRoute} categoryId={params.id}/>
  
    </div>
  )
}


