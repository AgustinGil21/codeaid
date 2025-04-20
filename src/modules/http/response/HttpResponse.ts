import HttpStatus from './HttpStatus';

export const HttpResponse = {
  ok: (data: any = null, message = 'OK') => ({
    status: HttpStatus.OK,
    message,
    data,
  }),

  created: (data: any = null, message = 'Created') => ({
    status: HttpStatus.CREATED,
    message,
    data,
  }),

  noContent: () => ({
    status: HttpStatus.NO_CONTENT,
    message: 'No Content',
  }),

  badRequest: (message = 'Bad Request') => ({
    status: HttpStatus.BAD_REQUEST,
    error: 'BadRequest',
    message,
  }),

  unauthorized: (message = 'Unauthorized') => ({
    status: HttpStatus.UNAUTHORIZED,
    error: 'Unauthorized',
    message,
  }),

  forbidden: (message = 'Forbidden') => ({
    status: HttpStatus.FORBIDDEN,
    error: 'Forbidden',
    message,
  }),

  notFound: (message = 'Not Found') => ({
    status: HttpStatus.NOT_FOUND,
    error: 'NotFound',
    message,
  }),

  conflict: (message = 'Conflict') => ({
    status: HttpStatus.CONFLICT,
    error: 'Conflict',
    message,
  }),

  unprocessableEntity: (message = 'Unprocessable Entity') => ({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    error: 'UnprocessableEntity',
    message,
  }),

  internalServerError: (message = 'Internal Server Error') => ({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    error: 'InternalServerError',
    message,
  }),
};

export default HttpResponse;
