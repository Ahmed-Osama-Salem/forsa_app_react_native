/**
 * The above function is a TypeScript module that exports a function for making HTTP requests using
 * Axios and returns a Promise with a response object or an error object.
 * @param {RequestMakerData}  - - `AxiosError`: A type definition for errors that may occur during an
 * Axios request.
 * @returns The `requestMaker` function returns a Promise that resolves to an object of type
 * `RequestMakerResponse<T>`. This object has the following properties:
 * - `data`: of type `T`, which is the response data returned from the API call
 * - `status`: of type `number`, which is the HTTP status code returned from the API call
 * - `message`: of type `string`,
 */
import type {AxiosError, AxiosResponse, Method} from 'axios';
import ApiClient from './ApiClient';

export interface RequestMakerResponse<T> {
  data?: {results?: T};
  status: number;
  message?: string;
  errors?: any;
}

interface RequestMakerError {
  message: string;
  status: number;
  errors?: any;
}

interface RequestMakerData {
  endpoint: string;
  data?: Record<string, unknown>;
  method?: Method; // Optional parameter for custom HTTP method
}

const requestMaker = async <T extends object | undefined>({
  endpoint,
  data,
  method = 'post', // Default to POST method
}: RequestMakerData): Promise<RequestMakerResponse<T | void>> => {
  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'X-Localization': 'ar',
    },
  };
  const requestMethod = method.toLowerCase() as Method;
  const requestData = data && requestMethod === 'get' ? {params: data} : data;
  return ApiClient.request<T>({
    url: `${endpoint}`,
    method: requestMethod,
    data: requestData,
    ...requestConfig,
  })
    .then((response: AxiosResponse) => {
      return {
        data: response.data as T,
        status: response.status,
      };
    })
    .catch((error: AxiosError) => {
      if (error.response?.data) {
        const errorResponse = error.response as AxiosResponse<any>;
        const errorMessage = errorResponse.data.message || 'An error occurred';
        return {
          message: errorMessage,
          status: errorResponse.status,
          errors: errorResponse.data.errors,
        } as RequestMakerError;
      }
      throw error;
    });
};

export default requestMaker;
