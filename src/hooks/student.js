
import { useQuery,useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// //get students
// export const useStudents = (filters) => {
//     return useQuery({
//         queryKey: ['students'],
//         queryFn: () => 
//             axios
//                 .get(`http://115.186.185.235:9011/hms/students/`,{params:filters})
//                 .then((res) => res.data.data.students) 
//     })
// }

//get Student
export const useStudents = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (filters) => {
            return axios
            .get(`http://115.186.185.235:9011/hms/students/`, {params:filters},{ headers: {
                'Content-Type': "form-data"
        }})
        .then((res) => res.data.data)
    },onSuccess: (result) => {
        // Replace optimistic todo in the todos list with the result
        queryClient.setQueryData(['students'], result )

      }, onSettled: (result) => {
        queryClient.invalidateQueries({ queryKey: ['students'] })
    }
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


//update Student
export const useUpdateStudent = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .put(`http://115.186.185.235:9011/hms/students/`, data,{ headers: {
                'Content-Type': 'application/json'
        }})
        .then((res) => res.data)
    }, onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['students'] })
    }
})
}

//update Student status
export const useUpdateStudentStatus = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => {
            return axios
            .put(`http://115.186.185.235:9011/hms/students/status/`, data,{ headers: {
                'Content-Type': 'application/json'
        }})
        .then((res) => res.data)
    }, onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['students'] })
    }
})
}