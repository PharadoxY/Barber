import { $host } from "./index";

export const editService = async (id, name, price) => {
    const { data } = await $host.post("api/service/edit", id, name, price);
};

export const fetchService = async () => {
    const { data } = await $host.get("api/service");
    return data;
};