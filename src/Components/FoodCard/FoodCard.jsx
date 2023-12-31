const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <p className="bg-slate-900 right-0 mt-4 mr-4 px-4 text-white absolute">{price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-orange-300 bg-slate-100 border-b-4 mt-4">Add to Card</button>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;