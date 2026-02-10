import Hero from "../components/Hero";
import About from "../components/About"; // Add this import
import Office from "../components/Office";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
return (
<main>
<Hero />
<About />
<Office />
<Services />
<Contact /> 
</main>
);
}