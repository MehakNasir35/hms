import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

//login user
export const useLogin = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .post(`http://115.186.185.235:9011/hms/users/login`, data,{ headers: {
            'Content-Type': 'application/json'
        }})
        .then((res) => res.data)
    }, 
    onSuccess:(res)=>{
        localStorage.setItem('token', res.data.token);
    }   ,
    onError: (error) => {
        console.error('Mutation Error:', error);
        // Handle error, display error message to user, etc.
    }, onSettled: (res) => {
        queryClient.invalidateQueries({ queryKey: ['Auth'] })
    }
})
}