import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {

	static get styles() {
		return css`
		  
		  .cards-grid {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;
		  }
		  
		  .card {
			width: 200px;
			height: 200px;
			border-radius: 6px;
			box-shadow: 0 20px 40px 0 rgba(173, 181, 189, 0.1);
			border: solid 1px rgba(129, 147, 174, 0.12);
			background-color: #fff;
			padding: 10px;
			text-align: center;
		  }
		  
		  .card img{
			width: 100px;
			height: 100px;
			object-fit: contain;
		  }
		  
		  .card:first-child::before {
			content: "";
			background-color: #ff6666;
			top: -8px;
			left: -1px;
			width: calc(100% + 2px);
			height: 8px;
			border-radius: 6px 6px 0 0;
		  }
		  
		  .card:nth-child(2)::before {
			content: "";
			background-color: #63a2ff;
			top: -8px;
			left: -1px;
			width: calc(100% + 2px);
			height: 8px;
			border-radius: 6px 6px 0 0;
		  }
		  
		  .card:last-child::before {
			content: "";
			background-color: #5ed291;
			top: -8px;
			left: -1px;
			width: calc(100% + 2px);
			height: 8px;
			border-radius: 6px 6px 0 0;
		  }
		  
		  .card__head {
			font-size: 13px;
			margin-bottom: 0.5em;
			color: #000;
		  }
		  
		  .card__content {
			font-size: 11px;
		  }  
		  		  
		  .itemDisplayWrapper {
			width: 100%;
			height: 400px;
			box-shadow: 0px 0px 20px #888888;
			padding: 0px;
		  }
		  
		  .itemDisplayImg {
			width: 100%;
			height: 100vh;
			background: url('https://cdn.shopify.com/s/files/1/1740/0017/articles/how-to-create-a-luxury-master-bedroom-on-a-budget-1_1024x.jpg?v=1611742512');
			background-position: center;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			background-repeat: no-repeat;
			background-position: center;
			margin: 0px;
			padding: 0px;
			background-size: 100% 100%;
		  }
		  
		  .itemDisplayPropName {
			text-align: left;
			height: 50px;
			background: rgba(255, 255, 255, 0.7);
			font-size: 17px;
			line-height: 50px;
			padding-left: 10px;
			padding-right: 10px;
			white-space: nowrap;
			overflow: hidden !important;
			text-overflow: ellipsis;
		  }
		  
		  .itemDisplayHeart {
			text-align: right;
			padding-right: 15px;
			font-size: 23px;
			color: #ff6666;
		  }
		  
		  .itemDisplayHeart:hover {
			color: #ff6666;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: #ff3232;
			cursor: pointer;
		  }
		  
		  .itemDisplayHeart > div {
			background: rgba(255, 255, 255, 0.9);
			width: 40px;
			border-radius: 100%;
			text-align: left !important;
		  }
		  
		  .itemDisplayDetailLines {
			line-height: 30px;
			font-size: 12px;
			font-weight: bold;
			color: grey;
			text-align: left;
			padding: 25px;
			position: absolute;
			border: 1px solid grey;
			z-index: 1000;
			top: 135px;
			background-color: #d9d9d9;
		  }
		  
		  .itemDisplayDetailLines div {
			white-space: wrap;
		  }
		  
		  .itemDisplayDetailLines .description{
			font-weight: 700;
			font-size: 14px;
		  }
		  
		  .exploreBtn {
			width: 100%;
			padding: 7px;
			background: transparent;
			border: 2px solid #ff6666;
			color: #ff6666;
		  }
		  .exploreBtn:hover {
			width: 100%;
			background: #ff6666;
			border: 2px solid #ff6666;
			color: #fff;
		  }
		  
		  .bnb-services{
			text-align: left;
			font-weight: 700;
			color: #FFFFFF;
		  }
		  
		  .bnb-head{
			border-bottom: 5px solid #ff6666;
			font-weight: bold;
		  }
		`
	}

	render() {
		return html`

		<style>
        :host {
          padding: 20px;
        }
		</style>

		<main class="itemDisplayWrapper">
			<div class="itemDisplayImg">     
				<div class="itemDisplayHeart">
				</div>
			</div>

			<div class="itemDisplayDetailLines">
				<div class="itemDisplayPropName">
					Ngong Hills Hotel
				</div>
				<div class="">
					<i class="fa fa-object-ungroup" aria-hidden="true"></i> 1450 Sq.Ft.
				</div>
				<div class="">
					<i class="fa fa-bed" aria-hidden="true"></i> x3  &nbsp; &nbsp; &nbsp;
					<i class="fa fa-bath" aria-hidden="true"></i> x4 
				</div>

				<div class=""><i class="fa fa-map-marker" aria-hidden="true"></i>  Ngong Road, Nairobi</div>
				<div class=""><i class="fa fa-money" aria-hidden="true"></i> KES. 5,000</div>
				<div class=""><i class="fa fa-building-o" aria-hidden="true"></i> by Hot'ale Managements</div>
				<div class="">
				<a href="/view2" class="exploreBtn text-center mt-4">Explore Rooms</a> 
				</div>
			</div>
		</main>

        <br />

		<h3 class="card__services">Services</h3>
		<div class="cards-grid">
			<div class="card">
				<img class="card__icon" src="https://img.freepik.com/free-vector/modern-house-template_575670-12.jpg?w=2000" alt="ux-design" />
				<div class="card__body">
					<h4 class="card__head">Modern Homes</h4>
					<p class="card__content">Our homes are designed with you in mind to make you feel at home.</p>
				</div>
			</div>
			<div class="card">
				<img class="card__icon" src="https://cdn.dribbble.com/users/1787323/screenshots/7477950/media/a31d9c0a3d44336526059a33bd20224d.png?compress=1&resize=400x300" alt="development" />
				<div class="card__body">
					<h4 class="card__head">Snacks & Drinks</h4>
					<p class="card__content">Pay once and get 3 meals a day and snacks in between meals.</p>
				</div>
			</div>
			<div class="card">
				<img class="card__icon" src="https://img.freepik.com/premium-vector/home-appliances-set-domestic-electronics-machines-outline-concept-equipment-elements-kitchen-cooking-vacuum-cleaning-laundry-washing-vector-illustration-isolated-daily-indoor-gadgets_1995-708.jpg?w=2000" alt="brand" />
				<div class="card__body">
					<h4 class="card__head">Home Gadgets</h4>
					<p class="card__content">Our homes have all the gadgets you need for a fulfilling experience.</p>
				</div>
			</div>
		</div>
		<br />
		<br />
		`;
	}
}

customElements.define('my-element', MyElement);
