import React from "react";
import "./App.css";
import { User, getUsers } from "./data";
import { paginate } from "./utils/paginate";

function App() {
  const [paginatedData, setPaginatedData] = React.useState<Array<User[]>>([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  const handleGetUsers = async () => {
    const data = await getUsers();
    setPaginatedData(paginate(data, 4));
  };

  const handlePagination = (action: "prev" | "next") => {
    return () => {
      setCurrentPage((value) => {
        let currentPageValue = value;

        if (action === "prev") {
          currentPageValue -= 1;
        }

        if (action === "next") {
          currentPageValue += 1;
        }

        return currentPageValue;
      });
    };
  };

  React.useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="app">
      <div className="cards-container">
        {paginatedData.length
          ? paginatedData[currentPage].map((user) => {
              return (
                <article key={user.uuid} className="card">
                  <h1>{`${user.name} ${user.surname}`}</h1>
                  <h2>{user.gender}</h2>
                  <h2>{user.contact_info.email}</h2>
                  <h2>{user.contact_info.phone[0].number}</h2>
                  <h2>{user.link}</h2>
                </article>
              );
            })
          : null}
      </div>

      <h2>Page: {currentPage + 1}</h2>
      <div className="pagination-actions">
        <button
          disabled={currentPage === 0}
          onClick={() => {
            setCurrentPage(0);
          }}
        >
          {"<<"}
        </button>

        <button disabled={currentPage === 0} onClick={handlePagination("prev")}>
          {"<"}
        </button>

        <button
          disabled={
            currentPage === paginatedData.length - 1 || !paginatedData.length
          }
          onClick={handlePagination("next")}
        >
          {">"}
        </button>

        <button
          disabled={
            currentPage === paginatedData.length - 1 || !paginatedData.length
          }
          onClick={() => {
            setCurrentPage(paginatedData.length - 1);
          }}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}

export default App;
