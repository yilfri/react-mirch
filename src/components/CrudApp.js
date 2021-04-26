import React, { useState } from 'react';
import CrudForm from './CrudForm.js';
import { CrudTable } from './CrudTable.js';

const initialDb = [
	{ id: 1, name: 'Rumble', region: 'Ciudad de Bandle' },
	{ id: 2, name: 'Riven', region: 'Noxus' },
	{ id: 3, name: 'Ashe', region: 'Freljord' },
	{ id: 4, name: 'Gangplank', region: 'Aguas Estancadas' },
	{ id: 5, name: 'Rell', region: 'Shurima' },
	{ id: 6, name: 'Taric', region: 'Targon' },
	{ id: 7, name: 'Sejuani', region: 'Freljord' }
];

const CrudApp = () => {
	const [Db, setDb] = useState(initialDb);
	const [dataToEdit, setDataToEdit] = useState(null);

	const createData = (data) => {
		data.id = Date.now();

		setDb([...Db, data]);
	};

	const updateData = (data) => {};

	const deleteData = (id) => {};

	return (
		<div>
			<h2>CRUD APP</h2>
			<CrudForm
				createData={createData}
				updateData={updateData}
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
			/>
			<CrudTable data={Db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
		</div>
	);
};

export default CrudApp;
