const pathToFileNameMap = new Map()
pathToFileNameMap.set('/normal/table-search', '/normal/TableWithSearch')

export function pathToFileName(path) {
  return pathToFileNameMap.get(path) || path
}
