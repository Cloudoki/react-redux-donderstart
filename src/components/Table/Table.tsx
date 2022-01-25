import React, { FC } from 'react'
import { Pagination } from './Pagination'
import { $Body, $Cell, $Head, $Row, $Table, $TableContainer } from './styles'
import { TableProps as Props } from './types'

export const Table: FC<Props> = ({ head, rows, limit = 12, total = 10, selected = 0, onChange }) => {
  const pages = (total + limit - 1) / limit
  
  const handlePageChange = (idx: number) => () => {
    onChange && onChange(idx, ((idx + 1) - 1) * limit)
  }
  
  return (
    <$TableContainer>
      <$Table>
        <$Head>
          <$Row>
            {head.map((th, idx) => (
              <$Cell key={`head-${idx}`}>{th}</$Cell>
            ))}
          </$Row>
        </$Head>
        <$Body>
          {rows.map((row, rowIDX) => (
            <$Row key={`row-${rowIDX}`}>
              {row.cells.map((cell, cellIDX) => (
                <$Cell key={`cell-${rowIDX}-${cellIDX}`}>{cell}</$Cell>
              ))}
            </$Row>
          ))}
        </$Body>
      </$Table>
      { pages >= 2 && <Pagination pages={pages} selected={selected} onChange={handlePageChange} /> }
    </$TableContainer>
  )
}