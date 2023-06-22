const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [],
			idToUpload: "",
			nombreDeAgenda: ""
		},
		actions: {
			getAgenda: async () => {
				try{
					const {nombreDeAgenda} = getStore()
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${nombreDeAgenda}`)
					if (!result.ok){
						throw new Error('Error request')
					}
					const data = await result.json()
					console.log('Datos cargados:', data)
					const store = getStore()
					setStore({...store, agenda: data}) //traemos propiedades de store al objeto nuevo
				}catch(error){
					console.log('Error al cargar agenda', Error)
				}
			},
			changeGlobalAgendaName: (value) => {
				const store = getStore()
				setStore({...store, nombreDeAgenda: value})
			}


		}
	};
};

export default getState;
