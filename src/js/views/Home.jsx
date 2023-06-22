import React, { useEffect } from 'react'
import { Context } from '../store/appContext'
import { useContext } from 'react'
import ContactCard from "../component/ContactCard.jsx"
import miImagen from '/workspaces/Karai-ContactList/src/img/karai.png'



const Home = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getAgenda()
    }, [store.nombreDeAgenda])

    return (

        <div>
            <h1>Home</h1>
            <input type="text" value={store.nombreDeAgenda} onChange={(e) => actions.changeGlobalAgendaName(e.target.value)} />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-dark me-md-2" type="button">Add new contact</button>
            </div>
            {
                store.agenda.map((element, index) => (
                    <ContactCard 
                        photo={miImagen}
                        key={index}
                        contact={element}
                    />
                ))
            }

            


            {/* <ContactCard /> */}
        </div>
    )

}

export default Home