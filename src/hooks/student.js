
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
