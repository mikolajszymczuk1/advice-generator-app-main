<template>
    <!-- Advice Generator Component --> 
    <div class="w-[92%] max-w-[540px] px-5 pt-10 mx-auto bg-grayish-blue rounded-lg font-body text-center md:rounded-2xl md:px-10 md:pt-[3.1rem]">
        <h1 class="mb-6 text-neon-green tracking-[0.3em] text-[0.7em]">ADVICE #117</h1>
        <p class="mb-4 text-light-cyan text-[1.45em] md:mb-8 md:text-[1.7em]">
            &#8220;It is easy to sit up and take notice, what's difficult is getting up and taking action&#8221;
        </p>
        
        <!-- Dividers -->
        <PatternDividerMobileIcon class="w-full md:hidden" />
        <PatternDividerDesktopIcon class="mx-auto hidden md:block" />

        <!-- Random advice button -->
        <button class="p-5 rounded-full bg-neon-green md:hover:shadow-[0_0_40px_hsl(150,100%,66%)] transition shadow ease-in-out duration-[350ms] translate-y-[50%] md:mt-2"
            aria-label="random-advice-button"
        >
            <DiceIcon />
        </button>
    </div>
</template>

<script>
import DiceIcon from "@/components/Icons/DiceIcon";
import PatternDividerMobileIcon from "@/components/Icons/PatternDividerMobileIcon";
import PatternDividerDesktopIcon from "@/components/Icons/PatternDividerDesktopIcon";

export default {
    name: "AdviceGenerator",
    components: {
        DiceIcon,
        PatternDividerMobileIcon,
        PatternDividerDesktopIcon
    }
}
</script>
