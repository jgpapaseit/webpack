import React, { useState } from "react";
import Formulario from "./Formulario";
import Lista from "./Lista";
import Title from "./Title";
const App = () => {
	const [datos, setDatos] = useState([]);
	const newData = (texto) => {
		const newDataList = [...datos, texto];
		setDatos(newDataList);
	}
	return (
		<>
			<div className="container my-3">
				<Title title="Formulario:" />
				<Formulario addData={newData} />
				<Title title="Lista:" />
				<Lista listData={datos} />
			</div>
		</>
	);
};
export default App;