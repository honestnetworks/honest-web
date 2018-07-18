import stickAPI, {clearStore, errorHandler} from './config'
import {appEndpoint} from "../config"

const login = async credentials => {
    try {
        const res = await stickAPI.post('/users/login', credentials);
        console.log('login res =====>', res)

        // if(res.data.content){
        //     const token = res.data.content.token;
        //     stickAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        //     localStorage.setItem('token', token);
        // }
        // return res.data;
        stickAPI.defaults.headers.common['Authorization'] = await res.data.token;
        await localStorage.setItem('token', res.data.token);
        return {content: res.data.user};
    } catch (e) {
        errorHandler(e)
    }
};

const logout = async () => {
    try {
        const res = await stickAPI.delete(`${appEndpoint}/logout`);
        if (res) {
            stickAPI.defaults.headers.common['Authorization'] = '';
            delete stickAPI.defaults.headers.common['Authorization'];
        }
    } catch (e) {
        errorHandler(e)
    }
    finally {
        clearStore();
    }
};

const forgotPassword = async email => {
    try {
        // const res = await stickAPI.get(`${appEndpoint}/forgot-password?email=${email}`);
        // return res.data.content;
    } catch(e) { 
        errorHandler(e) 
    } finally {
        return "Wow you can reset password"
    }
};

const resetPassword = async data => {
    try {
        const res = await stickAPI.post(`${appEndpoint}/reset-password`, data);
        return res.data;
    } catch(e) { errorHandler(e) }
};

export {
    login,
    logout,
    forgotPassword,
    resetPassword
}