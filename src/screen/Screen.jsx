import Dashboard from "../pages/Dashboard";
import Sidebar from "../pages/Sidebar";
import NavBar from "../component/NavBar";

const Screen = ({ users, isLoading, error }) => {
  return (
    <div>
      <NavBar />
      <div className=" dashboard flex ">
        <Sidebar />
        <Dashboard users={users} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};

export default Screen;
