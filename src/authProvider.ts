import { AuthProvider, HttpError } from "react-admin";
import data from "./users.json";
import axios from "axios";
export const token = localStorage.getItem("token");

export const basePath = "https://restaurant-uat.sum-foods.com";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  login: async (params) =>  {
    try{
      const res = await axios.post(`${basePath}/sessions`, {
        'email': params.username,
        'password': params.password,
      });
      console.log(res);
      if (res) {
        // eslint-disable-next-line no-unused-vars
        let { data } = res;
        localStorage.setItem("user", JSON.stringify(data.token));
        return Promise.resolve();
      }
    }catch(e){
      return Promise.reject(
        new HttpError("Unauthorized", 401, {
          message: "Invalid username or password",
        })
      );
    }
   
    // const user = data.users.find(
    //   (u) => u.username === username && u.password === password
    // );

   

    // if (user) {
    //   // eslint-disable-next-line no-unused-vars
    //   let { password, ...userToPersist } = user;
    //   localStorage.setItem("user", JSON.stringify(userToPersist));
    //   return Promise.resolve();
    // }
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
