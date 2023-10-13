/** @format */

import axios from "axios";

const Url = "http://localhost:2020/api/v1";

export const createUser = async (data: any) => {
  await axios
    .post(`${Url}/createUser`, data)
    .then((res: any) => {
      console.log(res.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const signInUser = async (data: any) => {
  await axios
    .post(`${Url}/signIn`, data)
    .then((res: any) => {
      // return res.data.data;
      console.log(res.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const updateUser = async (data: any, userID: any) => {
  await axios
    .patch(`${Url}/${userID}/updateUser`, data)
    .then((res: any) => {
      console.log(res);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const updateUserImage = async (data: any) => {
  await axios
    .patch(`${Url}/:userID/updateuserImage`, data)
    .then((res: any) => {
      console.log(res);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const removeUserImage = async (data: any) => {
  await axios
    .patch(`${Url}/:userID/RemoveuserImag`, data)
    .then((res: any) => {
      return res;
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const findOneUser = async (id: any) => {
  await axios.get(`${Url}/oneUser/${id}`).then((res: any) => {
    console.log(res.data);
  });
};
