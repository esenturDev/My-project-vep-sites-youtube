import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_BEK_RESULT;
const url2 = import.meta.env.VITE_BEK_RESULT2;

export const getBekResult = createAsyncThunk("todo/getBekResult", async () => {
	try {
		const response = (await axios.get(url)).data;
		return response;
	} catch (error) {
		console.error(error);
	}
});

export const postBekResult = createAsyncThunk(
	"todo/postBekResult",
	async (newData) => {
		try {
			const response = (await axios.post(url, newData)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

// export const deleteBekResult = createAsyncThunk(
// 	"todo/deleteBekResult",
// 	async (id) => {
// 		try {
// 			const response = (await axios.delete(`${url}/${id}`)).data;
// 			return response;
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// );

export const postUser = createAsyncThunk("todo/postUser", async (newData) => {
	try {
		const response = (await axios.post(url2, newData)).data;
		return response;
	} catch (error) {
		console.error(error);
	}
});

interface TodoList {
	_id: number;
	img: string;
	iframe: string;
	title: string;
	nameg: string;
	god: string;
}

const initialState: { data: TodoList[] } = {
	data: [],
};

const bekResultSlice = createSlice({
	name: "bekresult",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBekResult.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(postBekResult.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(postUser.fulfilled, (state, action) => {
				state.data = action.payload;
			});
	},
});

export const { addTodo } = bekResultSlice.actions;
export const bekentResults = bekResultSlice.reducer;
