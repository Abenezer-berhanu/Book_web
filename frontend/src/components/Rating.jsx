import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const Rating = ({ value, text}) => {
  return (
    <div className="rating" style={{ display : 'flex', justifyContent : 'space-between', paddingRight: '1em'}}>
      <span>
      <span style={{ color: '#FA8232'}}>
        {value >= 1 ? <FaStar/> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>
      <span style={{ color: '#FA8232'}}>
        {value >= 2 ? <FaStar/> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>
      <span style={{ color: '#FA8232'}}>
        {value >= 3 ? <FaStar/> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>
      <span style={{ color: '#FA8232'}}>
        {value >= 4 ? <FaStar/> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>
      <span style={{ color: '#FA8232'}}>
        {value >= 5 ? <FaStar/> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>
      </span>
      {text && <span className="rating-text"><strong>{`${text} like`}</strong></span>}
    </div>
  )
}

export default Rating