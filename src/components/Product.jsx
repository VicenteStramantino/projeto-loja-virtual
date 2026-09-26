const Product = ({img, categoria, nome, estrelas, preco, setCartCount}) => {
    
    const addToCart = () => {
        setCartCount(prev => prev + 1)
    }
     return (
        <div className="product-card">
            <img src="https://placehold.co/240x240/aa3bff/ffffff?text=Tenis" alt="Tênis esportivo" />
            <p className="product-category">{categoria}</p>
            <h3>{nome}</h3>
            <p className="product-rating">{estrelas}(4.5)</p>
            <p className="product-price">R$ {preco}</p>
            <button className="btn-secondary" onClick={addToCart}>Adicionar ao carrinho</button>
        </div>
    )
}

export default Product