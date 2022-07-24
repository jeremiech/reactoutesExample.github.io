import { getInvoice } from "./data";
import { Link, Outlet } from "react-router-dom";
export default function Invoices() {
  let invoices=getInvoice()
  return (
<>
<nav style={{  borderRight: "solid 1px",
  padding: "1rem",}}>
      {invoices.map(invoice=>
      ( <Link to={`/invoices/${invoice.number}`}
      style={{ display: "block", margin: "1rem 0" }}
      key={invoice.number}>{invoice.name}</Link>)
      )}
  </nav>
  <Outlet/>
</>

  );
}