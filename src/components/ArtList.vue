<script setup lang="ts">
import { ref } from 'vue';
import Art from "@/mocks/Art.json";

let arrArt = ref(Art)
</script>
<template>
	<div class="container">
			<h1>Art</h1>
		<div class="content">
		<div v-for="(art, id) in arrArt" v-bind:key="id" class="card">
			<img :src=art.image alt="">
			<div class="description">
				<p class="title">{{art.title}}</p>
				<div class="category">
					<span class="title2">Category:</span>
					<p class="title">{{art.category}}</p>
					<button class="buttonSingle">
						<RouterLink :to="`/art/${art.id}`">More Info</RouterLink>
					</button>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>
<style lang="scss" scoped>

.container {
    display: flex;
    flex-direction: column;
    margin: 2rem 5rem;
    align-items: center;
}

	h1 {
		display: flex;
		justify-content: center;
		margin: 1rem 0rem;
		font-size: 2.25rem;
		line-height: 2.5rem;
		color: rgb(226 232 240 / 1 );
		font-weight: 700;

	}

.content{
	display: flex;
	flex-wrap: wrap;
	gap: 2.5rem;
	justify-content: center;

	img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
		opacity: 0.4;
    }
}
.card{
	display: flex;
	position: relative;
    flex-direction: column;
    width: 30%;
	height: 20rem;
    border-radius: 1rem;
    margin-top: 20px;
	background-color: #000000;
}
.description {
    display: flex;
    position: absolute;
    flex-direction: column;
    bottom: 0;
    width: 100%;
    height: 20;
    height: 8rem;
    justify-content: space-around;
    padding: 1rem 2rem;

	.title{
		width: 100%;
		color: white;
		font-size: 1.2rem;
	}

	.buttonSingle {
		display: flex;
		width: 30%;
		background-color: rgb(14 165 233 / 1 );
		padding: 0.5rem;
		border-radius: 2rem	;
		border: none;
		justify-content: center;

		a {
			text-decoration: none;
			color: rgb(255 255 255 / 1 );
			font-size: 1rem;
			font-weight: 500;
		}
	}

	.buttonSingle:hover {
			background-color: rgb(114 189 223);
		}
}


.category {
	display: flex;
	gap: 0.2rem;
	align-items: center;

	.title2{
		display: flex;
		color: white;
		font-size: 1.1rem;
	}
}

@media (max-width: 425px) {

.container {
	margin: 1rem;
}
.card {
  width: 100%;
	.description {
	padding: 0.2rem;
	}
}
}

@media (min-width:425px) and (max-width:768px) {
	.card {
		width: 100%;
	}
}

@media (min-width:769px) and (max-width:1024px) {
	.container {
		margin: 0;

		.card {
			width: 40%;
			.description {
				padding: 0.5rem;
			}
			.buttonSingle {
				width: 50%;
			}
		}
	}
	
}

@media (min-width:1024) and (max-width:1439px) {
	.card {
		width: 40%;
		.description {
			padding: 0.5rem;
		}
	}
}

@media (min-width:1440px) and (max-width:1440px) {
	.container {
		margin: 0;

		.buttonSingle {
				width: 50%;
			}
	}
	
}
</style>