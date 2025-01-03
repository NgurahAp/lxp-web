import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import { fiturCards } from "../../assets/landingData";

export const AllFeatures = () => {
  return (
    <div className="h-full w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1"
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-[#9CA3AF] md:text-base text-sm font-semibold">
          Semua Fitur
        </span>
      </div>
      <Header />
      <div className="flex flex-wrap gap-5 py-8">
        {fiturCards.map((card) => (
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start space-y-4 w-[24%]">
            <img src={card.icon} alt="" />
            <h2 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h2>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
