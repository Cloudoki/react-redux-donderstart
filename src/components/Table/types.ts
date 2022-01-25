export type TableProps = {
  head: string[],
  rows: {
    cells: Cell[],
  }[],
  limit?: number,
  total?: number,
  selected?: number,
  onChange?: (page:number, offset: number) => void,
}

type Cell = string | JSX.Element

export type PaginationProps = {
  pages: number,
  selected: number,
  onChange: (idx: number) => () => void,
}