/** @format */

import axios from "axios";

const Url = " http://localhost:2020/api/v1";

export const createTask = async (data: any,id:any) => {
  await axios
    .post(`${Url}/createTask/${id}`, data)
    .then((res: any) => {
      console.log(res);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const assignedTask = async (data: any,taskID:any,senderID:any) => {
  await axios
    .patch(`${Url}/assignTask/${taskID}/${senderID}`, data)
    .then((res: any) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
