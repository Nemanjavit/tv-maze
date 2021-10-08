import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RectShape } from "react-placeholder/lib/placeholders";
import { ShowContext } from "../context/GlobalState";


const ShowCard = ({ show }) => {
	const [cardRotate, setCardRotate] = useState(false);
	const [pulsing, setPulsing] = useState(false);
	const context = useContext(ShowContext);
	const { favorites, setFavorites } = context;

	const cardFlip = () => {
		setCardRotate(!cardRotate);
	};

	console.log('favorites', favorites);

	const addToFavorites = (e, show) => {
		e.stopPropagation();
		if (favorites.some(favorite => favorite.id === show.id)) {
			let newList = favorites.filter(favorites => favorites.id !== show.id)
			setFavorites(newList)
		} else {
			setFavorites([...favorites, show])
		}

		setPulsing(!pulsing);
	};

	return (
		<div
			onClick={cardFlip}
			className={`showcard ${cardRotate ? "cardflip" : ""}`}
		>
			<div className="showcard__container">
				<div className="showcard__front">
					{show.image ? (
						<img className="showcard__image" src={show.image.medium} alt="" />
					) : (
						<RectShape className="showcard__placeholder" />
					)}
				</div>
				<div className="showcard__back">
					<div className="showcard__back__body">
						<h3 className="showcard__back__name">{show.name}</h3>
						<p className="showcard__back__language">Languge:{show.language}</p>

						<div className="showcard__back__icons">
							<div className="rating">
								<AiOutlineStar />
								<span> {show.rating.average}</span>
							</div>
							<div onClick={(e) => addToFavorites(e, show)} className="favorites">
								<AiOutlineHeart className="hiddenHeart" />

								<AiOutlineHeart
									className={`emptyHeart ${pulsing ? "pulsingHeart" : ""} `}
								/>
							</div>
						</div>
					</div>
					<Link to={`/shows/${show.id}`} className="showcard__back__link">
						View more
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ShowCard;
