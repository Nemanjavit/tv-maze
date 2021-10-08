import React from "react";
import { Col, Row } from "react-grid-system";
import { RectShape } from "react-placeholder/lib/placeholders";


const SingleShowCast = ({ cast }) => {

	return (
		<Row className="cast">
			{
				cast.map(item => {
					return (
						<Col key={item.person.id} xs={6} lg={6}>

							<Row className="cast__row" align="center" >
								<Col xs={6} lg={4}>
									{
										item.character.image ?
											(<img alt="actor's face" className="cast__img" src={item.character.image.medium} />)
											: (<RectShape className="cast__placeHolder" />)
									}

								</Col>
								<Col xs={6} lg={8}>
									<p className="cast__character">{item.character.name}</p>
									<p className="cast__as">as</p>
									<p className="cast__name">{item.person.name}</p>
								</Col>
							</Row>
						</Col>
					)
				})
			}
		</Row>
	)
};

export default SingleShowCast;
