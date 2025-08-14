import Image from "next/image"
import { Button } from '@/components/ui/button'
import WhyHillRoast from "./components/Whyhillroast"
import BrewGrooveKit from "./components/BrewGrooveKit"

export default function Home() {
  return (
    <>
      <section className="section grid md:grid-cols-2 my-10 gap-6 items-center container m-auto px-6">
        <div>
          <h1 className="text-[2.5rem] leading-[1.05] font-semibold">Curated records. Precision brews. <span className="text-sun">Find your groove.</span></h1>
          <p className="note max-w-prose mt-2">A coffee and music experience from Dehradun. Specialty beans meet vinyl‑room sessions for the perfect creative flow.</p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <Button asChild>
              <a href="#groove">Find Your Groove</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#shop">Shop Coffee</a>
            </Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-border">
          <Image src="/photo-1517705008128-361805f42e86.jpg" alt="Coffee cup and vinyl" width={1200} height={900} />
        </div>
      </section>
      <WhyHillRoast></WhyHillRoast>
      <BrewGrooveKit></BrewGrooveKit>
    </>
  );
}
