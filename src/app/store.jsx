import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.jsx";
import teacherReducer from "../features/teacher/teacherSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teacher: teacherReducer,
  },
  devTools: true
});
