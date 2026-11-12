import Customers from "./Customers";

const Dashboard = ({ users, isLoading, error }) => {
  return (
    <div className="  w-[80%]  bg-lime-50 ">
      <Customers users={users} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Dashboard;
