import { UPDATE_PERSONAL_INFO } from './actionTypes';
import { UPDATE_LOCATION_INFO } from './actionTypes';
import { UPDATE_GUARDIAN_INFO } from './actionTypes';
import { UPDATE_VISITOR_INFO } from './actionTypes';
import { UPDATE_CNIC_FRONT } from './actionTypes';
import { UPDATE_CNIC_BACK } from './actionTypes';
import { UPDATE_STUDENT_ID } from './actionTypes';

const initialState = {
    student_id:0,
    location_info: {
        branch_id:'',
        floor_id:'',
        room_id:'',
        seat_id:''
    },
    personal_info: {
        student_name:'',
        identity_number:'',
        primary_contact:'',
        designation:'',
        emergency_contact_number:''
    },
    guardian_info: {
        guardian_name:'',
        guardian_relation:'',
        guardian_identity_number:'',
        guardian_primary_contact:'',
    },
    visitors_info:[],
    idFrontImage:'',
    idBackImage:''
};


export default function reducer1(state = initialState, action) {
    switch (action.type) {
        case UPDATE_STUDENT_ID:
        return {
            ...state,
            student_id: action.payload
        };
        case UPDATE_LOCATION_INFO:
        return {
            ...state,
            location_info: {
                ...state.location_info,
                ...action.payload,
            }
        };
        case UPDATE_PERSONAL_INFO:
        return {
            ...state,
            personal_info: {
                ...state.personal_info,
                ...action.payload,
            }
        };
        case UPDATE_GUARDIAN_INFO:
        return {
            ...state,
            guardian_info: {
                ...state.guardian_info,
                ...action.payload,
            }
        };
        case UPDATE_VISITOR_INFO:
            return {
                ...state,
                visitors_info: [...state.visitors_info, action.payload],
            };
        case UPDATE_CNIC_FRONT:
        return {
            ...state,
            idFrontImage:action.payload
        };
        case UPDATE_CNIC_BACK:
            return {
                ...state,
                idBackImage:action.payload
            };
        default:
        return state;
    }
}
