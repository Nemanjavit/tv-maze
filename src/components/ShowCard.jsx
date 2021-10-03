import React from "react";
import { Col } from "react-grid-system";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MediaBlock, RectShape } from "react-placeholder/lib/placeholders";
import ReactPlaceholder from "react-placeholder/lib";

const ShowCard = ({ show }) => {
	const [cardRotate, setCardRotate] = useState(false);
	const [pulsing, setPulsing] = useState(false);

	const cardFlip = () => {
		setCardRotate(!cardRotate);
	};

	const addToFavorites = (e) => {
		e.stopPropagation();
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
							<div onClick={(e) => addToFavorites(e)} className="favorites">
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
