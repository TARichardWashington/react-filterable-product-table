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
  const rows = [];
  let currentCategory;

  PRODUCTS.forEach((product) => {
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
