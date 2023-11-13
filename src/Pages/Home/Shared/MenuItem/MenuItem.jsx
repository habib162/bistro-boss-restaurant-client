const MenuItem = ({item}) => {

    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-2">
            <img className="w-[100px]" style={{borderRadius:'0 200px 200px 200px'}} src={image}></img>
            <div>
                <h3 className="uppercase">{name}---------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
}

export default MenuItem;