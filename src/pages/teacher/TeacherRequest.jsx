import { useDispatch, useSelector } from "react-redux";
import { requestTeacher } from "../../features/teacher/teacherSlice.jsx";

const TeacherRequest = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { loading, success, error } = useSelector(
    (state) => state.teacher
  );

  const handleRequest = () => {
    dispatch(requestTeacher());
  };

  if (!user) return null;

  return (
    <div className="p-4 bg-white shadow rounded w-96 mx-auto mt-10 text-center">
      <h2 className="text-xl font-bold mb-4">Become a Teacher</h2>

      {user.teacherRequest === "none" && (
        <button
          onClick={handleRequest}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Sending..." : "Request to Become Teacher"}
        </button>
      )}

      {user.teacherRequest === "pending" && (
        <p className="text-yellow-500">Request Pending ⏳</p>
      )}

      {success && (
        <p className="text-green-500">Request Sent Successfully ✅</p>
      )}

      {error && (
        <p className="text-red-500">{error}</p>
      )}
    </div>
  );
};

export default TeacherRequest;
