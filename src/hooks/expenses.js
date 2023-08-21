
import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//get expenses
export const useExpenses = (filters) => {
    return useQuery({
        queryKey: ['expenses'],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/expense/`,{params:filters})
                .then((res) => res.data) 
    })
}

//get expenses types
export const useExpensesTypes = () => {
    return useQuery({
        queryKey: ['expensesTypes'],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/expense/types/`)
                .then((res) => res.data) 
    })
}


//add Flooor
export const useAddExpense = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .post(`http://115.186.185.235:9011/hms/expense/`, data,{ headers: {
            'Content-Type': 'application/json'
        }})
        .then((res) => res.data)
    }, onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['expenses'] })
    }
})
}