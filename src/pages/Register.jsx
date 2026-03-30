import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice.jsx";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    console.log("Dispatching registerUser with:", form);
    dispatch(registerUser(form));
    setForm({ name: "", email: "", password: "" }); // reset form after submit
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl mb-4 text-center">Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          className="w-full p-2 mb-3 border"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          className="w-full p-2 mb-3 border"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          className="w-full p-2 mb-3 border"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="submit"
          className={`w-full p-2 text-white ${loading ? "bg-gray-400" : "bg-blue-500"}`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </form>

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default Register;
