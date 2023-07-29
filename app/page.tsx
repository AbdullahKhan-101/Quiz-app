"use client";
import { useRouter } from "next/navigation";
import HomepageImage from "../assets/home-pic.png";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Home = () => {
  const router = useRouter();
  const handleButtonClick = () => router.push("/quiz");

  return (
    <div className="text-center">
      <p className="text-white p-4">
        Do you have what it takes to become the React-Quiz master?
      </p>
      <Image
        alt="home-page-img"
        src={HomepageImage}
        className="max-w-[700px] w-full rounded-[10px]"
      />
      <p className="text-pink pt-2 pb-8 text-sm ">
        Image from Unsplash by Milad Fakurian
      </p>
      <Button text="Start Quiz" onClick={handleButtonClick} />
    </div>
  );
};

export default Home;
