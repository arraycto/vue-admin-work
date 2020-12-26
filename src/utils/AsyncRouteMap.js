const pathToFileNameMap = new Map()
pathToFileNameMap.set('/table/table-search', '/table/TableWithSearch')

export function pathToFileName(path) {
  return pathToFileNameMap.get(path) || path
}
