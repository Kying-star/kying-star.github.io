<template>
  <div class="donate-wrapper">
    <ul
      v-if="showQrCode"
      class="donate-qrcode-list"
    >
      <li
        v-for="item in donateList"
        :key="item.link"
        class="donate-qrcode-item"
      >
        <img
          class="donate-qrcode"
          :src="$withBase(item.link)"
        >
        <p class="donate-name">
          {{ item.name }}
        </p>
      </li>
    </ul>
    <div
      v-else
      class="donate-entity"
      @click="openQrcode"
    >
      赏
    </div>
  </div>
</template>

<script>
export default {
  name: 'Donate',
  data() {
    return {
      showQrCode: false
    };
  },
  computed: {
    donateList() {
      const caches = [];
      return (this.$themeConfig.donate || []).reduce(
        (accumulator, currentValue) => {
          if (
            typeof currentValue === 'string' &&
              !caches.includes(currentValue)
          ) {
            caches.push(currentValue);
            accumulator.push(this.createDonateVO(currentValue));
          } else if (
            Object.prototype.toString.call(currentValue) ===
                '[object Object]' &&
              currentValue.link !== undefined &&
              !caches.includes(currentValue.link)
          ) {
            caches.push(currentValue.link);
            accumulator.push(
              this.createDonateVO(currentValue.link, currentValue.name || '')
            );
          }

          return accumulator;
        },
        []
      );
    }
  },
  created() {
    if (!(this.$themeConfig.donate && this.$themeConfig.donate.length)) {
      this.$destroy();
    }
  },
  methods: {
    createDonateVO(link, name = '') {
      return { name, link };
    },
    openQrcode() {
      this.showQrCode = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
  .donate-wrapper {
    position: relative;
    margin: 35px 0;
  }

  .donate-entity {
    width: 60px;
    height: 60px;
    margin: 10px auto;
    line-height: 60px;
    font-size: 24px;
    text-align: center;
    color: #fff;
    background: #c02c38;
    border-radius: 50%;
    cursor: pointer;
  }

  .donate-qrcode-list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }

  .donate-qrcode-item {
    width: 200px;
    margin: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .donate-name {
    margin: 0;
    padding: 0;
    text-align: center;
  }
</style>
