interface ResponseSuccess<T = void> {
  status: 'success';
  message: string;
  id?: string;
  data?: T;
}

interface ResponseError {
  error: string;
  message: string;
  statusCode: number;
}

type Response = ResponseSuccess | ResponseError;

export type { ResponseSuccess, ResponseError, Response };
