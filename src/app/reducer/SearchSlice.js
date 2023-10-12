import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import { instance } from "../setup/api";


const API_KEY = 'Здесь api key. Для безопасности не стала заливать в гихаб';


export const fetchBooks = createAsyncThunk(
    "fecthBooks",
    async (query) => {
        try {
            const response = await instance.get(`books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=40`);

            console.log(response)
            return response.data.items;
        } catch (error) {
            console.log('Ошибка при запросе к Google Books API', error);
        }
    }
);


const searchSlice = createSlice({
    name: "authSlice",
    initialState: {
        bookData: [],
        status: "idle",
        error: null,
    },
    extraReducers: {
        [fetchBooks.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.bookData = action.payload
        },
        [fetchBooks.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export default searchSlice.reducer;