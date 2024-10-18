"use client";

export default function LandingPageAbout() {
  const imgBack = "/imgback.png";

  return (
    <>
      <div className="relative w-full flex justify-center mt-20">
        {/* Background image */}
        <img className="w-full" src={imgBack} alt="" />

        {/* SVG Wave placed slightly above the bottom */}
        <div className="absolute bottom-[-90px] xl:bottom-[-90px] lg:bottom-[-55px]  md:bottom-[-46px] left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffff"
              fillOpacity="1"
              d="M0,192L26.7,208C53.3,224,107,256,160,250.7C213.3,245,267,203,320,176C373.3,149,427,139,480,160C533.3,181,587,235,640,234.7C693.3,235,747,181,800,170.7C853.3,160,907,192,960,202.7C1013.3,213,1067,203,1120,208C1173.3,213,1227,235,1280,234.7C1333.3,235,1387,213,1413,202.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative flex flex-col items-center justify-center xl:justify-center xl:gap-[10vh] w-full max-w-[1440px]  px-4 mobile:px-10 pb-20 sm:pb-28 xl:pb-0 sm:px-[70px] overflow-hidden" id="about">
        {/* Text content starts here */}
        <div className="flex flex-col gap-8 lg:gap-14 max-w-[604px] z-20 mt-4">
          <div className="flex flex-col items-center sm:items-start sm:gap-4">
            <h2 className="font-medium text-center sm:text-start text-xl sm:text-3xl">
              Promofix:
            </h2>
            <h1 className="font-black text-center sm:text-start text-4xl sm:text-[35px] mb-2 sm:mb-4  bg-gradient-to-r from-sky-800 to-red-500 bg-clip-text text-transparent">
              SOLUÇÕES GRÁFICAS E DE COMUNICAÇÃO
            </h1>
            <p className="font-regular text-base text-center sm:text-start max-w-[90%] sm:text-xl">
              Há 15 anos temos como objetivo principal oferecer aos nossos
              clientes, soluções inovadoras em comunicação visual, e a total
              satisfação de suas necessidades, seja em pequenos ou grandes
              projetos.
            </p>
          </div>
          {/* Buttons or links */}
          <div className="flex flex-col sm:flex-row w-full sm:w-fit gap-5">
          </div>
        </div>
      </section>
      
    </>
  );
}
