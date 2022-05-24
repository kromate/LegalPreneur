<template>
	<div class="bg w-screen md:h-[40rem] h-[30rem] flex items-center justify-start text-dark text-left"> 
		<div class="container mx-auto relative">
			<h2 class="pb-4 md:text-5xl text-3xl px-3 w-[666px] max-w-full font-bold !leading-[127%]">
				<text/>
			</h2>
		</div>


	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.bg{
/* background:  #ffffffaf url('../../assets/images/bg.png'); */
background-repeat: no-repeat;
background-size: cover;
animation: changeBG 17s  infinite both;
}
text:before{
     content: "";
     animation: changeText 17s  infinite both;
}

@keyframes changeBG {
    0%{
        opacity: 1;
        background:  var(--clr-bgOne);
    }
    50%{
         background:  var(--clr-bgTwo);
    }
    100%{
        opacity: 1;
         background:  var(--clr-bgOne);
    }
}
@keyframes changeText {
    0%{
        opacity: 1;
         content: "Africa's Frontier Technology-Driven Law Firm";
    }
    15%{
        opacity: 0;
    }
    50%{
        opacity: 1;
         content: "Legal service provider for the new economy in africa";
    }
    65%{
        opacity: 0;
    }
    100%{
        opacity: 1;
         content: "Africa's Frontier Technology-Driven Law Firm";

    }
}

h2:before{
    content: "";
    position: absolute;
    width: 62px;
    height: 1px;
    bottom: 0;
    border-top: 6.2px solid #009CE3;
}
</style>