<template>
<!-- From Uiverse.io by ilkhoeri -->
<div class="wrapper">
  <div class="inner" style="--quantity: 4;">
    <div class="card" style="--index: 3;--color-card: 215, 252, 142;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 4;--color-card: 252, 252, 142;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 5;--color-card: 252, 208, 142;">
      <div class="img"></div>
    </div>
    <div class="card" style="--index: 6;--color-card: 252, 142, 142;">
      <div class="img"></div>
    </div>
  </div>
</div>
</template>
<style scoped>
/* From Uiverse.io by ilkhoeri */
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.inner {
  --w: 100px;
  --h: 150px;
  --translateZ: calc((var(--w) + var(--h)) + 0px);
  --rotateX: -15deg;
  --perspective: 1000px;
  width: var(--w);
  height: var(--h);
  top: 25%;
  left: calc(100% - (var(--w) / 2) - 2.5px);
  position: absolute;
  z-index: 1;
  transform-style: preserve-3d;
  transform: perspective(var(--perspective));
  animation: rotating 20s linear infinite; /* */
}
@keyframes rotating {
  from {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX))
      rotateY(0);
  }
  to {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX))
      rotateY(1turn);
  }
}

.card {
  position: absolute;
  border: 2px solid rgba(var(--color-card));
  border-radius: 12px;
  overflow: hidden;
  inset: 0;
  transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
    translateZ(var(--translateZ));
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #0000
    radial-gradient(
      circle,
      rgba(var(--color-card), 0.2) 0%,
      rgba(var(--color-card), 0.6) 80%,
      rgba(var(--color-card), 0.9) 100%
    );
}

</style>
