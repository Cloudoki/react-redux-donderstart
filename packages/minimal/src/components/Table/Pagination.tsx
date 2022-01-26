import React, { FC } from 'react'
import { $Page, $Pagination, $Previous, $Next } from './styles'
import { PaginationProps as Props } from './types'

export const Pagination: FC<Props> = ({ pages, selected, onChange }) => (
  <$Pagination>
    {selected !== 0 && <$Previous onClick={onChange(selected - 1)} />}
    {Array.from({length: pages}).map((_, idx) => (
      <$Page 
        key={`pag-${idx}`} 
        selected={selected === idx}
        onClick={onChange(idx)}
      >
        {idx + 1}
      </$Page>
    ))}
    {selected < Math.floor(pages) - 1 && <$Next onClick={onChange(selected + 1)} />}
  </$Pagination>
)