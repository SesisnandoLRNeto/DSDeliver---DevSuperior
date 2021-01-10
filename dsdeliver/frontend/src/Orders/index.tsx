import { useEffect, useState } from 'react'

import { OrderLocationData, Product } from './types'
import { fecthProducts, saveOrder } from '../api'

import { toast } from 'react-toastify'

import ProductsList from './ProductList'
import StepsHeader from './StepsHeader'
import OrderLocation from './OrderLocation'
import OrderSummary from './OrderSummary'
import Footer from '../Footer'

import { checkSelected } from './helpers'
import './styles.css'

function Orders() {

    const [products, setProducts] = useState<Product[]>([]) //inicilizado com uma lista vazia [], mas é um tipo de lista type <Product[]>
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>()
    const totalPrice = selectedProducts.reduce((sum, item) => {
      return sum + item.price
    }, 0)//valor inicial do sum

    useEffect(()=>{
        fecthProducts()
            .then(response => setProducts(response.data))
            .catch(error => toast.warning("Erro ao listar Produtos"))
    },[])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkSelected(selectedProducts, product)

        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!, //sabendo que nao será undefined
          products: productsIds
        }
      
        saveOrder(payload).then(response => {
          toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    return (
        <>
            <div>
                <StepsHeader/>
                <ProductsList 
                  products={products} 
                  onSelectProduct={handleSelectProduct} 
                  selectProduct={selectedProducts}
                />
                <OrderLocation 
                  onChangeLocation={location => setOrderLocation(location)}
                />
                <OrderSummary 
                  amount={selectedProducts.length} 
                  totalPrice={totalPrice}
                  onSubmit={handleSubmit}/>
            </div>
            <Footer/>
        </>
    )
}
export default Orders