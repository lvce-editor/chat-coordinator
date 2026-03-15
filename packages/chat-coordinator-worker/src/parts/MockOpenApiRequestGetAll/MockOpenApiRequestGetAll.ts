import type { MockOpenApiRequest } from '../MockOpenApiRequest/MockOpenApiRequest.ts'
import * as MockOpenApiRequestState from '../MockOpenApiRequest/MockOpenApiRequest.ts'

export const mockOpenApiRequestGetAll = (): readonly MockOpenApiRequest[] => {
  return MockOpenApiRequestState.getAll()
}
