import Image from "next/image";
import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { ArrowDown01Icon, ArrowDown02Icon, ArrowRight02Icon } from "hugeicons-react";
import Grid from "./components/Grid";
import MagicButton from "./components/ui/MagicButton";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name:'Home', link:'/', icon: <ArrowDown01Icon /> }
        ]} />
        <Hero />

        <Grid />
        
       
            <MagicButton 
                          title="Button" 
                          icon={<ArrowRight02Icon size={32}/>} position={'right'}/> 

      


        
      </div>
    </main>
  );
}
