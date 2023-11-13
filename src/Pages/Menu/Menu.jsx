import { Helmet } from "react-helmet-async";
import Cover from "../Home/Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
    
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="Dessert" coverImg={dessertImg}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title="Salad" coverImg={saladImg}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={soup} title="Soup" coverImg={soupImg}></MenuCategory>

        </div>
    );
}

export default Menu;