
import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//get services
export const useServices= () => {
    return useQuery({
        queryKey: ['services'],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/rooms/extra_services`)
                .then((res) => res.data) 
    })
}
