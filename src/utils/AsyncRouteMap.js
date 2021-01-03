const pathToFileNameMap = new Map()
pathToFileNameMap.set('/normal/table-search', '/normal/TableWithSearch')
pathToFileNameMap.set('/normal/grid-list', '/normal/GridList')

export function pathToFileName(path) {
  return pathToFileNameMap.get(path) || path
}
