<script>
  import { listImage } from "../service/firebase";
  import { getDownloadURL } from "firebase/storage";
  import { onMount } from "svelte";
  import Carousel from "svelte-carousel";

  import Fa from "svelte-fa";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

  import CustomDot from "@/components/common/CustomDot.svelte";

  export let flowerSrc;

  let weddingImages = [];

  onMount(async () => {
    await listImage
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            // 1번째 방법
            // weddingImages = [...weddingImages, url];
            weddingImages = [...weddingImages, { url }];
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
</script>

<style>
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  .custom-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7px;
  }
  .custom-arrow:active {
    background-color: #fffff2;
  }

  @media only screen and (max-width: 576px) {
    .gallery-size {
      width: fit-content;
      padding: 0 2px;
    }
  }
  @media (min-width: 800px) {
    .gallery-size {
      height: 80%;
      width: auto;
    }
  }
</style>

<div class="flex justify-center mt-20">
  <img src="{flowerSrc}" alt="flower" class="w-8" />
</div>
<div class="text-center">
  <p class="text-xs mb-8 tracking-widest">아름다운순간</p>
</div>
{#key weddingImages}
  <Carousel
    autoplay
    autoplayDuration="{2500}"
    pauseOnFocus
    let:showPrevPage
    let:showNextPage
    let:currentPageIndex
    let:pagesCount
    let:showPage
  >
    <div slot="prev" on:click="{showPrevPage}" class="custom-arrow">
      <Fa size="lg" color="#F9E79F" icon="{faChevronLeft}" />
    </div>
    <div slot="dots" class="flex">
      {#each Array(pagesCount) as _, pageIndex (pageIndex)}
        <CustomDot
          active="{currentPageIndex === pageIndex}"
          on:click="{() => showPage(pageIndex)}"
        />
      {/each}
    </div>
    {#if weddingImages.length === 0}
      <img
        src="https://via.placeholder.com/300x200/FFFFFF/D8D8D8/?text=loading"
        alt="sampleImage"
        class="gallery-size"
      />
    {:else}
      {#each weddingImages as weddingImage}
        <div class="image-container">
          <img
            src="{weddingImage.url}"
            alt="weddingPhoto"
            class="gallery-size"
          />
        </div>
      {/each}
    {/if}
    <div slot="next" on:click="{showNextPage}" class="custom-arrow">
      <Fa size="lg" color="#F9E79F" icon="{faChevronRight}" />
    </div>
  </Carousel>
{/key}
