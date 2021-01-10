import { checkSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
  products: Product[];
  selectProduct:Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, selectProduct, onSelectProduct }: Props) {
  return (
      <div className='orders-list-container'>
         <div className="orders-list-items">
         {products.map(product => (
           <ProductCard 
            key={product.id} 
            product={product} 
            onSelectProduct={onSelectProduct} 
            isSelected={checkSelected(selectProduct, product)}/>
          ))}
         </div>
      </div>
  )
}
export default ProductsList