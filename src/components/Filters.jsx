import '../style/Filters.css'
import Cart from './Cart'
import { useFilters } from '../hooks/useFilters';

function Filters() {

  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  
  return (
    <section className='filters'>

      <div>
        <label htmlFor="price">Min Price :</label>
        <select id="price" onChange={handleChangeMinPrice} value={filters.minPrice}>
            <option value="0">All</option>
            <option value="10">$10</option>
            <option value="30">$30</option>
            <option value="80">$80</option> 
            <option value="100">$100</option> 
        </select>
      </div>

      <Cart />
      
      <div>
        <label htmlFor="category">Category :</label>
        <select id="category" onChange={handleChangeCategory} value={filters.category}>
          <option value="all">All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>

    </section>
  );
}

export default Filters;
