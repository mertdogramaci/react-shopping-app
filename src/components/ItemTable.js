function ItemTable(probs) {

    const items = [
        {id: 0, item: "Phone", price: 100, counter: 1, total: 100},
        {id: 1, item: "Computer", price: 250, counter: 1, total: 250},
        {id: 2, item: "Car", price: 1000, counter: 1, total: 1000}
    ];

    function AddBasket(id) {
        const newBasket = [...probs.basket];
        const index = newBasket.findIndex((item) => (item.id === id));
        if (index === -1) {
            newBasket.push(items.find((item) => (item.id === id)));
            probs.setBasketTotal(probs.basketTotal + items[id].price)
        } else {
            newBasket[index].counter += 1;
            newBasket[index].total += newBasket[index].price;
            probs.setBasketTotal(probs.basketTotal + newBasket[index].price);
        }
        probs.setBasket(newBasket);
    }

    return (
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Phone</th>
                    <th>100</th>
                    <th><button className="add-basket-button" onClick={() => (AddBasket(0))}>Add to Cart</button></th>
                </tr>
                <tr>
                    <th>Computer</th>
                    <th>250</th>
                    <th><button className="add-basket-button" onClick={() => (AddBasket(1))}>Add to Cart</button></th>
                </tr>
                <tr>
                    <th>Car</th>
                    <th>1000</th>
                    <th><button className="add-basket-button" onClick={() => (AddBasket(2))}>Add to Cart</button></th>
                </tr>
            </tbody>
        </table>
    );
}

export default ItemTable;