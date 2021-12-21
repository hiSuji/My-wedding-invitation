<script>
  import Gallery from "svelte-image-gallery";
  import { listImage } from "../service/firebase";
  import { getDownloadURL } from "firebase/storage";
  import { onMount } from "svelte";

  export let flowerSrc;

  let weddingImages = [];

  onMount(async () => {
    await listImage
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            // 1번째 방법
            weddingImages = [...weddingImages, url];

            // 2번째 방법
            // weddingImages.push(url);
            // weddingImages = weddingImages;
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function detectMobileDevice(agent) {
    // const mobileRegex = [
    //   /Android/i,
    //   /iPhone/i,
    //   /iPad/i,
    //   /iPod/i,
    //   /BlackBerry/i,
    //   /Windows Phone/i,
    // ];

    // return mobileRegex.some((mobile) => agent.match(mobile));
    return /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
  }

  const isMobile = detectMobileDevice(window.navigator.userAgent);

  // if (isMobile) {
  //   console.log("current device is mobile");
  //   alert("current device is mobile");
  // } else {
  //   console.log("current device is not mobile");
  //   alert("current device is not mobile");
  // }
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="flex justify-center mt-20">
  <img src="{flowerSrc}" alt="flower" class="w-8" />
</div>
<div class="text-center">
  <p class="text-xs mb-8 tracking-widest">아름다운순간</p>
</div>
<!-- <button on:click="{handleClick}"> Click me </button> -->
<Gallery gap="10" maxColumnWidth="{isMobile ? '120' : '200'}">
  {#each weddingImages as weddingImage}
    <img src="{weddingImage}" alt="weddingPhoto" />
  {:else}
    <img src="https://via.placeholder.com/150" alt="sample" />
  {/each}
</Gallery>
