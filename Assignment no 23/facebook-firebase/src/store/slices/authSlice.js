import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";


export const signup = createAsyncThunk(
  'auth/signup',
  async (user) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      let userToDatabase = {
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
        uid: userCredential.user.uid
      }

      await setDoc(doc(db,'users', userCredential.user.uid), userToDatabase)
      return userToDatabase
    } catch (error) {
      console.log('error', error)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (user) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log("userCredential in login",userCredential.user.uid);
      const docSnapshot = await getDoc(doc(db, 'users', userCredential.user.uid));

      const dbUser = docSnapshot.data();
      console.log('dbUser', dbUser)
      return dbUser;
    } catch (error) {
      console.error('Login error:', error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      await signOut(auth)
      return true;
    } catch (error) {
      console.error('Login error:', error);
    }
  }
)


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload)
      state.user = action.payload
    })
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null
    })
  }
})

export default authSlice.reducer