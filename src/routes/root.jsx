import "../styles/index.css";
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";
import Herohome from "../components/HeroHome/Herohome";

export default function Root() {
  const params = useParams();

  const isCategoryRoute = Boolean(params.id);

  return (
    <div className="App">
      {isCategoryRoute ? (
        <ItemListContainer
          isCategoryRoute={isCategoryRoute}
          categoryId={params.id}
        />
      ) : (
        <>
          <Herohome />
          <ItemListContainer />
        </>
      )}
    </div>
  );
}