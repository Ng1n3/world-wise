import { Link } from "react-router-dom";
import PagNav from "../components/PagNav";
import AppNav from "../components/AppNav";

function HomePage() {
  return (
    <div>
      <PagNav />
      <AppNav/>
      <h1 className="test">WorldWise</h1>

      {/* <a href="/pricing">Pricing</a> */}
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default HomePage;
