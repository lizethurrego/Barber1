import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";
import useInfo from "../hooks/useInfo";


const Appointment = ({ customer, setCustomer, deleteCustomer }) => {

  const { name, date, email, service, id } = customer;
  const {Icons} = useInfo()

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setCustomer(customer)}>
        EDIT
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteCustomer(id)} destructive={true}>
        DELET
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className=" mb-5 bg-white p-3 lg:px-5 lg:py-[2rem] rounded-xl mt-[3rem] lg:mt-0 mr-[3rem] w-[19rem] sm:w-auto lg:w-[21rem] xl:w-[45rem] ">
          <img 
            src={Icons[service]} 
            alt="Icono Gasto" 
            className="rounded-xl mb-6 w-[31rem] h-[21rem]"
            />
          <div className="flex flex-col lg:items-center">
          <p className="text-gray-700 uppercase font-bold  ">
            Name: {""}
            <span className="font-extralight">{name}</span>
          </p>

          <p className="text-gray-700 uppercase font-bold  mt-2">
            Email: {""}
            <span className="font-extralight">{email}</span>
          </p>

          <p className="text-gray-700 uppercase font-bold  mt-2">
            Appointment: {""}
            <span className="font-extralight">{date}</span>
          </p>

          <p className="text-gray-700 uppercase font-bold  mt-2 ">
            Service: {""}
            <span className="font-extralight">{service}</span>
          </p>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Appointment;
