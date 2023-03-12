import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <>
      <FilterableProductsTable />
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

function FilterableProductsTable() {
  return (
    <div>
      <h2>Filterable Products Table</h2>
      <SearchBar />
      <ProductTable />
    </div>
  );
}

function SearchBar() {
  return (
    <>
      <input type="text" /><br />
      <p> <input type="checkbox" />
        Only show products in stock</p>
    </>
  );
}

function ProductTable() {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <ProductCategoryRow name="fruit" />
      <ProductRow name="banana" price="2.20" />
      <ProductRow name="apple" price="1.35" />
      <ProductRow name="grape" price="9.73" />
    </table>
  );
}

function ProductCategoryRow({ name }) {
  return (
    <tr>
      <td colspan="2">{name}</td></tr>
  );
}

function ProductRow({ name, price }) {
  return (
    <tr><td>{name}</td><td>£{price}</td></tr>
  );
}
