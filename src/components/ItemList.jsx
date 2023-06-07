import Item from "./Item";

const ItemList = ( { productos }) => {
    return (
        <div className="container">
            <h1 className="main-title">Productos</h1>
            <div className="productos">
                { productos.map((prod) => <Item producto={prod} key={prod.id} />)}

            </div>
        </div>
    );
}

export default ItemList;
