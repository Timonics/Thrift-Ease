import React from 'react'
import SelectedCategoryHeader from './category-page/SelectedCategoryHeader'
import SelectedCategorySubCategories from './category-page/SelectedCategorySubCategories'
import SelectedCategoryProducts from './category-page/SelectedCategoryProducts'
import Footer from '../../components/footer'

const SelectedCategoryPage: React.FC = () => {
  return (
    <>
      <SelectedCategoryHeader />
      <SelectedCategorySubCategories />
      <SelectedCategoryProducts />
      <Footer />
    </>
  )
}

export default SelectedCategoryPage