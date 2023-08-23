
import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//get students
export const useStudents = (filters) => {
    return useQuery({
        queryKey: ['students'],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/students/`,{params:filters})
                .then((res) => res.data) 
    })
}


//add Student
export const useAddStudent = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .post(`http://115.186.185.235:9011/hms/students/`, data,{ headers: {
                'Content-Type': "form-data"
        }})
        .then((res) => res.data)
    }, onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['students'] })
    }
})
}