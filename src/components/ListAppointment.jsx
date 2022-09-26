import Appointment from "./Appointment";
import CarouselCustomer from "./CarouselCustomer";

const ListAppointment = ({ customers, setCustomer, deleteCustomer }) => {
  return (
    <div className=" lg:overflow-y-scroll lg:mt-[5rem] lg:pr-[3rem] ml-[3rem] pb-7  w-full lg:w-[57rem] xl:ml-[-6rem]  ">
      {customers && customers.length ? (
        <>
          {customers.map((customer) => (
            <Appointment
              key={customer.id}
              customer={customer}
              setCustomer={setCustomer}
              deleteCustomer={deleteCustomer}
            />
          ))}
        </>
      ) : (
        <CarouselCustomer />
      )}
    </div>
  );
};

export default ListAppointment;
