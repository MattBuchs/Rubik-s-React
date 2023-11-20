import articles from "../../data/cube.json";
import cubeImg from "../../assets/3x3.jpg";

export default function Cube({
    handleBasket,
    addItems,
    activeOrder,
    setActiveOrder,
    deleteItem,
    notification,
}) {
    return (
        <>
            <section>
                <ul className="flex justify-center flex-wrap w-4/5 m-auto mt-12">
                    {articles.map((article) => (
                        <li
                            key={article.id}
                            className="bg-slate-100 w-96 border m-4 px-8 py-4 cursor-pointer rounded-sm shadow-md"
                        >
                            <h3 className="text-center text-xl font-medium">
                                {article.name}
                            </h3>
                            <img
                                className="mt-3"
                                src={cubeImg}
                                alt={article.name}
                            />
                            <p className="mt-2 text-justify">
                                {article.description}
                            </p>
                            <p className="mt-1 text-xl text-red-900 text-right">
                                {article.price}
                            </p>
                            <div className="text-center mt-5">
                                <button
                                    onClick={() => handleBasket(article.id)}
                                    className=" bg-blue-900 text-white px-6 py-2 rounded shadow transition hover:bg-blue-950"
                                >
                                    Ajouter au panier
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <div
                className={
                    activeOrder
                        ? "hidden"
                        : "w-full h-full bg-black/90 flex justify-center items-center fixed top-0"
                }
            >
                <div className="bg-slate-300 w-4/6 h-3/6 rounded relative overflow-auto">
                    <h3 className="text-2xl text-center font-medium mt-2 mb-6">
                        Récapitulatif de la commande
                    </h3>
                    <ul className="flex flex-wrap justify-center">
                        {addItems.map((item) => (
                            <li
                                key={"command_" + item.id}
                                className="flex w-2/5 border mx-4 my-1 p-2 rounded-sm shadow"
                            >
                                <img
                                    className="w-2/5"
                                    src={cubeImg}
                                    alt={item.name}
                                />
                                <div className="ml-3 mt-3">
                                    <h4>{item.name}</h4>
                                    <p>{item.price}</p>
                                    <p>Quantité : {item.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center my-10">
                        <button
                            onClick={deleteItem}
                            className="bg-blue-900 text-white px-6 py-2 rounded shadow transition hover:bg-blue-950"
                        >
                            Payer
                        </button>
                    </div>
                    <button
                        onClick={() => setActiveOrder(!activeOrder)}
                        className="absolute top-2 right-2 text-3xl bg-red-600 text-white px-3 rounded"
                    >
                        X
                    </button>
                </div>
            </div>

            <div
                className={
                    "bg-green-500 fixed top-0 right-1/2 translate-x-1/2 px-6 py-4 rounded transition " +
                    (notification ? "-translate-y-full" : "translate-y-0")
                }
            >
                <p>Merci d&apos;avoir commander</p>
            </div>
        </>
    );
}
