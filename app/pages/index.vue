<script lang="ts" setup></script>

<template>
  <main>
    <section class="bg-[#f1f1f1]">
      <h2 class="text-3xl font-semibold text-center  py-10">Tentang Saya</h2>
      <div class="container flex flex-col lg:flex-row items-center">
        <div class="p-60 flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Hai, aku Wafa
          </h1>
          <p class="text-4xl">
            Mobile Developer
          </p>
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg
            sizes="xs:100vw sm:350px"
            src="wapa.png"
            format="webp"
            densities="x1"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="py-10 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-6">Ketrampilan</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-xl font-semibold">Vue</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-xl font-semibold">Html</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-xl font-semibold">Flutter</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-xl font-semibold">Java</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 flex justify-center items-center">
    <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-6">Pengalaman</h2>
        <div class="max-w-4xl mx-auto text-center">
            <div class="service-detail grid grid-cols-2 md:grid-cols-2 gap-10">
                <div class="service-detail-item bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                    <!-- Gambar pertama -->
                    <NuxtImg sizes="xs:100vw sm:350px" src="sidigs.png" format="webp" densities="x1" alt=""/>
                    <h2 class="text-xl font-semibold mb-2">Sidigs</h2>
                    <p class="text-gray-600">Membuat aplikasi mobile berbasis learning management system.</p>
                </div>
                <div class="service-detail-item bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                    <!-- Gambar kedua -->
                    <NuxtImg sizes="xs:100vw sm:350px" src="dbt.png" format="webp" densities="x1" alt=""/>
                    <h2 class="text-xl font-semibold mb-2">Telkom DBT</h2>
                    <p class="text-gray-600">Merancang dan membuat tampilan website pihak ketiga.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  </main>
</template>


 