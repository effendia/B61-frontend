import { Link } from "react-router-dom";
import { Button } from "../Components/ui/button";


export default function Header() {
    return (
     <header className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">🧡 Amel Store</h1>
        <nav className="space-x-2">
            <Link to="/"> <Button variant="secondary">Home</Button></Link>
            <Link to="/products"> <Button variant="secondary">Products</Button></Link>
            <Link to="/cart"> <Button variant="secondary">Cart</Button></Link>
        </nav>
      </header>
    );
}