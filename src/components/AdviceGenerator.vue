<template>
    <!-- Advice Generator Component --> 
    <div class="w-[92%] max-w-[540px] px-5 pt-10 mx-auto bg-grayish-blue shadow-[0_15px_25px_rgba(0,0,0,0.1)] rounded-lg font-body text-center md:rounded-2xl md:px-10 md:pt-[3.1rem]">
        <h1 class="mb-6 text-neon-green tracking-[0.3em] text-[0.7em]" data-test="generator-heading">ADVICE #{{ adviceSlip.id }}</h1>
        <p class="mb-4 text-light-cyan text-[1.45em] md:mb-8 md:text-[1.7em]" data-test="generator-content">
            &#8220;{{ adviceSlip.advice }}&#8221;
        </p>
        
        <!-- Dividers -->
        <PatternDividerMobileIcon class="w-full md:hidden" />
        <PatternDividerDesktopIcon class="mx-auto hidden md:block" />

        <!-- Random advice button -->
        <button class="p-5 rounded-full bg-neon-green md:hover:shadow-[0_0_40px_hsl(150,100%,66%)] transition shadow ease-in-out duration-[350ms] translate-y-[50%] md:mt-2"
            aria-label="random-advice-button"
            @click="getAdvice"
            data-test="dice-button"
        >
            <DiceIcon />
        </button>
    </div>
</template>

<script>
import DiceIcon from "@/components/Icons/DiceIcon";
import PatternDividerMobileIcon from "@/components/Icons/PatternDividerMobileIcon";
import PatternDividerDesktopIcon from "@/components/Icons/PatternDividerDesktopIcon";
import axios from "axios";

export default {
    name: "AdviceGenerator",
    components: {
        DiceIcon,
        PatternDividerMobileIcon,
        PatternDividerDesktopIcon
    },
    data() {
        return {
            adviceSlip: {
                id: 117,
                advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
            }
        }
    },
    methods: {
        async getAdvice() {
            await axios.get("https://api.adviceslip.com/advice")
                .then(res => {
                    let data = res.data;
                    this.adviceSlip = {
                        id: data.slip.id,
                        advice: data.slip.advice
                    }
                }).catch(err => {
                    console.log(err.message);
                });
        }
    }
}
</script>
