import React from "react";

const Users = () => {
  return (
    <div>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <link href="/users/create" className="btn btn-sm btn-outline-secondary">
          Add
        </link>
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
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
