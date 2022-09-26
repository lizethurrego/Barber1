import Header from "./components/Header";
import Form from "./components/Form";
import ListAppointment from "./components/ListAppointment";
import { InfoProvider } from "./context/InfoProvider";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const getLS = () => {
    const data = localStorage.getItem("customers");
    const customersLS =
    data !== null && data != "undefined" ? JSON.parse(data) : [];
    return customersLS;
  };

  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({});

  const deleteCustomer = (id) => {
    const customersUpdate = customers.filter((customer) => customer.id !== id);
    setCustomers(customersUpdate);
  };

  useEffect(() => {
    const result = getLS();
    
    if (result.length !== 0) {
      setCustomers(result);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  return (
    <InfoProvider>
      <Header />
      <div className=" lg:flex bg-[url('/fon2.png')] lg:h-[49.5rem] pt-3">
        <Form
          customers={customers}
          setCustomers={setCustomers}
          customer={customer}
          setCustomer={setCustomer}
        />
        <ListAppointment
          customers={customers}
          setCustomer={setCustomer}
          deleteCustomer={deleteCustomer}
        />
      </div>
    </InfoProvider>
  );
}

export default App;
