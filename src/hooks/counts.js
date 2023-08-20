import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//search counts for dashboard
export const useCounts = (filters) => {
    return useQuery({
        queryKey: ['counts'],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/branches/business/summary/`,{ params: filters })
                .then((res) => res.data) 
    })
}

