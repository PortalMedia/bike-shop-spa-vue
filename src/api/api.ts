type Params = { [key: string]: string }[];

class API {
    async call(
        path: string,
        method: 'get' | 'put' | 'post' | 'delete' = 'get',
        body?: { [key: string]: string },
        params:  Params | string = '',
    ) {
        path = `https://62rng0wpc5.execute-api.us-east-1.amazonaws.com${path}`
        
        path = path + params

        const response = await fetch( path, {
            method,
            body: JSON.stringify(body),
        })
        return response.json();
    }
}

export const api = new API;