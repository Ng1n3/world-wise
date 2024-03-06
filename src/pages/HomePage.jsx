import { Link } from "react-router-dom";
import PagNav from "../components/PagNav";

function HomePage() {
  return (
    <div>
      <PagNav/>
      <h1>WorldWise</h1>

      {/* <a href="/pricing">Pricing</a> */}
      <Link to='/pricing'>Pricing</Link>
    </div>
  );
}

export default HomePage;
