function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } else if (props.location === "Norway") {
        badgeText = "NORWAY"
    }
    return (
        <div className="card">

            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={props.coverImg} />
            <div className=" card--stats">
                <img className="card--star" alt="star" src="https://upload.wikimedia.org/wikipedia/commons/d/da/URSS_aviation_white_bordered_red_star.svg" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>

            <p>{props.title}</p>
            <p> <span className="bold">From ${props.price}</span> /  person</p>

        </div>
    )
}

export default Card;