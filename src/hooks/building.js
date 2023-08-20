import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//get branches / building
export const useBuildings = () => {
    return useQuery({
        queryKey: ['building'],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/branches/`)
                .then((res) => res.data) 
    })
}

//add Building
export const useAddBuilding = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .post(`http://115.186.185.235:9011/hms/branches/`, data,{ headers: {
            'Content-Type': 'application/json'
        }})
        .then((res) => res.data)
    }, onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['building'] })
    }
})
}


