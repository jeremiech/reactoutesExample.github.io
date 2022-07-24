import './App.css';
import { Outlet, Link } from "react-router-dom";
// import { getInvoice } from './components/data';

function App() {
  // let invoices=getInvoice();
  return (
<div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
       <Link to="/invoices">Invoice</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />

    </div>  )
}

export default App;
