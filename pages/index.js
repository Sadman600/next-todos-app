
import React, { useState } from 'react';
import Meta from '../components/Meta';

const Home = ({ products }) => {
  const [carts, setCart] = useState([]);
  const handleCart = (newProduct) => {
    setCart([...carts, newProduct]);
  };

  return (
    <>
      <Meta title="Home" />
      <div className='container mt-3'>
        <div className="row ">
          <div className='col-lg-8'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {
                products.map(product => <div key={product.id} className="col">
                  <div className="card h-100">
                    <img src={product.strCategoryThumb} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{product.strCategory}</h5>
                      <p className="card-text">{product.strCategoryDescription.slice(0, 100)}</p>
                    </div>
                    <button onClick={() => handleCart(product)} className='btn btn-primary'>Add to cart</button>
                  </div>
                </div>)
              }
            </div>
          </div>
          <div className='col-lg-4'>
            {
              carts.map(cart => <div key={cart.id} class="card mb-3" style={{maxWidth: '540px'}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={cart.strCategoryThumb} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{cart.strCategory}</h5>
                    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {

  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();

  return {
    props: {
      products
    }
  }
}

export default Home;