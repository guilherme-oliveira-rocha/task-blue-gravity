<script setup lang="ts">
import Arts from "@/mocks/Art.json";
import { ref } from 'vue';
import vue3StarRatings from "vue3-star-ratings";
import { useRoute } from 'vue-router';
const route = useRoute();

type INews = {
    id: string,
    image: string,
    title: string,
    category: string,
    description: string
}

const rating = ref(0);

const objArt:INews | undefined = Arts.find(obj => obj.id == route.params.id);

</script>
<template>
	<div class="wrapper">
		<div class="container">
			<h1>Arts</h1>
			<div class="content">
				<img :src=objArt?.image alt="">
				<div class="description">
					<p class="title">{{objArt?.title}}</p>
					<p class="subtitle">Category: {{ objArt?.category }}</p>
					<span class="descriptionInside">{{ objArt?.description }}</span>
					<div class="rating">
						<vue3StarRatings v-model="rating" :showControl="false"></vue3StarRatings>
						<p>{{ rating }}</p>
					</div>
				</div>
			</div>


		</div>
	</div>

</template>
<style lang=scss scoped>

	.wrapper {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 2rem auto;
		background-color: transparent;
	}
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;

		h1 {
		display: flex;
		justify-content: center;
		margin: 1rem 0rem;
		font-size: 2.25rem;
		line-height: 2.5rem;
		color: rgb(226 232 240 / 1 );
		font-weight: 700;

	}
	}

	img{
		width: 50%;
		height: 100%;
		object-fit: cover;
		border-radius: 3rem;
		margin-top: 3rem;
	}
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: rgb(15, 23, 42);
		border-radius: 3rem;
		justify-content: center;
		gap: 2rem;
		align-items: center;
	}

	.description {
		width: 50%;
		display: flex;
		text-align: justify;
		flex-direction: column;
		gap: 1rem;

		.title {
			font-weight: 600;
			font-size: 1.25em;
			color: rgb(226 232 240 / 1 );
			line-height: 1.3333333;
		}

		.subtitle {
			font-weight: 600;
			font-size: 1em;
			color: rgb(226 232 240 / 1 );
			line-height: 1.3333333;
		}

		.descriptionInside {
			font-weight: 400;
			font-size: 1rem;
			color: rgb(148 163 184 / 1 );
			line-height: 1.3333333;
		}
	}
	.rating {
		display: flex;
		gap: 1rem;
	}

@media (max-width: 1024px) {

	.wrapper {
		width: 95%;

		.description {
		width: 100%;
		padding: 1rem 0rem;
		}

		img {
		width: 100%;
		}
	}
}


</style>