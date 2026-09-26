import Product from "./Product"

const Products = ({setCartCount}) => {

    const addToCart = () => {
        setCartCount(prev => prev + 1)
    }

     return (
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>
            <div className="product-list">
                <Product img={"https://placehold.co/240x240/aa3bff/ffffff?text=Tenis"} categoria={"Calçados"} nome={"Tênis Esportivo Masculino"} qt_estrelas={4.5} preco={"R$ 299,90"} />
                <Product img={"https://placehold.co/240x240/3b82f6/ffffff?text=Fone"} categoria={"Eletrônicos"} nome={"Fone de Ouvido Bluetooth"} qt_estrelas={4.8} preco={"R$ 149,90"} />
                <Product img={"https://placehold.co/240x240/22c55e/ffffff?text=Mochila"} categoria={"Acessórios"} nome={"Mochila para Notebook"} qt_estrelas={4.2} preco={"R$ 189,90"} />
                <Product img={"https://placehold.co/240x240/f97316/ffffff?text=Relogio"} categoria={"Eletrônicos"} nome={"Relógio Smartwatch Masculino"} qt_estrelas={4.7} preco={"R$ 349,90"} />
            </div>
        </section>
    )
}

export default Products