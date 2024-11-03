import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";


export const createPost = createAsyncThunk("feed/createPost", async (post) => {
  try {
    const collectionRef = collection(db, "posts");
    const response = await addDoc(collectionRef, post);
    return { id: response.id, ...post }; // Include the new ID
  } catch (error) {
    console.log("Error creating post:", error);
  }
});

export const getPosts = createAsyncThunk("feed/getPosts", async () => {
  try {
    const collectionRef = collection(db, "posts");
    const docs = await getDocs(collectionRef);
    const data = [];
    docs.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.log("error", error);
  }
});

export const deletePost = createAsyncThunk(
  "feed/deletePost",
  async (id) => {
    try {
      const docRef = doc(db, 'posts', id)
      await deleteDoc(docRef);
      return id
    } catch (error) {
    console.log("error", error);
    }
  }
)

export const updatePost = createAsyncThunk(
  "feed/updatePost",
  async (post) => {
    try {
      const docRef = doc(db, "posts", post.id)
      const response = await updateDoc(docRef, post)
      return post
    } catch (error) {
    console.log("error", error);
    }
  }
)

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [],
    updatePost: null,
  },
  reducers: { 
    updateId: (state, action) => {
      let post = state.feed.filter((post) => post.id === action.payload)
      state.updatePost = post[0]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.feed = [...state.feed, action.payload];
    });

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.feed = action.payload;
    });

    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.feed = state.feed.filter((post) => post.id !== action.payload)
    })

    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.feed = state.feed.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload
        }
        return post
      })
      state.updatePost = null
    })
  },
});

export const {updateId} = feedSlice.actions
export default feedSlice.reducer;
