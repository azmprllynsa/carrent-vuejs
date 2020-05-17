<template>
  <div class="slidecontainer">
  <input type="range" min="1" max="2" value="1" class="slider" id="myRange">
</div>
</template>

<script>
export default {

}
</script>

<style>
.slider {
  -webkit-appearance: none;
  width: 40px;
  height: 15px;
  border-radius: 50px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #770b1e;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #770b1e;
  cursor: pointer;
}
</style>
