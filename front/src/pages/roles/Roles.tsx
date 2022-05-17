import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { IRole } from "../../types/role";

const RolesPage = () => {
  const [roles, setRoles] = useState<IRole[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("roles");

      setRoles(data.data);
    })();
  }, []);

  const handleDel = async (id: number) => {
    if (window.confirm("本当に削除しますか？")) {
      await axios.delete(`roles/${id}`);

      setRoles(roles.filter((r: IRole) => r.id !== id));
    }
  };

  return (
    <Layout>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to="/roles/create" className="btn btn-sm btn-outline-secondary">
          Add
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role: IRole) => {
              return (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.name}</td>
                  <td>
                    <div className="btn-group mr-2">
                      <Link
                        to={`/roles/${role.id}/edit`}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </Link>
                      <a
                        href="#"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleDel(role.id)}
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default RolesPage;
