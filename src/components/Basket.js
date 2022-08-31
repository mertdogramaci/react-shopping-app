function Basket(probs) {
    
    function Increase(id) {
        const newBasket = [...probs.basket];
        const index = newBasket.findIndex((item) => (item.id === id));
        
        newBasket[index].counter += 1;
        newBasket[index].total += newBasket[index].price;

        probs.setBasketTotal(probs.basketTotal + newBasket[index].price);

        probs.setBasket(newBasket);
    }

    function Decrease(id) {
        let newBasket = [...probs.basket];
        const index = newBasket.findIndex((item) => (item.id === id));
        probs.setBasketTotal(probs.basketTotal - newBasket[index].price);
        
        if (newBasket[index].counter > 1) {
            newBasket[index].counter -= 1;
            newBasket[index].total -= newBasket[index].price;

        } else {
            newBasket = newBasket.filter(item => (item.id !== id));
        }

        probs.setBasket(newBasket);
    }

    function Empty() {
        if (probs.basket.length === 0) {
            return (
                <div>
                    Your bag is empty
                </div>
            );
        }
    }

    function Purchase() {
        probs.setBasket([]);
        probs.setBasketTotal(0);
    }

    return (
        <div className="basket">
            <h1>Your Cart</h1>
            <div>
                {probs.basket.map((element) => {
                    return (
                        <div className="basket-item-infos" key={element.id}>
                            <span>Product Name: <span className="basket-item-name">{element.item}</span></span>
                            <span>Product Price: <span className="basket-item-price">{element.price}</span></span>
                            <span>
                                <button className="inc-dec-buttons" onClick={() => (Decrease(element.id))}>-</button>
                                Quantity: {element.counter}
                                <button className="inc-dec-buttons" onClick={() => (Increase(element.id))}>+</button>
                            </span>
                            <span>Total Price of the Product: <span>{element.total}</span></span>
                        </div>
                    );
                })}
            </div>
            <div>
                {Empty()}
            </div>
            <div>
                Cart Total: {probs.basketTotal}
            </div>
            <div>
                <button disabled={probs.basket.length<1} className="buy-button" onClick={() => (Purchase())}>Purchase</button>
            </div>
        </div>
    );
}

export default Basket;