
import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//get invoice
export const useInvoices = (filters) => {
    return useQuery({
        queryKey: ['invoice'],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/invoices/summary/`,{params:filters})
                .then((res) => res.data.data) 
    })
}


//get generate invoice
export const useGenerateInvoices = (filters) => {
    return useQuery({
        queryKey: ['generateInvoice'],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/invoices/`,{params:filters})
                .then((res) => res.data.data) 
    })
}