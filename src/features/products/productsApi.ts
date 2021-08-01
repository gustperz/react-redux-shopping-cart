import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './types';

const HOST_URL = 'https://superfuds-assets.s3-sa-east-1.amazonaws.com/';

const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: HOST_URL }),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: _ => 'utils/product.json',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

export default productsApi;
