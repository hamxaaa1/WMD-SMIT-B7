import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data
  }
)

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: []
  },
  reducers: {
    addCard: (state, action) => {
      const {title, description, image } = action.payload
      const newProduct = {
        id: state.products + 1,
        title,
        description,
        image
      } 
      state.products.push(newProduct);
    },
    deleteCard: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload)
    },
    updateCard: (state, action) => {
      const {id, title, description, image } = action.payload
      const existingProduct = state.products.find(product => product.id === id)
      if (existingProduct) {
        existingProduct.title = title
        existingProduct.description = description
        existingProduct.image = image
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
})

export const {addCard, deleteCard, updateCard} = productSlice.actions;
export default productSlice.reducer