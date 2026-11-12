import { useParams } from "react-router";
import { useEffect, useState } from "react";

const CustomerDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setNotFound(false);
      setUser(null);
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );

        if (!response.ok) {
          throw new Error("Response not okay ");
        }
        const data = await response.json();

        if (!data?.id) {
          setNotFound(true);
          return;
        }
        setUser(data);
      } catch (e) {
        console.log(e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {notFound && <p>Customer not found</p>}
      {user && (
        <div>
          <p> CustomerDetails</p>
          <p>Customer ID: {user.id}</p>
          <p>{user.name}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
