import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiColombiaSlice = createApi({
	reducerPath: 'apiColombia',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api-colombia.com/api/v1/',
	}),
	endpoints: (builder) => ({
		getDepartaments: builder.query({
			query: () => `/department`,
		}),
		getCitiesByDepartaments: builder.query({
			query: (departamentId) => `/department/${departamentId}/cities`,
		}),
	}),
});

export const { 
    useGetDepartamentsQuery, 
    useLazyGetCitiesByDepartamentsQuery 
} = apiColombiaSlice;
