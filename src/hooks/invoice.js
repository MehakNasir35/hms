
import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//get invoice
// export const useInvoices = (filters) => {
//     return useQuery({
//         queryKey: ['invoice'],
//         queryFn: () => 
//             axios
//                 .get(`http://115.186.185.235:9011/hms/invoices/summary/`,{params:filters})
//                 .then((res) => res.data.data) 
//     })
// }

//get invoices
export const useInvoices = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (filters) => {
            return axios
            .get(`http://115.186.185.235:9011/hms/invoices/summary/`, {params:filters},{ headers: {
                'Content-Type': "form-data"
        }})
        .then((res) => res.data.data.invoices)
    },onSuccess: (result) => {
        // Replace optimistic todo in the todos list with the result
        queryClient.setQueryData(['students'], result )

      }, onSettled: (result) => {
        queryClient.invalidateQueries({ queryKey: ['invoice'] })
    }
})
}




//get generate invoice
// export const useGenerateInvoices = (filters) => {
//     return useQuery({
//         queryKey: ['generateInvoice'],
//         queryFn: () => 
//             axios
//                 .get(`http://115.186.185.235:9011/hms/invoices/`,{params:filters})
//                 .then((res) => res.data.data) 
//     })
// }

export const useGenerateInvoices = (filters) => {
    return useQuery(['generateInvoice', filters], async () => {
        const response = await axios.get(`http://115.186.185.235:9011/hms/invoices/`, {
            params: filters,
            headers: {
                'Content-Type': 'form-data'
            }
        });
        return response.data.data;
    });
};


//add invoice
export const useAddInvoice = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .post(`http://115.186.185.235:9011/hms/invoices`, data,{ headers: {
            'Content-Type': 'application/json'
        }})
        .then((res) => res.data)
    }, onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['generateInvoice'] })
    }
})
}

//add invoice
export const usePayInvoice = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .put(`http://115.186.185.235:9011/hms/invoices`, data,{ headers: {
            'Content-Type': 'application/json'
        }})
        .then((res) => res.data)
    }, onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['generateInvoice'] })
    }
})
}