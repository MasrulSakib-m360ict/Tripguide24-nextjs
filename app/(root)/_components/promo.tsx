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
        backgroundColor: "#FAF5EE",
        backgroundImage: "url(images/bg/bottom-shape.webp)",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        padding: "58px 0px 50px",
      }}
      className="md:block "
    >
      <Container className="">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {[
            {
              img: "/images/shortPromo/1.png",
              title: "Flight Booking",
              desc: "Seamlessly book flights to your dream destinations with the best rates and flexible options.",
            },
            {
              img: "/images/shortPromo/2.png",
              title: "Hotel Deals",
              desc: "Stay in comfort wherever you go—discover handpicked hotels tailored to every budget.",
            },
            {
              img: "/images/shortPromo/3.png",
              title: "Visa Support",
              desc: "Let us handle your visa requirements with expert guidance for a hassle-free journey abroad.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1"
            >
              <div className="bg-gradient-to-tr from-primary to-secondary p-4 rounded-full mb-4 shadow-md">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain rounded-full w-16 h-16"
                />
              </div>
              <h2
                className={`${rubik.className} text-xl font-semibold text-[#222] mb-2`}
              >
                {item.title}
              </h2>
              <p className="text-sm text-[#6a6a6a]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Promo;
