import { useRef } from "react";
import banner from "/yoo-cube-deluxe-banner_1296x.webp?url";
import cube from "../../assets/3x3.jpg";

export default function Header({
    addItems,
    supprItem,
    decreaseQuantity,
    increaseQuantity,
    handleOrder,
    setBasket,
    basket,
}) {
    const refBasket = useRef();

    return (
        <header>
            <nav className="flex justify-between items-center h-16 bg-slate-700 text-white fixed top-0 w-full">
                <h1 className="text-3xl mx-4 font-semibold">Rubik&apos;s</h1>

                <ul className="flex">
                    <li className="mr-6 text-md hover:text-slate-300">
                        <a href="#">Accueil</a>
                    </li>
                    <li className="mr-6 text-md hover:text-slate-300">
                        <a href="#">Cubes</a>
                    </li>
                    <li
                        onClick={() => setBasket(!basket)}
                        className="mr-10 text-md hover:text-slate-300 cursor-pointer"
                    >
                        Panier
                    </li>
                </ul>

                <div
                    ref={refBasket}
                    className={
                        basket
                            ? "hidden"
                            : "bg-slate-200 w-[320px] min-h-[200px] max-h-[500px] rounded absolute top-14 right-4 shadow-xl overflow-auto"
                    }
                >
                    {addItems.length > 0 && (
                        <ul className="w-full h-ful mt-2">
                            {addItems.map((item) => (
                                <li
                                    key={"basket" + item.id}
                                    className="text-black flex px-4 py-2 border-b border-black relative transition-all"
                                >
                                    <div className="w-1/3 rounded">
                                        <img src={cube} alt={item.name} />
                                    </div>
                                    <div className="mt-2 ml-2">
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                        <div className="flex">
                                            <p>Quantité :&nbsp;</p>
                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                className="bg-white w-6 rounded"
                                            >
                                                -
                                            </button>
                                            <p className="mx-2">
                                                {item.quantity}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                className="bg-white w-6 rounded"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center bg-red-700 text-white h-6 w-6 rounded-md absolute right-2">
                                        <button
                                            onClick={() => supprItem(item.id)}
                                        >
                                            X
                                        </button>
                                    </div>
                                </li>
                            ))}

                            <li className="flex justify-center items-center h-20">
                                <button
                                    onClick={handleOrder}
                                    className="bg-blue-900 px-6 py-2 rounded shadow hover:bg-blue-950"
                                >
                                    Commander
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>

            <h2 className="text-center text-5xl mt-20 italic font-semibold">
                Rubik&apos;s
            </h2>

            <div className="w-full h-96 mt-10 border-solid border border-slate-900">
                <img
                    className="w-full h-full object-cover"
                    src={banner}
                    alt="Bannièere Rubik's"
                />
            </div>
        </header>
    );
}
