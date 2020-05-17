<template>
  <div>
      <input type="file" class="pick-files" ref="file" @change="upload">
  </div>
</template>

<script>

export default {
  name: 'pickFile',
  methods: {
    upload () {
    }
  }
}
</script>

<style lang="scss" scoped>
.pick-files {
    display: flex;
    justify-content: center;
    align-content: center;
    color: transparent;
    width: 250px;
    height: 47px;
  }
  .pick-files::-webkit-file-upload-button {
    visibility: hidden;
  }
  .pick-files::before {
    content: 'Pilih Gambar';
    color: #ffffff;
    display: inline-block;
    width: 250px;
    height: 50px;
    background: #770b1e;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-align: center;
    padding: 10px;
    font-weight: 600;
  }
  .pick-files:active {
    outline: 0;
  }
  .pick-files:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
</style>
