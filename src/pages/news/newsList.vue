<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-tabs v-model="active" animated>
        <van-tab title="热门新闻">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <NewsCard v-bind:guoneiData="guoneiData"></NewsCard>
          </van-list>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
    <Bgloding :show="show"></Bgloding>
  </div>
</template>


<script>
  // import  {getNewLit} from '../../../sever/getDate' //加载静态数据
  import getDate from '../../server/getDate'

  export default {
    name: 'newsList',
    components: {},
    mounted() {
    },
    created() {
    },
    data() {
      return {
        active: 0,
        msg: '',
        selected: 0,
        limit: 10,
        page: 0,
        ptype: 1,
        guoneiData: [],
        loadings: true,
        loading: false,
        finished: false,
        isLoading: false,
        total:11,
        show:true
      }
    },
    methods: {
      getNewLits(limit, page, type) {
        getDate.getNewLit({limit: limit, page: page,type:type}, (response) => {
          if (response.success) {
            this.guoneiData.push(...response.data.results.rows);
            this.loadings = false;
            this.show =false;
            this.total=response.data.results.count;
          }
        }, () => {
          this.loadings = false;
        })

      },
      onRefresh() {
        setTimeout(() => {
          this.guoneiData.splice(0, this.guoneiData.length);
          this.page = 1;
          this.$toast('刷新成功');
          this.isLoading = false;
          this.getNewLits(this.limit, this.page, this.ptype);
          this.finished = false;
        }, 1000)
      },
      onLoad() {
        if (this.total > this.page * this.limit) {
          this.page++;
          if (this.page == 1) {
            this.getNewLits(this.limit, this.page, this.ptype);
            this.loading = false;
          } else {
            setTimeout(() => {
              this.getNewLits(this.limit, this.page, this.ptype);
              this.loading = false;
            }, 1000)
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .font12 {
    font-size: 12px;
  }
</style>
