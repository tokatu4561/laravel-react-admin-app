import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { User } from "../../types/user";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data: usersData } = await axios.get(`/users?page=${currentPage}`);

      setUsers(usersData.data);
      setLastPage(usersData.meta.last_page);
    })();
  }, [currentPage]);

  const onNext = () => {
    if (currentPage < lastPage) {
      setCurrentPage((page) => page + 1);
    }
  };

  const onPrev = () => {
    if (currentPage >= 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const handleDelUser = async (id: number) => {
    if (window.confirm("本当に削除しますか？")) {
      try {
        await axios.delete(`users/${id}`);

        setUsers((currentUsers) => {
          return currentUsers.filter((u: User) => u.id !== id);
        });
      } catch (error) {}
    }
  };

  return (
    <Layout>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to="/users/create" className="btn btn-sm btn-outline-secondary">
          Add
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>
                  {user.first_name}
                  {user.last_name}
                </th>
                <th>{user.email}</th>
                <th>{user.role.name}</th>
                <th>
                  <div>
                    <a
                      href="#"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => {
                        handleDelUser(user.id);
                      }}
                    >
                      Delete
                    </a>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={onPrev}>
              Previous
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link" onClick={onNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default Users;
