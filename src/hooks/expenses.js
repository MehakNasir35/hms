
import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


//get expenses
export const useExpenses = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (filters) => {
            return axios
            .get(`http://115.186.185.235:9011/hms/expense/`, {params:filters},{ headers: {
                'Content-Type': "form-data"
        }})
        .then((res) => res.data.data)
    },onSuccess: (result) => {
        // Replace optimistic todo in the todos list with the result
        queryClient.setQueryData(['expenses'], result )

      }, onSettled: (result) => {
        queryClient.invalidateQueries({ queryKey: ['expenses'] })
    }
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