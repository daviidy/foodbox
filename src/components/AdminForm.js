import React from 'react'

const AdminForm = ({
    id: key,
    majRecette,
    recettes,
    supprimerRecette
}) => {

    const recette = recettes[key]

    const handleChange = (e, key) => {
        const { name, value } = e.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }
    return (
        <div className='card'>
            <form className='admin-form'>
                <input onChange={e => handleChange(e, key)} value={recette.nom} type='text' name='nom' placeholder='Nom de la recette' />
                <input onChange={e => handleChange(e, key)} value={recette.image} type='text' name='image' placeholder={'Adresse de l\'image'} />
                <textarea onChange={e => handleChange(e, key)} value={recette.ingredients} name='ingredients' placeholder='Liste des ingrédients' />
                <textarea onChange={e => handleChange(e, key)} value={recette.instructions} name='instructions' placeholder='Liste des instructions' />
            </form>
            <button onClick={() => supprimerRecette(key)}>Supprimer</button>
        </div>
        
    )
}

export default AdminForm
