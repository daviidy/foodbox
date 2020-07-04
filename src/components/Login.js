import React from 'react'

const AdminForm = ({authenticate}) => {

    
    return (
        <div className='login'>
            <h2>Connecte-toi</h2>
            <button onClick={authenticate} className="facebook-button">
                Me connecter avec Facebook
            </button>
            
        </div>

    )
}

export default AdminForm
