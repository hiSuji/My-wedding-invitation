<script>
  import { onMount } from "svelte";
  import Fa from "svelte-fa";
  import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
  import { faCar } from "@fortawesome/free-solid-svg-icons";
  import { faBus } from "@fortawesome/free-solid-svg-icons";

  export let flowerSrc;
  let mapSrc = "images/mapMarker.png";

  onMount(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.52325158951697, 127.04337185369788), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var imageSrc = mapSrc, // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(44, 47), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(17, 28) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    // // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(
      37.52325158951697,
      127.04337185369791
    );

    // // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });

    // // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  });
</script>

<style>
  @media only screen and (max-width: 576px) {
    .map_width {
      max-width: 100%;
      height: 200px;
    }
  }

  @media (min-width: 1200px) {
    .map_width {
      width: 500px;
      height: 400px;
      margin: 0 auto;
    }
  }
</style>

<div class="flex justify-center mt-20">
  <img src="{flowerSrc}" alt="flower" class="w-8" />
</div>
<div class="text-center">
  <p class="text-xs mb-8 tracking-widest">오시는길</p>
</div>
<div class="flex flex-col text-center mb-5">
  <div class="text-xs mb-5">
    <div>
      <p class="text-sm text-green-500 font-semibold">더청담 2층 노블레스홀</p>
      <p>서울특별시 강남구 도산대로 434<br />(강남구 청담동 4-10)</p>
      <a
        href="tel:02-518-8001"
        class="hover:no-underline flex flex-row justify-center text-sm"
      >
        <Fa
          size="lg"
          color="cadetblue"
          icon="{faPhoneSquareAlt}"
          class="mr-2"
        />
        Tel. 02-518-8001
      </a>
    </div>
  </div>
  <div id="map" class="map_width"></div>
</div>
<div class="text-xs">
  <div class="flex flex-row justify-center mb-3">
    <Fa size="lg" color="cadetblue" icon="{faCar}" class="mr-2" />
    <p class="mr-4 font-semibold">주차정보</p>
    <span>자체 150대, 무료 발렛(외부 600대)</span>
  </div>
  <div class="flex flex-row justify-center">
    <Fa size="lg" color="cadetblue" icon="{faBus}" class="mr-2" />
    <p class="mr-4 font-semibold">셔틀버스</p>
    <span>강남구청역 4번 출구 5분 간격 운행</span>
  </div>
</div>
