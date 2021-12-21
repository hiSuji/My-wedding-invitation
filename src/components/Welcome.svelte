<script>
  import { onMount } from "svelte";

  let welcomeSrc = "images/welcome.jpg";
</script>

<style>
</style>

<div class="flex flex-row justify-around items-center text-2xl my-6">
  <div class="basis-1/3">박완우</div>
  <div class="basis-1/3">
    <p class="border-b-4 border-yellow-200">03</p>
    <p>19</p>
  </div>
  <div class="basis-1/3">김수지</div>
</div>
<div class="flex mb-2 justify-center">
  <img src="{welcomeSrc}" alt="welcome" />
</div>
<div class="text-right text-sm">
  <p>토요일 오후 2시</p>
  <p>더청담 2F 노블레스홀</p>
</div>
