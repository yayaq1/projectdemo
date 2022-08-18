import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import FeaturedInfo from "./components/featuredinfo/Featuredinfo";


function App() {
  return (
    <div>
     <Topbar />
    <div className="container">
     <Sidebar/>
     <FeaturedInfo/>
     
     </div>
    </div>
  );
}

export default App;




