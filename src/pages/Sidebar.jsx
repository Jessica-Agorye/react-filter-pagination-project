const Sidebar = () => {
  return (
    <div className="w-[20%] flex flex-col gap-2">
      <h3>Sidebar Details</h3>
      <div className="sidebar-links ">
        <ul className="flex flex-col gap-2">
          <li>Transactions</li>
          <li>Products</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
