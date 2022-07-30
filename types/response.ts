interface ResponseSuccess<T = void> {
  status: 'ok';
  id?: string;
  data?: T;
}

interface ResponseError {
  status: 'error';
  error: string;
  message: string;
  statusCode: number;
}


type Response<T = void> = ResponseSuccess<T> | ResponseError;

export type { ResponseSuccess, ResponseError, Response };
