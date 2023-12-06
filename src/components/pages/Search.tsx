'use client'

import { ChangeEvent, useState } from 'react'
import debounce from '@/utils/debounce.util'
import { ProductService } from '@/services/product.service'
import { revalidatePath } from 'next/cache'

const Search = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    debounce(async () => {
      await ProductService()
      revalidatePath('/')
    }, 600)
  }

  return (
    <div>
      <input type='text' value={search} onChange={handleSearch} />
    </div>
  )
}

export default Search
