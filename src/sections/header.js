import Navigation from "../components/navigation/navigation";

const Header = () => {
  return (
    <header className="flex justify-between p-4 sticky top-0 w-full">
      <div className="logo font-dancing text-3xl">Razvan Plîngu</div>
      <Navigation />
    </header>
  );
};

export default Header;
