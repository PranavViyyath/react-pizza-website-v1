import React from 'react'
import {ProductsContainer,ProductHeading,ProductWrapper,ProductCard,ProductImg,ProductInfo,ProductTitle,ProductDesc,ProductPrice,ProductButton} from './ProductElements'


const Products = ({data, heading}) => {
    return (
       <ProductsContainer>
           <ProductHeading>{heading}</ProductHeading>
           <ProductWrapper>
               {data.map((product,index)=>{
                   return(
                       <ProductCard key={index}>
                           <ProductImg src={product.image} alt={product.alt}/>
                           <ProductInfo>
                               <ProductTitle>{product.name}</ProductTitle>
                               <ProductDesc>{product.desc}</ProductDesc>
                               <ProductPrice>{product.price}</ProductPrice>
                               <ProductButton>{product.button}</ProductButton>
                           </ProductInfo>
                       </ProductCard>
                   )
               })}
           </ProductWrapper>
       </ProductsContainer>
    )
}

export default Products
