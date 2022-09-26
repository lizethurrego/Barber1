import { useState, useEffect} from "react";
import useInfo from "../hooks/useInfo";
import Error from "./Error";
import UseGenerateId from "../hooks/useGenerateId";

const Form = ({setCustomers, customers, customer, setCustomer}) => {

    const {name, setName, email, setEmail,date,setDate,service,setService } = useInfo()
    const [error, setError] = useState(false)

    useEffect(() => {
      if( Object.keys(customer).length > 0  ) {
          setName(customer.name)
          setEmail(customer.email)
          setDate(customer.date)
          setService(customer.service)
      }
  }, [customer])

    const handleSubmit = (e) => {
        e.preventDefault();

        if( [ name, email, date, service ].includes('') ) {

            setError(true)
            return;
        } 
        setError(false)

        const obj = {
            name,
            email,
            date,
            service,
        }

        if(customer.id) {
          // Edit
          obj.id = customer.id
          const customersUpdate = customers.map( customerState => customerState.id === customer.id ? obj : customerState )

          setCustomers(customersUpdate)
          setCustomer({})

      } else {
          // New
          obj.id = UseGenerateId();
          setCustomers([...customers, obj]);
      }
        setName('')
        setEmail('')
        setDate('')
        setService('')

        } 

  return (
    <div class=" lg:w-[38rem] xl:mr-[15rem] sm:w-auto md:w-[74rem] md:mb-[1rem] xl:w-[60rem]">
      <form className="bg-white rounded-3xl py-10 px-5 lg:m-10 mx-5 md:w-[33rem] " onSubmit={handleSubmit}>
        {error && <Error/>}
        <div className="mb-5">
          <label
            htmlFor="name"
            className ="block text-gray-700 uppercase font-bold "
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Type your name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-extralight"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            title="This field only accepts letters and spaces"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold "
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Type your Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-extralight"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold "
          >
            Appointment's Date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-extralight"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-[2.25rem]">
          <label className="block text-gray-700 uppercase font-bold ">Services</label>
          <select 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={service}
            onChange={(e) => setService(e.target.value)}>
            <option className="text-center p-5 font-serif" value=""> ....... </option>
            <option className="text-center bg-white p-5 font-extralight"  value="Haircut">Haircut</option>
            <option className="text-center bg-white p-5 font-extralight" value="Shave">Head Shave</option>
            <option className="text-center bg-white p-5 font-extralight" value="Beard">Beard</option>
            <option className="text-center bg-white p-5 font-extralight" value="Eyebrow">Eyebrow threading</option>
            <option className="text-center bg-white p-5 font-extralight" value="Color">Hair Color</option>
            <option className="text-center bg-white p-5 font-extralight" value="Massage">Head Massage</option>
            <option className="text-center bg-white p-5 font-extralight" value="Facial">Black Mask</option>
          </select>
        </div>
        <input
          type="submit"
          className="bg-[#733A00] w-full p-3 text-white uppercase font-bold hover:bg-[#C48647] cursor-pointer transition rounded-md"
          value ={ customer.id ? 'Edit' : 'Save' }
        />
      </form>
    </div>
  );
};

export default Form;
