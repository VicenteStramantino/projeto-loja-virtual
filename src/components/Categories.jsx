import Category from "./Category"

const Categories = () => {

    return (
        <section className="categories">
            <h2>Categorias</h2>

            <div className="category-list">
                <Category nm_categoria={"Roupas"} Img_categoria={"👕"} />
                <Category nm_categoria={"Eletrônicos"} Img_categoria={"📱"} />
                <Category nm_categoria={"Calçados"} Img_categoria={"👟"} />
                <Category nm_categoria={"Acessórios"} Img_categoria={"🎒"} />
            </div>
        </section>
    )
}

export default Categories