<template>
    <div>
        <div
            class="justify-between px-2 fixed top-0 right-0 left-0 h-[60px] bg-[#121212] z-50 text-white flex items-center gap-2">
            <div class="flex gap-4 items-center">
                <img
                    class="max-h-[40px]"
                    src="https://static.cycle.io/icons/logo/logo-white.png"
                    alt="Logo" />
                <p>API Docs</p>
            </div>

            <nav class="flex gap-8 text-sm">
                <a href="/"> Platform </a>
                <a href="/deprecated-public"> Deprecated Public </a>
                <a href="/internal"> Internal </a>
                <a href="/admin"> Admin </a>
                <a href="/scheduler"> Scheduler </a>
            </nav>
        </div>
        <div class="pt-[60px]">
            <NuxtPage />
        </div>
    </div>
</template>
