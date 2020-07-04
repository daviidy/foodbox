import React, { Component } from 'react'

class AjouterRecette extends Component {

    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: '',

    }
    handleChange = event => {
        const { name, value } = event.target

        //variable [name] qui correspond à la clé dans le state
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const recette = { ...this.state }
        this.props.ajouterRecette(recette)

        //Reset
        Object.keys(recette).forEach(item => {
            recette[item] = ''
        })
        this.setState({ ...recette })
    }

    render() {


        return (
            <div>
                <h2>AjouterRecette</h2>
                <form onSubmit={this.handleSubmit} className="admin-form ajouter-recette">
                    <input name='nom' type="text" onChange={this.handleChange} value={this.state.nom} placeholder="Nom de la recette" />
                    <input name='image' type="text" onChange={this.handleChange} value={this.state.image} placeholder={'Nom de l\'image'} />
                    <textarea name="ingredients" onChange={this.handleChange} value={this.state.ingredients} placeholder="Nom des ingrédients"  rows="3"></textarea>
                    <textarea name="instructions" onChange={this.handleChange} value={this.state.instructions} placeholder="Nom des instructions"  rows="15"></textarea>
                    <button type="submit">+ Ajouter une recette</button>
                </form>
            </div>


        )
    }
}

export default AjouterRecette
