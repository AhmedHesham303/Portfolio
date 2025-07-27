import NavBar from "../components/NavBar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  // return <div className="min-h-screen">Home</div>;
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <NavBar />
    </div>
  );
}

export default Home;
