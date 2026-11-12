import { useSearchParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router";

const Customers = ({ users, isLoading, error }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const search = searchParams.get("search") || "";
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      {isLoading && <p>Page is Loading ....</p>}

      <div className="flex flex-col gap-4">
        <p>Search:{search}</p>

        <input
          className="w-80 h-10 border-2 rounded-md "
          type="text"
          value={search}
          onChange={(e) => {
            setCurrentPage(1);
            setSearchParams({ search: e.target.value });
          }}
        />
      </div>

      <div className="customer-list flex flex-col gap-4">
        {paginatedUsers.map((user) => (
          <div key={user.id} className="customer-card">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <Link to={`/customers/${user.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination flex gap-4 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {!isLoading && !error && filteredUsers.length === 0 && (
        <p>No customers found</p>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Customers;
