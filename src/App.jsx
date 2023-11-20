import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cube from "./components/Cube/Cube";
import articles from "./data/cube.json";

function App() {
    const [addItems, setAddItems] = useState([]);
    const [activeOrder, setActiveOrder] = useState(true);
    const [basket, setBasket] = useState(true);
    const [notification, setNotification] = useState(true);
    const quantity = 1;

    function handleBasket(id) {
        const checkItem = addItems.filter((item) => item.id === id);
        if (checkItem.length === 1) {
            return setAddItems((addItems) =>
                addItems.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        }

        const article = articles.filter((elt) => elt.id === id);

        setAddItems([
            ...addItems,
            {
                id: article[0].id,
                name: article[0].name,
                price: article[0].price,
                quantity,
            },
        ]);
    }

    function supprItem(id) {
        setAddItems(addItems.filter((item) => item.id !== id));
    }

    function decreaseQuantity(id) {
        setAddItems((addItems) =>
            addItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    }

    function increaseQuantity(id) {
        setAddItems((addItems) =>
            addItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }

    function handleOrder() {
        setActiveOrder(!activeOrder);
    }

    function deleteItem() {
        setAddItems([]);
        setActiveOrder(!activeOrder);
        setBasket(!basket);
        setNotification(false);

        setTimeout(() => {
            setNotification(true);
        }, 2000);
    }

    return (
        <>
            <Header
                addItems={addItems}
                supprItem={supprItem}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                handleOrder={handleOrder}
                basket={basket}
                setBasket={setBasket}
            />
            <Cube
                handleBasket={handleBasket}
                addItems={addItems}
                activeOrder={activeOrder}
                setActiveOrder={setActiveOrder}
                deleteItem={deleteItem}
                notification={notification}
            />
            <Footer />
        </>
    );
}

export default App;
