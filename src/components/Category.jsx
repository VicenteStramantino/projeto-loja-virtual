
const Category = ({nm_categoria, Img_categoria}) => {

    return (
    <div className="category-card">
        <span className="category-icon">{Img_categoria}</span>
        <p>{nm_categoria}</p>
    </div>
    )
}

export default Category