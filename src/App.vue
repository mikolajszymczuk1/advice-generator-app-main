<template>
    <main class="py-[121px] lg:h-screen lg:flex lg:items-center">
        <AdviceGenerator />
    </main>
</template>

<script>
import AdviceGenerator from "@/components/AdviceGenerator";

export default {
    name: "App",
    components: {
        AdviceGenerator
    }
}
</script>
