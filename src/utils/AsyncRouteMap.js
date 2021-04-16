const pathToFileNameMap = new Map()
pathToFileNameMap.set('/list/table-search', '/list/TableWithSearch')
pathToFileNameMap.set('/list/grid-list', '/list/GridList')

export function pathToFileName(path) {
  return pathToFileNameMap.get(path) || path
}
