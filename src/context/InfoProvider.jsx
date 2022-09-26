import { useState, createContext } from "react";
import IconCut from "/img/cut.png";
import IconBeard from "/img/beard.png";
import IconBlack from "/img/black.png";
import IconColor from "/img/color.png";
import IconEyebrow from "/img/eyebrow.png";
import IconMassage from "/img/massage.png";
import IconShave from "/img/shave.png";

const InfoContext = createContext();

const InfoProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  const Icons = {
    Haircut: IconCut,
    Beard: IconBeard,
    Facial: IconBlack,
    Color: IconColor,
    Eyebrow: IconEyebrow,
    Massage: IconMassage,
    Shave: IconShave,
  };

  return (
    <InfoContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        date,
        setDate,
        service,
        setService,
        Icons
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export { InfoProvider };
export default InfoContext;
