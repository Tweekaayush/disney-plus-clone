import { useNavigate } from "react-router-dom"

const CategoryCard = ({genre, h, s, l}) => {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/browse/category/${genre}`)
  }

  return (
    <div className="card-container-2" style={{backgroundColor: `hsl(${h}, ${s}%, ${l}%)`}} onClick={handleClick}>
      <div className="card-2-container">
        <h1 className='heading-text-3'>{genre}</h1>
      </div>
    </div>
  )
}

export default CategoryCard