import SearchEngine from "@/app/(flight)/flight/_components/search-engine";
import VisaForm from "@/app/(visa)/_components/visa-form";
import Container from "@/components/container";
import { FlipWords } from "@/components/ui/flip-words";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, FileText, Map, Plane } from "lucide-react";
import { Pacifico } from "next/font/google";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const Cursive = Pacifico({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const Hero = () => {
  const words = ["Affordable", "Convenient", "Fast", "Trusted"];
  const tabs = [
    { value: "flight", label: "Flight", icon: Plane },
    { value: "visa", label: "Visa", icon: FileText },
    { value: "hotel", label: "Hotel", icon: Building2 },
    { value: "tour", label: "Tour", icon: Map },
  ];

  const searchParams = useSearchParams();
  const router = useRouter();
  const tab = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState(tab || "flight");

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    router.push(`/?tab=${value}`);
  };

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  return (
    <div className="bg-cover bg-center bg-[url('/images/pexels-austin-zhang-925030-2441844.jpg')]  relative min-h-[75vh] flex items-center">
      <Container className="relative z-10 ">
        <div className="flex  items-center mb-4 mt-20">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Explore the <span className="">world</span> with ease
          </h1>
          <div
            className={`${Cursive.className} text-primary text-5xl font-bold hidden md:block`}
          >
            <FlipWords words={words} duration={2000} />
          </div>
        </div>

        <div className=" mt-28 md:mt-16">
          <Tabs
            value={activeTab}
            onValueChange={handleTabClick}
            className="w-full"
          >
            <TabsList className="grid h-auto w-full grid-cols-2 sm:grid-cols-4 bg-white shadow-md rounded-none border-b-2 border-primary p-0">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center justify-center p-4 rounded-none transition-all duration-500 ease-in-out 
                 hover:bg-gray-100 hover:text-primary 
                 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <tab.icon className="mr-2 h-5 w-5" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="relative w-full shadow-sm">
              <div className="relative h-full bg-white ">
                {activeTab === "flight" ? (
                  <SearchEngine />
                ) : activeTab === "visa" ? (
                  <VisaForm />
                ) : (
                  <>
                    <div className="h-40 flex items-center justify-center">
                      <p className="text-2xl text-gray-400">Coming Soon</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
