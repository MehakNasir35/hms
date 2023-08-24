
import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//get rooms
export const useRooms= (floor_id) => {
    return useQuery({
        queryKey: ['rooms',floor_id],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/rooms/`,{ params: {floor_id} })
                .then((res) => res.data) 
    })
}


//get room
export const useRoom= (room_id) => {
    return useQuery({
        queryKey: ['room',room_id],
        queryFn: () => 
            axios
                .get(`http://115.186.185.235:9011/hms/rooms/details/`,{ params: {room_id} })
                .then((res) => res.data) 

    })
}

//add Room
export const useAddRoom = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .post(`http://115.186.185.235:9011/hms/rooms/`, data,{ params: {floor_id:data.floor_id} },{ headers: {
            'Content-Type': 'application/json'
        }})
        .then((res) => res.data)
    }, onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['rooms'] })
    }
})
}