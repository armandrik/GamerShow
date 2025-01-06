import Product from '@/components/modules/product/Product'
import React from 'react'
import ScrollArrows from '../index/latestgames/ScrollArrows'

function SimilarGames() {
  return (
    <div className="px-12 my-10 mobile:px-4">
      <div className="mb-14 mobile:mb-4">
        <h2 className="text-white text-2xl font-bold mobile:text-xl">
          بازی‌های مشابه
        </h2>
      </div>
      <ScrollArrows display='flex' elementId="similarScrollContainer"/>
      <div
        id="similarScrollContainer"
        className="flex snap-x snap-mandatory gap-x-[14px] no-scrollbar overflow-x-auto no-scrollbar scroll-smooth"
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default SimilarGames