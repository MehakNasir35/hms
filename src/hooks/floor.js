
import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//get floors
export const useFloors= (branch) => {
    return useQuery({
        queryKey: ['floor',branch],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/floors/`+branch)
                .then((res) => res.data) 
    })
}

//add Flooor
export const useAddFloor = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .post(`http://115.186.185.235:9011/hms/floors/`, data,{ headers: {
            'Content-Type': 'application/json'
        }})
        .then((res) => res.data)
    }, onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['floor'] })
    }
})
}