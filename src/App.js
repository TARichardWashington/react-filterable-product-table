import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <>
      <FilterableProductsTable products={PRODUCTS} />
    </>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function FilterableProductsTable({ products }) {

  const [filterText, setFilterText] = useState('fruit');
  const [inStockOnly, setInStockOnly] = useState(true);

  return (
    <div>
      <h2>Filterable Products Table</h2>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <>
      <input type="text" value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} /><br />
      <p> <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        Only show products in stock</p>
    </>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let currentCategory;

  products.forEach((product) => {

    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (!product.stocked && inStockOnly) {
      return;
    }

    if (product.category !== currentCategory) {
      rows.push(<ProductCategoryRow name={product.category} key={product.category} />);
    }

    rows.push(<ProductRow product={product} key={product.name} />);

    currentCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

function ProductCategoryRow({ name }) {
  return (
    <tr>
      <td colSpan="2">{name}</td>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>

  return (
    <tr><td>{name}</td><td>{product.price}</td></tr>
  );
}
