import React, { useState } from "react";
const Formulario = ({ addData }) => {
	const [texto, setTexto] = useState("");
	const changeHandle = (ev) => {
		setTexto(ev.target.value);
	}
	const submitHandle = (ev) => {
		ev.preventDefault();
		if (texto !== "") {
			addData(texto);
			setTexto("");
		}
		return false;
	}
	return (
		<form className="my-3" onSubmit={submitHandle}>
			<div className="row m-0">
				<input type="text" className="form-control me-3 col" value={texto} onChange={changeHandle} />
				<input type="submit" className="btn btn-primary col-auto" value="Enviar" />
			</div>
		</form>
	)
}
export default Formulario;