import stickAPI, { errorHandler } from './config'
import {appEndpoint} from "../config";

const getUser = async userId => {
    try {
        const res = await stickAPI.get(`${appEndpoint}/user/` + userId);
        return res.data.content;
    } catch(e) {
        errorHandler(e)
    }
};

const updateUser = async (userId, user) => {
    try {
        const res = await stickAPI.post(`${appEndpoint}/user/` + userId + "/update", user);
        return res.data;
    } catch(e) {
        errorHandler(e)
    }
};

const uploadAvatarImage = async ( userId, data) => {
    try {
        const res = await stickAPI.post(`${appEndpoint}/image/user/${userId}/upload/avatar`, data);
        return res.data.content;
    } catch(e) {
        errorHandler(e)
    }
};
export {
    getUser,
    updateUser,
    uploadAvatarImage
}