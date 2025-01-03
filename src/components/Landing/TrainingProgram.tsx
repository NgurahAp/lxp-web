import { inHouseCards, pelatihanPubliCards, programPelatihanCards } from "../../assets/landingData";

export const TrainingProgram = () => {
  return (
    <>
      <section className="w-11/12  mx-auto md:py-14 py-0 ">
        <h1 className="md:text-5xl text-3xl text-center text-[#106FA4] px-8 font-bold pb-14">
          Program Pelatihan dan
          <span className="text-[#FAB317]"> LMS M-Knows</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {programPelatihanCards.map((card) => (
              <div className="md:w-96 md:mx-0 mx-5 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img className="rounded-t-lg w-full" src={card.icon} alt="" />
                </a>
                <div className="px-5 md:py-10 py-5">
                  <a href="#">
                    <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 ">
                      {card.title}
                    </h5>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* InHouse Training */}
      <section className="w-11/12  mx-auto md:py-14 ">
        <h1 className="md:text-5xl text-3xl text-center text-[#106FA4] px-8 font-bold md:py-14 py-8">
          In House Training
          <span className="text-[#FAB317]"> LMS M-Knows</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {inHouseCards.map((card) => (
              <div className="md:w-96 md:mx-0 mx-5 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-60"
                    src={card.image}
                    alt=""
                  />
                </a>
                <div className="px-5 py-5 flex items-end ">
                  <a href="#">
                    <h5 className="mb-2 md:text-2xl font-bold  tracking-tight text-gray-900 ">
                      {card.title}
                    </h5>
                    <p className="md:text-lg text-sm">{card.pt}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-11/12  mx-auto py-14 ">
        <h1 className="md:text-5xl text-3xl text-center text-[#106FA4] px-8 font-bold md:py-8 pb-10">
          Pelatihan
          <span className="text-[#FAB317]"> Publik</span>
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {pelatihanPubliCards.map((card) => (
              <div className="md:w-96 md:mx-0 mx-5 bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-60"
                    src={card.image}
                    alt=""
                  />
                </a>
                <div className="px-5 py-3 md:py-5 flex items-end ">
                  <a href="#">
                    <h5 className="mb-1 md:mb-2 md:text-2xl font-bold  tracking-tight text-gray-900 ">
                      {card.title}
                    </h5>
                    <p className="text-sm md:text-lg">{card.pt}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
