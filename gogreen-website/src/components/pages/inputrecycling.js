import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			amount: '',
			material: '',
            date: ''
		}
	}

	handleAmountChange = event => {
		this.setState({
			amount: event.target.value
		})
	}

    handleDateChange = event => {
		this.setState({
			date: event.target.value
		})
	}

	
	handleMaterialChange = event => {
		this.setState({
			material: event.target.value
		})
	}

	handleSubmit = event => {
        let mat = this.state.material; //saves material as mat
        let date1 = this.state.date; //saves date as date1
        let am = this.state.amount; //saves amount as am
        

		alert(`You chose to recycle ${this.state.amount} items of ${this.state.material} on the date ${this.state.date} .`)
		event.preventDefault()
	}

	render() {
		const { amount, date, material } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>How Many Items </label>
					<input
						type="number"
						value={amount}
						onChange={this.handleAmountChange}
					/>
				</div>

                <div>
					<label>When Did You Recycle It? </label>
					<input
						type="date"
						value={date}
						onChange={this.handleDateChange}
					/>
				</div>


			
				<div>
					<label>Which Material?</label>
					<select value={material} onChange={this.handleMaterialChange}>
                        <option>-Select Material-</option>
						<option value="paper">Paper 📰</option>
						<option value="tin">Tin 🥫</option>
						<option value="plastic">Plastic 🥤</option>
                        <option value="glass">Glass 🍷</option>
                        <option value="cardboard">Cardboard 📦</option>

					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Form;