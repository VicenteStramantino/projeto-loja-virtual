const Product = ({img, categoria, nome, qt_estrelas, preco, setCartCount}) => {
    
    const addToCart = () => {
        setCartCount(prev => prev + 1)
    }

    const estrelas = (qt_estrelas) => {
        const estrelasCheias = "⭐".repeat(Math.floor(qt_estrelas))
        const estrelasVazias ="☆".repeat(5 - Math.floor(qt_estrelas))

        return estrelasCheias + estrelasVazias
    }

     return (
        <div className="product-card">
            <img src={img} alt={nome}/>
            <p className="product-category">{categoria}</p>
            <h3>{nome}</h3>
            <p className="product-rating">{estrelas(qt_estrelas)} ({qt_estrelas})</p>
            <p className="product-price">R$ {preco}</p>
            <button className="btn-secondary" onClick={addToCart}>Adicionar ao carrinho</button>
        </div>
    )
}

export default Product