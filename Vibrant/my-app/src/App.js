
import { client } from './lib/sanity';

const App({products,bannerData}) => (
  
  
    <div className="App">
      <div className='product-Heading'>
        <h2>Best Seller Prooducts</h2>
        <p>Speaker there are so many </p>
      </div>

      
      <div className='product-container'>
        {products?.map((product)=>product.name)}
      </div>
      
    </div>
  
)
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData}
  }
}

export default App;
