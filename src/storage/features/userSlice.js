import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_APIHOUSE,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) headers.set('Authorization', `Bearer ${token}`);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => `/users`,
			providesTags: ['users'],
			transformResponse: (response) =>
				response.sort((a, b) =>
					a.name.toLowerCase() < b.name.toLowerCase()
						? -1
						: a.name.toLowerCase() > b.name.toLowerCase()
						? 1
						: 0,
				),
		}),
		getUserById: builder.query({
			query: (id) => `/users/${id}`,
			providesTags: ['user'],
		}),
		createUser: builder.mutation({
			query: (newUser) => ({
				url: `/users`,
				method: 'POST',
				body: newUser,
			}),
			invalidatesTags: ['users', 'user'],
		}),
		deletedUser: builder.mutation({
			query: (id) => ({
				url: `/users/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['users', 'user'],
		}),
		updateUser: builder.mutation({
			query: (updatedUser) => ({
				url: `/users/${updatedUser.id}`,
				method: 'PATCH',
				body: updatedUser,
			}),
			invalidatesTags: ['users', 'user'],
		}),
		uploadAvatar: builder.mutation({
			query: (body) => ({
				url: `/users/uploads/${body.id}`,
				method: 'POST',
				body: body.file,
			}),
			invalidatesTags: ['users', 'user'],
		}),
		login: builder.mutation({
			query: (body) => ({
				url: `/auth/login`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['users', 'user'],
		}),
		getHouses: builder.query({
			query: () => `/houses`,
			providesTags: ['houses'],
		}),
		getHouseById: builder.query({
			query: (code) => `/houses/${code}`,
			providesTags: ['house'],
		}),
		addHouse: builder.mutation({
			query: (newHouse) => ({
				url: `/houses`,
				method: 'POST',
				body: newHouse,
			}),
			invalidatesTags: ['houses', 'house'],
		}),
		deleteHouse: builder.mutation({
			query: (code) => ({
				url: `/houses/${code}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['houses', 'house'],
		}),
		updateHouse: builder.mutation({
			query: (updateHouse) => ({
				url: `/houses/${updateHouse.code}`,
				method: 'PATCH',
				body: updateHouse,
			}),
			invalidatesTags: ['houses', 'house'],
		}),
	}),
});

export const {
	useGetUsersQuery,
	useCreateUserMutation,
	useGetUserByIdQuery,
	useDeletedUserMutation,
	useUpdateUserMutation,
	useUploadAvatarMutation,
	useGetHousesQuery,
	useGetHouseByIdQuery,
	useAddHouseMutation,
	useDeleteHouseMutation,
	useUpdateHouseMutation,
	useLoginMutation,
} = userSlice;
/* 
const users = [
    {
        _id: "65ff5d8dba456c668a99d884",
        id: 62,
        name: "isablera",
        lastname: "coincian",
        email: "juans@gmail.com",
        password: "$2b$10$ZruEJ1/wT45e.nBlqa3F.eid/9CUrOmooe06z94PiRDDjUBZOB9Ca",
        rol: "user"
    }
]

const userSlice = createSlice({
    name: "users",
    initialState: users,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer; */
