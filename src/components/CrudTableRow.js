import React from 'react';

const CrudTableRow = ({ el }) => {
	return (
		<tr>
			<td>{el.name}</td>
			<td>{el.region}</td>
			<td>
				<button>Editiar</button>
				<button>Eliminar</button>
			</td>
		</tr>
	);
};

export default CrudTableRow;
