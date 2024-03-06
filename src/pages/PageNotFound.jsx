import { Link } from "react-router-dom";
import PagNav from "../components/PagNav";

function PageNotFound() {
  return (
    <div>
      <PagNav />
      <h1>Page not found!</h1>
    </div>
  );
}

export default PageNotFound;
