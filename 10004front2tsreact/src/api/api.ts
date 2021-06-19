import axios, {AxiosResponse} from "axios";

const headers = {Authorization: `Bearer +`}
export const GET = async (url: string, params?: unknown, timeout?: number): Promise<AxiosResponse<any>> => {
    const result = await axios({method: 'get', url, headers, params, timeout})
    if (result.data === undefined || result.data === null) {
        throw new Error()
    }
    return result
}


