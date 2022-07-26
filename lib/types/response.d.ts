interface Response<T = void> {
    status: 'error' | 'success';
    message: string;
    id?: string;
    statusCode?: number;
    data?: T;
}
export type { Response };
