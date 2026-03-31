import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestTeacherAPI } from "./teacherAPI";

// 🔥 Async Action
export const requestTeacher = createAsyncThunk(
  "teacher/request",
  async (_, thunkAPI) => {
    try {
      const data = await requestTeacherAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Request failed"
      );
    }
  }
);

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    clearTeacherState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestTeacher.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(requestTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearTeacherState } = teacherSlice.actions;
export default teacherSlice.reducer;
