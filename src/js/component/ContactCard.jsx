import React from "react"


const ContactCard = ({photo, key, contact}) => {

    const { full_name, email, phone, address, id} = contact

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="text-center mt-5">
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={photo} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{full_name}</h5>
                                <p className="card-text"><i className="fa-solid fa-location-dot"></i>{address}</p>
                                <p className="card-text"><i className="fa-solid fa-phone"></i>{phone}</p>
                                <p className="card-text"><i className="fa-solid fa-envelope"></i>{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ContactCard
