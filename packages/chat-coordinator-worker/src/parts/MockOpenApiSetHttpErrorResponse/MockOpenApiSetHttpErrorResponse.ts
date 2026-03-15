import * as MockOpenApiStream from '../MockOpenApiStream/MockOpenApiStream.ts'

export const mockOpenApiSetHttpErrorResponse = (statusCode: number, body: unknown): void => {
  MockOpenApiStream.setHttpErrorResponse(statusCode, body)
}
