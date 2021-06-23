export class ErrorWithCode extends Error {
  code: string

  constructor(code: string, msg = code) {
    super(msg)

    this.name = 'ApiError'
    this.code = code
    this.message = msg
  }
}

export class ApiError extends ErrorWithCode {}

export function getError(error: ErrorWithCode) {
  return {
    ...error,
    isError: true,
    name: error.name,
    msg: error.message,
    stack: error.stack,
    code: error.code,
  }
}

