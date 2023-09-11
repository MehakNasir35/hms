// actions.js
import { UPDATE_PERSONAL_INFO } from './actionTypes';
import { UPDATE_LOCATION_INFO } from './actionTypes';
import { UPDATE_GUARDIAN_INFO } from './actionTypes';
import { UPDATE_VISITOR_INFO } from './actionTypes';
import { UPDATE_VISITOR_ARRAY } from './actionTypes';
import { UPDATE_CNIC_FRONT } from './actionTypes';
import { UPDATE_CNIC_BACK } from './actionTypes';
import { UPDATE_STUDENT_ID } from './actionTypes';
import { RESET_STATE } from './actionTypes';
import { UPDATE_STATUS } from './actionTypes';

export const updatePersonalInfo = (data) => ({
    type: UPDATE_PERSONAL_INFO,
    payload: data,
});

export const updateLocationInfo = (data) => ({
    type: UPDATE_LOCATION_INFO,
    payload: data,
});

export const updateGuardianInfo = (data) => ({
    type: UPDATE_GUARDIAN_INFO,
    payload: data,
});

export const updateVisitorInfo = (data) => ({
    type: UPDATE_VISITOR_INFO,
    payload: data,
});

export const updateVisitorArray = (data) => ({
    type: UPDATE_VISITOR_ARRAY,
    payload: data,
});

export const updateCnicFront = (data) => ({
    type: UPDATE_CNIC_FRONT,
    payload: data,
});

export const updateCnicBack = (data) => ({
    type: UPDATE_CNIC_BACK,
    payload: data,
});

export const updateStudentId = (data) => ({
    type: UPDATE_STUDENT_ID,
    payload: data,
});

export const updateStatus = (data) => ({
    type: UPDATE_STATUS,
    payload: data,
});

export const resetState = () => {
    return {
      type: RESET_STATE
    };
  };

  