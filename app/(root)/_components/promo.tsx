import Container from "@/components/container";
import { Rubik } from "next/font/google";
import Image from "next/image";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

const Promo = () => {
  return (
    <div
      style={{
        // backgroundColor: "#FAF5EE",
        // backgroundImage: "url(images/bg/bottom-shape.webp)",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        padding: "58px 0px 50px",
      }}
      className="md:block "
    >
      <Container className="">
        <div className="grid md:grid-cols-3 grid-cols-1 items-start 2xl:gap-8 gap-4">
          <div className="box flex items-center 2xl:gap-6 gap-4">
            <div className="bg-secondary shadow-xl rounded-full p-4">
              <Image
                src={"/images/shortPromo/1.png"}
                alt="ticket.png"
                width={120}
                height={120}
              />
            </div>
            <div>
              <h1
                className={`${rubik.className} text-2xl font-bold mb-1 text-[#363539]`}
              >
                AIR TICKET
              </h1>
              <p className="text-sm text-[#7A7A7A]">
                We provide the best ticketing solution to our clients for
                reservation and ticketing across the global.
              </p>
            </div>
          </div>
          <div className="box flex items-center  gap-4">
            <div className="bg-secondary shadow-xl rounded-full p-4">
              <Image
                src={"/images/shortPromo/2.png"}
                alt="ticket.png"
                width={120}
                height={120}
              />
            </div>
            <div>
              <h1
                className={`${rubik.className} text-2xl font-bold mb-1 text-[#363539] whitespace-nowrap`}
              >
                HOTEL RESERVATION
              </h1>
              <p className="text-sm text-[#7A7A7A]">
                We offered the best deal to our clients for hotel reservations
                and always prefer the best hotels for our clients.
              </p>
            </div>
          </div>
          <div className="box flex 2xl:items-center xl:items-start  gap-4">
            <div className="bg-secondary shadow-xl rounded-full p-4">
              <Image
                src={"/images/shortPromo/3.png"}
                alt="ticket.png"
                width={120}
                height={120}
              />
            </div>
            <div>
              <h1
                className={`${rubik.className} text-2xl font-bold mb-1 text-[#363539]`}
              >
                VISA ASSISTANCE
              </h1>
              <p className="text-sm text-[#7A7A7A]">
                We always support and assist our valued able clients for Visa
                processing. we provide the best services to get VISA more
                easily.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Promo;
