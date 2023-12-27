// import jsonServerProvider from "ra-data-json-server";

// export const dataProvider = jsonServerProvider(
//   import.meta.env.VITE_JSON_SERVER_URL
// );


import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { listBill } from './api/api';

const apiUrl = "restaurant-uat.sum-foods.com";
export const token = localStorage.getItem("user");
const httpClient = fetchUtils.fetchJson;


export const dataProvider = {
    getList: async (resource: any, params: any) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const res = await listBill('1717358125507416064');
        return {
            data: res.data,
            total: 10,
            // total: parseInt(headers.get('content-range').split('/').pop(), 10),
        };
    },

    // getOne: async (resource, params) => {
    //     const url = `${apiUrl}/${resource}/${params.id}`
    //     const { json } = await httpClient(url);
    //     return { data: json };
    // },

    // getMany: async (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({ ids: params.ids }),
    //     };
    //     const url = `${apiUrl}/${resource}?${stringify(query)}`;
    //     const { json } = await httpClient(url);
    //     return { data: json };
    // },

    // getManyReference: async (resource, params) => {
    //     const { page, perPage } = params.pagination;
    //     const { field, order } = params.sort;
    //     const query = {
    //         sort: JSON.stringify([field, order]),
    //         range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //         filter: JSON.stringify({
    //             ...params.filter,
    //             [params.target]: params.id,
    //         }),
    //     };
    //     const url = `${apiUrl}/${resource}?${stringify(query)}`;
    //     const { json, headers } = await httpClient(url);
    //     return {
    //         data: json,
    //         total: parseInt(headers.get('content-range').split('/').pop(), 10),
    //     };
    // },

    // create: async (resource, params) => {
    //     const { json } = await httpClient(`${apiUrl}/${resource}`, {
    //         method: 'POST',
    //         body: JSON.stringify(params.data),
    //     })
    //     return { data: json };
    // },

    // update: async (resource, params) => {
    //     const url = `${apiUrl}/${resource}/${params.id}`;
    //     const { json } = await httpClient(url, {
    //         method: 'PUT',
    //         body: JSON.stringify(params.data),
    //     })
    //     return { data: json };
    // },

    // updateMany: async (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({ id: params.ids}),
    //     };
    //     const url = `${apiUrl}/${resource}?${stringify(query)}`;
    //     const { json } = await httpClient(url, {
    //         method: 'PUT',
    //         body: JSON.stringify(params.data),
    //     })
    //     return { data: json };
    // },

    // delete: async (resource, params) => {
    //     const url = `${apiUrl}/${resource}/${params.id}`;
    //     const { json } = await httpClient(url, {
    //         method: 'DELETE',
    //     });
    //     return { data: json };
    // },

    // deleteMany: async (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({ id: params.ids}),
    //     };
    //     const url = `${apiUrl}/${resource}?${stringify(query)}`;
    //     const { json } = await httpClient(url, {
    //         method: 'DELETE',
    //         body: JSON.stringify(params.data),
    //     });
    //     return { data: json };
    // },
};
