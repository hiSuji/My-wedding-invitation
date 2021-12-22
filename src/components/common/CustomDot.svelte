<script>
  export let active = false;
</script>

<style>
  .custom-dot__dot-container {
    height: 8px;
    width: 8px;
    background-color: #fef7c1;
    border-radius: 50%;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .custom-dot__dot-container:hover {
    opacity: 0.9;
  }
  .custom-dot__dot-container_active {
    background-color: #ffe940;
  }
</style>

<div
  class="custom-dot__dot-container"
  class:custom-dot__dot-container_active="{active}"
  on:click
></div>
