import './App.css';

import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {
  const products = [
    {
      id: 1,
      name: 'Hatil Sofa',
      price: 192000,
      image: 'https://img.freepik.com/free-psd/slipper-chair-isolated-transparent-background_191095-13677.jpg?t=st=1716722490~exp=1716726090~hmac=4e5c73bad8f0c6ff3b4a723851900bef72e2144c79eb2fe4704bc57053c2d8b5&w=360',
    },
    {
      id: 2,
      name: 'Partex Sofa',
      price: 92000,
      image: 'https://img.freepik.com/free-vector/chair-realistic-illustration_1284-9507.jpg?w=360&t=st=1716722636~exp=1716723236~hmac=e7562f48d24aee9a35e63ed715086989fe081b34e0c147885fcdfb745b5fb0fe',
    },
    {
      id: 3,
      name: 'Otobi Sofa',
      price: 32000,
      image: 'https://img.freepik.com/free-photo/grey-comfortable-armchair-isolated-white-background_181624-25295.jpg?t=st=1716722173~exp=1716725773~hmac=d884c4638bd4065f158701b1429cb348cde907d4be3c36db29c954ab5bb1db79&w=360',
    },
    {
      id: 4,
      name: 'Stadium Market Sofa',
      price: 324000,
      image: 'https://img.freepik.com/premium-photo/photo-modern-luxury-arm-chair-furniture-design_763111-22146.jpg?w=360',
    },
  ];



  return (
    <>
      <Header></Header>
      <Banner></Banner>
        <h1 className="product-header">Our Products</h1>

      <div className='product-container'>
      
      {
        products.map(product => <Product product={product} key={product.id}></Product>)
      }
      
      </div>

    </>
  );
}

export default App;
