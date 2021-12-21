<script>
  import moment from "moment";

  export let flowerSrc;

  let calendarSrc = "images/calendar.png";
  let dDay = moment("2022-03-19");
  let today = moment().startOf("day");
  let diff = today.diff(dDay, "days");
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="flex justify-center mt-20">
  <img src="{flowerSrc}" alt="flower" class="w-8" />
</div>
<div class="text-center">
  <p class="text-xs mb-8 tracking-widest">결혼합니다</p>
</div>
<div class="flex justify-center">
  <img src="{calendarSrc}" alt="calendar" />
</div>
<div class="text-center">
  <p>
    <span class="text-sm text-red-500 font-semibold mr-2">D-day</span>
    예식일이 {Math.abs(diff) > 0 ? Math.abs(diff) : 0}일 남았습니다.
  </p>
</div>
