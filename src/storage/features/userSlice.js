import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
    reducerPath: 'users',
	baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        prepareHeaders: (headers, {}) => {
            const local = JSON.parse(localStorage.getItem('session'));
            if(local){
                const token = local.token
                if(token) headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
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
        })
	}),
});

export const {
	useGetUsersQuery,
	useCreateUserMutation,
	useGetUserByIdQuery,
	useDeletedUserMutation,
	useUpdateUserMutation,
    useUploadAvatarMutation,
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
