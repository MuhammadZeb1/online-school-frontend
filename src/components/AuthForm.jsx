const AuthForm = ({ form, setForm, handleSubmit, loading, title }) => {
  
  const onSubmit = (e) => {
    e.preventDefault();          // prevent page reload
    handleSubmit(form);          // send current form data to parent
    setForm({ name: "", email: "", password: "" }); // reset form after submit
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto mt-10 p-6 border rounded"
    >
      <h2 className="text-2xl mb-4">{title}</h2>

      <input
        type="text"
        placeholder="Name"
        value={form.name || ""}
        className="w-full p-2 mb-3 border"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email || ""}
        className="w-full p-2 mb-3 border"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password || ""}
        className="w-full p-2 mb-3 border"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        type="submit"
        className={`w-full p-2 text-white ${loading ? "bg-gray-400" : "bg-blue-500"}`}
        disabled={loading}
      >
        {loading ? "Loading..." : title}
      </button>
    </form>
  );
};

export default AuthForm;
