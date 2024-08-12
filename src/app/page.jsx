import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Products />
      <Testimonial />
    </main>
  );
}