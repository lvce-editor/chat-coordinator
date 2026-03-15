import * as MockOpenApiStream from '../MockOpenApiStream/MockOpenApiStream.ts'

export const mockOpenApiStreamPushChunk = (chunk: string): void => {
  MockOpenApiStream.pushChunk(chunk)
}
