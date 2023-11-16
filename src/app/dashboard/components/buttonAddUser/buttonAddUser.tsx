import React, { useState } from "react";

const buttonAddUser = ({ onClick }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <button
      className="bg-green-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-2 rounded"
      onClick={() => setShowForm(!showForm)}
    >
      + Add User
    </button>
  );
};

const AddUserForm = ({ onSubmit }) => {
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ nik, nama, password });

    setNik("");
    setNama("");
    setPassword("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add User</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nik">NIK</label>
            <input
              type="text"
              className="form-control"
              id="nik"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              className="form-control"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default buttonAddUser;