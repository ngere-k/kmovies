import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
  isAuthReady: false,
};

// register user
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: username });
      return res.user;
    } catch (error) {
      const errorCode = error.code;
      // email already registered
      if (errorCode === "auth/email-already-in-use") {
        return rejectWithValue("This email has already been registered.");
      }
      // invalid email address
      if (errorCode === "auth/invalid-email") {
        return rejectWithValue("Please enter a valid email address.");
      }
      // password less than 6 characters
      if (errorCode === "auth/weak-password") {
        return rejectWithValue("Password should be at least 6 characters.");
      }

      return rejectWithValue(error.message);
    }
  }
);

// sign in user
export const signInUser = createAsyncThunk(
  "user/signInUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res.user;
    } catch (error) {
      const errorCode = error.code;
      // invalid email or password
      if (errorCode === "auth/invalid-credential") {
        return rejectWithValue("Invalid email or password. Please try again.");
      }
      return rejectWithValue(error.message);
    }
  }
);

// sign out user
export const signOutUser = createAsyncThunk("user/signOutUser", async () => {
  try {
    await signOut(auth);
    console.log("sign out user");
  } catch (error) {
    console.log("error signing out");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStateChanged: (state, action) => {
      state.user = action.payload;
      state.isAuthReady = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // register user
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        toast.success("You have successfully registered.");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(`${state.error}`);
      })
      // sign in user
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        toast.success("You have successfully logged in.");
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(`${state.error}`);
      })
      // sign out user
      .addCase(signOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
        toast.success("You have successfully logged out.");
      });
  },
});

export const { userStateChanged } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
