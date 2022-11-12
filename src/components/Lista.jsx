import React from "react";
const Lista = ({ listData }) => {
	return (
		<ul className="list-group my-3">
			{
				listData.map((el, idx) => {
					return (<li className="list-group-item" key={idx}>{el}</li>)
				})
			}
		</ul>
	)
}
export default Lista;