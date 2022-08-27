<template>
  <MainHeader />
  <Hero />
  <Icons @filterEven="filterEven" @filterOdd="filterOdd" />
  <Filter />
  <PhotoList :photos="data" @loadMoreData="loadMoreData(page)" :loading="loading" />
  <MainFooter />
</template>
<script>

import MainHeader from './components/MainHeader.vue'
import Hero from './components/Hero.vue'
import Icons from './components/Icons.vue'
import Filter from './components/Filter.vue'
import PhotoList from './components/PhotoList.vue'
import MainFooter from './components/MainFooter.vue'

import { fetchPhotoData } from './services/photos'

export default {
  components: {
    MainHeader,
    Hero,
    Icons,
    Filter,
    PhotoList,
    MainFooter
  },
  data() {
    return {
      data: [],
      loading: true,
      currentPage: 1
    }
  },
  async mounted() {
    this.data = await fetchPhotoData(1)
    this.data = await fetchPhotoData(1)
    if (this.data) this.loading = false
  },
  methods: {
    async loadMoreData() {
      this.currentPage = this.currentPage = 1
      const moreData = await fetchPhotoData(this.currentPage)
      this.data = [...this.data, ...moreData]
      this.dataMemo = [...this.data, ...moreData]
    },
    filterEven() {
      this.loadMoreData()
      this.data = this.data.filter(item => item.id % 2 === 0)
    },
    filterOdd() {
      this.loadMoreData()
      this.data = this.data.filter(item => item.id % 2 === 1)
    }
  },
}

</script>
<style scoped lang='scss'>
.hey {
  .hello {
    background: tomato;
    height: 100px;
    width: 100px;
  }
}
</style>