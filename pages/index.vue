<template>
  <div class="body-wrapper">
    <!--  -->
    <div class="wrapperd" id="homePage" ref="wrapperd" :scrollbar="options.scrollbar" :startY="options.startY">

      <div class="content">

        <div id="home">
          <header class="wwhl-header">
            <div class="header-wrapper">
              <nav class="nav-bar">
                <div class="wwhl-logo">
                  <img class="logo-img" src="~static/logo.png" alt="">
                </div>
                <ul class="nav-list">
                  <li class="list-item" v-for="(item,index) in static_nav_data" :key="index">
                    <a class="item" @click="toTarget(item.nid)" href="javascript:;">{{ item.name }}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <!-- 轮播图 -->
          <div class="banner-wrapper" ref="ddd">
            <div class="wrapper-empty">
              <!-- 轮播图结构 -->
              <div class="swiper-banner">
                <div class="swiper-wrapper" id="ani_ban_1">

                  <div class="swiper-slide" v-for="item in initData.scroll_1" :key="item.imgUrl">
                    
                    <div class="slide-box">
                      <img class="special-bg" :src="item.imgUrl" alt="">
                      <div class="banner-msg">
                        <!-- 动画盒子 -->
                        <div class="animate-wrapper" :id="item.ref">
                          <h1 class="special-title ani_ban-title">{{ item.title }}</h1>
                          <p class="special-text ani_ban-text">{{ item.text }}</p>
                          <div class="special-btn ani_ban-btn">{{ item.btn }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="swiper-banner-pagination"></div> -->
              </div>

            </div>

          </div>
        </div>
        <!-- 第二屏 产品-->
        <section class="sec-wrapper" id="product">
          <div class="wrapper-empty">
            <div class="sec-box">
              <div class="wrapper-bg">
                <img src="~static/sec-bg.jpg" alt="" class="sec-bg">
              </div>
              <div class="desc-box">
                <!-- 大标题 -->
                <div class="topic-header">
                  <h2 class="com-desc title">产品</h2>
                  <p class="com-desc text">
                    公司专注互联网创新移动应用开发、专注于帮助改变传统企业的服务模式，主推互联网平台建设、
                    行业解决方案、App定制开发等业务，目前已与数十家企事业单位合作，为他们提供了包括网站、APP、微信端等在内的一整套技术解决与服务方案。
                  </p>
                </div>
                <!-- 产品内容 -->
                <div class="topic-containner">
                  <div class="containner-empty">

                  </div>
                </div>
              </div>
            </div>
            <!-- 自定义按钮(可复用) -->
            <div class="more-tip">
              <!-- <a class="more-btn"  href="javascript:;">查看更多产品!</a> -->
            </div>
          </div>
        </section>
        <!-- 第三屏 硬件 -->
        <section class="thr-wrapper" id="hardware">
          <div class="wrapper-empty">
            <div class="thr-box">
              <div class="wrapper-bg">
                <img src="~static/thr-bg.jpg" alt="" class="thr-bg">
              </div>
              <div class="desc-box">
                <!-- 大标题 -->
                <div class="topic-header" :id="initData.scroll_3.s_t_ref">
                  <h2 class="com-desc title ani_3_t_title">{{ initData.scroll_3.s_t_title }}</h2>
                  <p class="com-desc text ani_3_t_exp">{{ initData.scroll_3.s_t_exp }}</p>
                </div>

                <!-- 硬件内容 -->
                <div class="topic-containner">
                  <div class="containner-empty">
                    <!-- 循环硬件服务数据 -->
                    <div class="situation-item" v-for="item in initData.scroll_3.s_b_info" :key="item.ref">
                      <!-- 文字在右边的情况 -->
                      <div :id="item.ref" class="item-box first-box" v-if="item.direction === 'right'">
                        <div class="item-empty" >
                          <!-- 左 图 -->
                          <div class="item-cont-left">
                            <img class="product-avatar ani_3-img" :src="item.imgUrl" alt="">
                          </div>
                          <!-- 右 文本-->
                          <div class="item-cont-right">
                            <div class="product-desc">

                              <div class="product-empty">
                                <h1 class="product-title ani_3-title">{{ item.title }}</h1>
                                <p class="product-text ani_3-text">{{ item.text }}</p>
                                <div class="more-btn ani_3-btn">{{ item.btn }}</div>
                              </div>

                            </div>
                          </div>
                        </div>

                      </div>
                      <!-- 文字在左边的情况 -->
                      <div :id="item.ref" class="item-box sec-box" v-if="item.direction === 'left'">

                        <div class="item-empty">
                          <!-- 左 文本 -->
                          <div class="item-cont-left">
                            <div class="product-desc">

                              <div class="product-empty">
                                <h1 class="product-title ani_3-title">{{ item.title }}</h1>
                                <p class="product-text ani_3-text">{{ item.text }}</p>
                                <div class="more-btn ani_3-btn">{{ item.btn }}</div>
                              </div>

                            </div>
                          </div>
                          <!-- 右 图 -->
                          <div class="item-cont-right">
                            <img class="product-avatar ani_3-img" :src="item.imgUrl" alt="">
                          </div>

                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 第四屏 服务-->
        <section class="four-wrapper" id="server">
          <div class="wrapper-empty">
            <div class="four-box">
              <!-- 这里可以放wrapper-bg -->
              <div class="desc-box" v-for="(item,index) in initData.scroll_4" :key="index">
                <div class="topic-header" :id="item.s_t_ref">
                  <h2 class="com-desc title ani_4_t_title">{{ item.s_t_title }}</h2>
                  <p class="com-desc text ani_4_t_exp">{{ item.s_t_exp }}</p>
                </div>
                <!-- 产品内容 -->
                <div class="topic-containner">
                  <div class="containner-empty">
                    <ul class="list-item" id="sp_four">
                      <li class="item-box" :id="citem.ref" v-for="(citem,index) in item.s_b_info" :key="index">
                        <div class="item">
                          <h2 class="item-title ani_4_name">{{ citem.fun_name }}</h2>
                          <div class="item-avatar-wrapper">
                            <img class="item-avatar ani_4_avatar" :src="citem.fun_avatar_url" alt="">
                          </div>
                          <p class="item-desc ani_4_exp">{{ citem.fun_exp }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 第五屏 解决方案-->
        <section class="five-wrapper" id="solution">
          <div class="wrapper-empty">
            <div class="five-box">
              <!-- 这里可以放wrapper-bg -->
              <div class="desc-box">
                <div class="topic-header">
                  <h2 class="com-desc title ani_5_big_title">{{ initData.scroll_5.s_t_title }}</h2>
                  <p class="com-desc text ani_5_big_exp">{{ initData.scroll_5.s_t_exp }}</p>
                </div>
                <!-- 产品内容 -->
                <div class="topic-containner ani_5_wrapper">
                  <div class="containner-empty">
                    <!-- <div class="hide-hover"></div> -->
                    <!-- vue-swiper -->
                    <div class="swiper-container swiper-no-swiping">
                      <div class="swiper-wrapper">

                        <div class="swiper-slide"
                             v-for="(item,index) in initData.scroll_5.s_b_info" :key="index"
                        >
                          <!-- ---@mousemove="showSolve(item.solve_ref)"---- -->
                          <div :id="item.solve_ref" class="slide-content" 
                          :style="{backgroundImage:'url(' + item.solve_bg_url + ')'}"
                          >
                            <div class="slide-top" >
                              <img class="slide-icon ani_5_t_icon" :src="item.solve_icon" alt="">
                              <h3 class="ani_5_t_name">{{ item.solve_name }}</h3>
                            </div>

                            <div class="slide-bottom">
                              <p class="ani_5_t_exp">{{ item.solve_exp }}</p>
                              <a class="go-more ani_5_t_btn" href="javascript:;">
                                咨询详情
                                <i>➔</i>
                              </a>
                            </div>

                          </div>
                        </div>

                      </div>
                      <!-- 前进后退按钮 -->
                      <div class="swiper-button-prev" slot="button-prev"></div>
                      <div class="swiper-button-next" slot="button-next"></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 第六屏 关于我们 -->
        <section class="six-wrapper" id="about-us">
          <div class="wrapper-empty">
            <div class="six-box">
              <!-- 这里可以放wrapper-bg -->
              <div class="desc-box">
                <div class="topic-header">
                  <h2 class="com-desc title ani_6_t-title">{{ initData.scroll_6.s_t_title }}</h2>
                  <p class="com-desc text ani_6_t-exp">{{ initData.scroll_6.s_t_exp }}</p>
                </div>
                <!-- 产品内容 -->
                <div class="topic-containner">
                  <div class="containner-empty">
                    <ul class="list-item">

                      <li class="item-box" v-for="(item,index) in initData.scroll_6.s_b_info" :key="index">
                        <div class="item">
                          <!-- <h2 class="item-title">智能物联</h2> -->
                          <div class="item-avatar-wrapper ani_6-avatar">
                            <img class="item-avatar" :src="item.about_avatar" alt="">
                          </div>
                          <p class="item-desc ani_6-title">{{ item.about_title }}</p>
                        </div>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 第七屏  联系我们-->
        <section class="seven-wrapper" id="connect-us">
          <div class="wrapper-empty">
            <div class="seven-box">
              <!-- 这里可以放wrapper-bg -->
              <div class="desc-box">
                <div class="topic-header">
                  <h2 class="com-desc title">联系我们</h2>
                  <p class="com-desc text">
                    告诉我们您想要的吧
                  </p>
                  <h3>400-969-9980</h3>
                </div>
                <!-- 联系我们 -->
                <div class="topic-containner">
                  <div class="top-line"></div>
                  <div class="containner-empty">
                    <div class="cont-box">
                      <!-- 二维码 -->
                      <!-- <div class="QR-code"></div> -->
                      <!-- 公司联系信息 -->
                      <div class="connect-msg">
                        <ul class="connect-list">
                          <li>
                            <p>地址：广州市黄埔区开源大道88莱迪节能科技园C栋6楼</p>
                          </li>
                          <li>
                            <p>联系电话：18688840992      （工作时间：09：00-18:00（周一至周五））</p>
                          </li>
                          <li>
                            <p>商务合作：langjianwen@wwhl-iot.com</p>
                          </li>
                          <li>
                            <p>人才招聘：hr@wwhl-iot.com</p>
                          </li>
                          <li>
                            <p>驾车：开源大道交接处，往北行驶50米即到</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  //引入官网请求
  import {getHomeData} from '~/assets/services/common';
  // import { swiper } from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
  import M from '~/assets/utils/tool.js'
  export default {
    components: {
    },
    data() {
      return {
        clientHeight: '',
        scroll: null,
        options: {
         pullDownRefresh: true, //关闭下拉
         pullUpLoad: true, // 关闭上拉
          click: false,
          probeType: 3,
          startY: 0,
          scrollbar: true,
          disableMouse: false,
          mouseWheel: true
        },


        static_nav_data:[
          {
            name : '首页',
            nid : '#home',
          }, {
            name : '产品',
            nid : '#product',
          }, {
            name : '硬件',
            nid : '#hardware',
          }, {
            name : '服务',
            nid : '#server',
          }, {
            name : '解决方案',
            nid : '#solution',
          }, {
            name : '关于我们',
            nid : '#about-us',
          }, {
            name : '联系我们',
            nid : '#connect-us',
          },
        ],

        initData: {
          
          scroll_1: {
            banner_bg_1: {
              imgUrl: 'web/images/home-banner/banner-1.jpg',
              title: '更好的教育对人体具有',
              text: '的符号电视台升堂入室会让他身体人生几何人同时进入调试听人说华人对他九回复动画的技能大美女头发的加拿大人推进海南的人九年的技能头发的九年他',
              btn: '了解详情',
              ref: 'ref_i_1-1'
            },
            banner_bg_2: {
              imgUrl: 'web/images/home-banner/banner-2.jpg',
              title: '脱衣服借款用途',
              text: '是个好人他说他认识他认识突然回头人士的话听人说听人说突然会突然和她认识是否会让他',
              btn: '了解详情',
              ref: 'ref_i_1-2'
            },
            banner_bg_3: {
              imgUrl: 'web/images/home-banner/banner-3.jpg',
              title: '同样的就业体检通用',
              text: '的法国而法国二阿哥二过热爱国乳房饿啊是给热狗二十过热是不会虽然给别人方式和她认识华人和任何让他会让他',
              btn: '了解详情',
              ref: 'ref_i_1-3'
            },
            banner_bg_4: {
              imgUrl: 'web/images/home-banner/banner-4.jpg',
              title: '非归档复旦皇冠',
              text: '第三方的方式部分上班人事部然后人太少肉体和让他会突然和内容太多机会一条具有井井有条人家一听',
              btn: '了解详情',
              ref: 'ref_i_1-4'
            },
            // banner_bg_5: {
            //   imgUrl: 'web/images/home-banner/banner-5.jpg',
            //   title: '佛山东莞佛山东莞',
            //   text: '二问题热特热问题热舞突然特意投入已投入有如右图撸雷u',
            //   btn: '了解详情',
            //   ref: 'ref_i_1-5'
            // }
          },
          // 第三屏
          scroll_3: {
            s_t_title: '硬件',
            s_t_exp : '的发生生法国建行股份的截图大家一天地间广东福建一天放假一天就他已经酷睿苦于痛苦周讲库已经亏公开uigk说痛苦与库一天就看说具有即可詥说',
            s_t_ref : 'ref_i_3_big_t',
            s_b_info : [
              {
              imgUrl: 'web/images/hardware/product_1.jpg',
              title: '4G硬件服务',
              text: '风光得很坦然是是听人说人太少和的撒 打赏v第四vdf上和她认识的会突然和乳房动画部分的设备定时发布浮动吧动画烦得很浮动',
              btn: '了解详情',
              ref: 'ref_i_3-1',
              direction: 'right'
              },
              {
              imgUrl: 'web/images/hardware/product_2.jpg',
              title: 'wifi硬件服务',
              text: '尔阿塔个人饿啊是给热圣公会二会突然是突然会突然和他人会突然和更多人华人动画突然和高度融合让她感到和认同感和他人的很多人挺好让她感到和认同感的话让他和通过电话 和同样的然后突然的话题人都会他',
              btn: '了解详情',
              ref: 'ref_i_3-2',
              direction: 'left'
              },
            ]
          },
          // 第四屏
          scroll_4: {
            ss: {
              s_t_title: '服务',
              s_t_exp: '我们专注于云大物移智领域综合解决方案，涵盖了移动应用、微信开发、大型软件、CDN建设、智慧物联等，我们用优质服务为您赢得商机。',
              s_t_ref: 'ref_i_4_big_t',
              s_b_info: [
                {
                  fun_name: '智能物联',
                  fun_avatar_url: 'web/images/function-server/four_fun_1.jpg',
                  fun_exp: '手机网站、原生APP、API开发、H5单页等移动终端产品定制开发！',
                  ref: 'ref_i_4-1'
                },
                {
                  fun_name: 'APP开发',
                  fun_avatar_url: 'web/images/function-server/four_fun_2.jpg',
                  fun_exp: '拥有一批资深硬件工程师及嵌入式系统设计工程师，具备多年无线通讯技术开发经验积累',
                  ref: 'ref_i_4-2'
                },
                {
                  fun_name: '微信/小程序',
                  fun_avatar_url: 'web/images/function-server/four_fun_3.jpg',
                  fun_exp: '基于微信/小程序模板消息、微信支付等开放组件及接口开发各类微信场景应用！',
                  ref: 'ref_i_4-3'
                },
                {
                  fun_name: '电商系统',
                  fun_avatar_url: 'web/images/function-server/four_fun_4.jpg',
                  fun_exp: 'B2B电商系统、B2C商城系统、B2B2C电商平台、O2O商城平台等多类型电商系',
                  ref: 'ref_i_4-4'
                }
              ]
            },
          },
          scroll_5: {
            s_t_title: '解决方案',
            s_t_exp: '我们专注于“云大物移智”领域综合解决方案，涵盖了移动应用、微信开发、大型软件、CDN建设、智慧物联等，我们用优质服务为您赢得商机。',
            s_t_ref: 'ref_i_5_big_t',
            s_b_info: [
              {
                solve_name: 'RFID射频识别',
                solve_exp: '金融就是对现有资源进行重新整合之后,实现价值和利润的等效流通。目前，越来越多的用户通过移动APP进行投资理财、移动态和及时新闻资讯。',
                solve_bg_url: 'web/images/solution/solve--1.jpg',
                solve_icon: 'web/images/solution/icon/icon1.jpg',
                solve_ref: 'ref_i_5_1'
              },
              {
                solve_name: 'RFID射频识别',
                solve_exp: '地产行业软件迎合了移动互联网的发展趋势，解决了房企精准推介难，客户找房难的信息不对等难题，楚才科技致力于营销解决方案。',
                solve_bg_url: 'web/images/solution/solve--2.jpg',
                solve_icon: 'web/images/solution/icon/icon2.jpg',
                solve_ref: 'ref_i_5_2'
              },
              {
                solve_name: 'RFID射频识别',
                solve_exp: '随着家政行业日渐兴盛，客户对于提供家政服务的标准化、人员正规化、预定智能化、信息透明化有了更高的要求，楚才科技致力于为。',
                solve_bg_url: 'web/images/solution/solve--3.jpg',
                solve_icon: 'web/images/solution/icon/icon3.jpg',
                solve_ref: 'ref_i_5_3'
              },
              {
                solve_name: 'RFID射频识别',
                solve_exp: '行业门户是提供某行业综合信息资源的大型平台，是对外展示该行业中生产、供应链、客户销售以及周边行业的企业平台，楚才科。',
                solve_bg_url: 'web/images/solution/solve--4.jpg',
                solve_icon: 'web/images/solution/icon/icon4.jpg',
                solve_ref: 'ref_i_5_4'
              },
              {
                solve_name: 'RFID射频识别',
                solve_exp: '社交是每个热生活不可缺少的重要部分，随着短视频、直播类使用场景不断完善，大家逐渐习惯用手机社交a。',
                solve_bg_url: 'web/images/solution/solve--5.jpg',
                solve_icon: 'web/images/solution/icon/icon5.jpg',
                solve_ref: 'ref_i_5_5'
              },
              {
                solve_name: 'RFID射频识别',
                solve_exp: '医疗行业拥抱互联网给患者看病带来了便捷，楚才科技致力于提供AI问诊、在线预约、人工问诊、电子病历、健康测试、在线药店等医疗行业全功能，。',
                solve_bg_url: 'web/images/solution/solve--6.jpg',
                solve_icon: 'web/images/solution/icon/icon6.jpg',
                solve_ref: 'ref_i_5_6'
              },
              {
                solve_name: 'RFID射频识别',
                solve_exp: '餐饮行业的竞争激烈，楚才科技完美整合商城、营销、会员、外卖、排队、支付等各个环节，通过多样的营销工具和会员管理帮助餐厅多。',
                solve_bg_url: 'web/images/solution/solve--7.jpg',
                solve_icon: 'web/images/solution/icon/icon7.jpg',
                solve_ref: 'ref_i_5_7'
              },
              {
                solve_name: 'RFID射频识别',
                solve_exp: '电商类软件最重要的是结合产品特点规划销售模式以及运营模式。楚才科技已经为上千家电商企业打造O2O、B2B、B2C、B2B径。',
                solve_bg_url: 'web/images/solution/solve--8.jpg',
                solve_icon: 'web/images/solution/icon/icon8.jpg',
                solve_ref: 'ref_i_5_8'
              },
            ]
          },
          scroll_6:{
            s_t_title: '关于我们',
            s_t_exp: '我们专注于“云大物移智”领域综合解决方案，涵盖了移动应用、微信开发、大型软件、CDN建设、智慧物联等，我们用优质服务为您赢得商机。',
            s_t_ref: 'ref_i_6_big_t',
            s_b_info:[
              {
                about_title:'等富含天然',
                about_avatar:'web/images/about-us/about-us-1.jpg',
                about_ref: 'ref_i6_1'
              },
              {
                about_title:'他一定要团结',
                about_avatar:'web/images/about-us/about-us-2.jpg',
                about_ref: 'ref_i6_2'
              },
              {
                about_title:'发给大家有',
                about_avatar:'web/images/about-us/about-us-3.jpg',
                about_ref: 'ref_i6_3'
              },
              {
                about_title:'更好的放假一天',
                about_avatar:'web/images/about-us/about-us-4.jpg',
                about_ref: 'ref_i6_4'
              },
              {
                about_title:'更好的放假一天',
                about_avatar:'web/images/about-us/about-us-4.jpg',
                about_ref: 'ref_i6_5'
              },
              {
                about_title:'更好的放假一天',
                about_avatar:'web/images/about-us/about-us-4.jpg',
                about_ref: 'ref_i6_6'
              },
              {
                about_title:'更好的放假一天',
                about_avatar:'web/images/about-us/about-us-4.jpg',
                about_ref: 'ref_i6_7'
              },
              {
                about_title:'更好的放假一天',
                about_avatar:'web/images/about-us/about-us-4.jpg',
                about_ref: 'ref_i6_8'
              },
            ]
          }

        }
      }
    },
    async asyncData(){
      const res = await getHomeData();
      return {
        infoData: res.data
      }
    },
    created(){
      this.$nextTick(() => {
        this.load()
        this.setData()
      })
    },
    mounted(){
      // 获取浏览器可视区域高度
      this.clientHeight = `${document.documentElement.clientHeight}`          //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
      this.initAniGo_5_banner();
      this.init();
      this.initScroll();
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    methods: {
    // 锚点--绑定滚动
    // 定位锚点
    toTarget(nid){
      this.scroll.scrollTo(0,-M.getElem(nid).offsetTop,1000,'easing')
    },

      // 动态修改浏览器窗口高度
      changeFixed(clientHeight){
        M.getElem('#homePage').style.height = clientHeight + 'px';
      },
      initAniGo_5_banner(){
        // 轮播图-解决方案
        new Swiper('.swiper-container', {
          loop: true,
          centeredSlides: true,
          slidesPerView: 5,     //展示5个
          slidesPerGroup: 1,    //一次滚动1个
          // prevButton: '.swiper-button-prev',
          // loopedSlides: 1,
          autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          navigation: {                    // 如果需要前进后退按钮
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      },
      // 加载滚动指定位置触发动画函数
      load() {
        let _this = this;
        if (!_this.scroll) {
          _this.scroll = new BScroll(_this.$refs.wrapperd, _this.options);
          _this.scroll.on('scroll', (pos) => {
            _this.scrollY = Math.abs(Math.round(pos.y))

            console.log( _this.scrollY)
            if(_this.scrollY >= 400 && _this.scrollY <= 780){

            } else if (_this.scrollY >= 800 && _this.scrollY <= 1400) {
              // 第三屏 硬件服务动画
              _this.$options.methods.initAniGo(_this)
            } else if (_this.scrollY >= 1500 && _this.scrollY <= 2100) {
              // 第四屏 动画
              _this.$options.methods.initAniGo_4(_this)
            } else if (_this.scrollY >= 2200 && _this.scrollY <= 3200) {
            
              // 第五屏 动画
              _this.$options.methods.initAniGo_5(_this)
            } else if (_this.scrollY >= 3300 && _this.scrollY <= 4200) {
              // 第六屏 动画
              _this.$options.methods.initAniGo_6(_this)
            }else if (_this.scrollY >= 4300 && _this.scrollY <= 5000) {
              // 第七屏 动画
              _this.$options.methods.initAniGo_7(_this)
            }
          })
          console.log(8888)
        } else {
          console.log(6565)
           _this.scroll.refresh()
        }
      },
      // 第三屏 硬件服务动画
      initAniGo(_this){
        _this.$options.methods.hardware_go({
          ref: '#ref_i_3_big_t',
          aniEl: ['.ani_3_t_title', '.ani_3_t_exp'],
          dir: 'right'
        });
        _this.$options.methods.hardware_go({
          ref: '#ref_i_3-1',
          aniEl: ['.ani_3-img', '.ani_3-title', '.ani_3-text', '.ani_3-btn'],
          dir: 'right'
        });
        _this.$options.methods.hardware_go({
          ref: '#ref_i_3-2',
          aniEl: ['.ani_3-img', '.ani_3-title', '.ani_3-text', '.ani_3-btn'],
          dir: 'left'
        });
      },
      // 第三屏 硬件服务动画
      hardware_go (arg){
        // 如果文本在右边
        let len = arg.aniEl.length;
        if(!arg.dir){
           for (let i = 0; i < len; i++) {
            Velocity(M.getElem(arg.ref, arg.aniEl[i]), {translateY: "-20px", opacity: 1}, {
              duration: 600,
              delay: i * 200 + 200
            });
          }
        }
        if (arg.dir === 'right') {
          for (let i = 0; i < len; i++) {
            Velocity(M.getElem(arg.ref, arg.aniEl[i]), {translateY: "-20px", opacity: 1}, {
              duration: 600,
              delay: i * 200 + 1000
            });
          }
        }
        // 如果文本在左边
        for (let i = 0; i < len; i++) {
          Velocity(M.getElem(arg.ref, arg.aniEl[i]), {translateY: "-20px", opacity: 1}, {
            duration: 600,
            delay: i * 200 + 1000
          });
        }
      },

      // 第四屏 动画
      initAniGo_4(_this){
        _this.$options.methods.go_1({ref: '#ref_i_4_big_t', aniEl: ['.ani_4_t_title', '.ani_4_t_exp'], belong: 'be_1'});
        for (let i = 1, len = M.getAllElem('#sp_four', '.item-box').length + 1; i < len; i++) {
          _this.$options.methods.go_1({
            ref: '#ref_i_4-' + i,
            aniEl: ['.ani_4_name', '.ani_4_avatar', '.ani_4_exp'],
            belong: 'be_2',
            ani_delay: i * 200
          });
        }
      },
      // 第四屏 动画
      go_1(arg){
        let len = M.getAllElem('#sp_four', '.item-box');
        if (arg.belong === 'be_1') {
          Velocity(M.getElem(arg.ref, arg.aniEl[0]), {translateY: "-26px", opacity: 1}, {duration: 600, delay: 100});
          Velocity(M.getElem(arg.ref, arg.aniEl[1]), {translateY: "-26px", opacity: 1}, {duration: 600, delay: 200});
        } else {
          for (let i = 0, len = arg.aniEl.length; i < len; i++) {
            Velocity(M.getElem(arg.ref, arg.aniEl[i]), {translateY: "-26px", opacity: 1}, {
              duration: 600,
              delay: arg.ani_delay + i * 200
            });
          }
        }
      },
      // 第五屏 动画
      initAniGo_5(_this){
        _this.$options.methods.solution_move({
          ref:'#solution',
          aniEl:['.ani_5_big_title','.ani_5_big_exp','.ani_5_wrapper']
        })
      },
      // 第五屏 动画
      solution_move(arg){
        for(let i=0,len=arg.aniEl.length;i<len;i++){
          Velocity(M.getElem(arg.ref, arg.aniEl[i]),{translateY: "-30px", opacity: 1},
          {duration: 800, delay: i*300})
        }
      },
      // 第六屏 动画
      initAniGo_6(_this){
        _this.$options.methods.about_us_move({
          ref:'#about-us',
          aniEl:['.ani_6_t-title','.ani_6_t-exp'],
        })

        for (let i = 1, len = M.getAllElem('#about-us', '.item-box').length + 1; i < len; i++) {
          _this.$options.methods.about_us_move({
            ref: '#ref_i6-' + i,
            aniEl: ['.ani_6-avatar', '.ani_6-title'],
            has: 'yes',
            ani_delay: i * 200
          });
        }
      },
      // 第六屏 动画
      about_us_move(arg){
        if(!arg.has){
          for(let i=0,len=arg.aniEl.length;i<len;i++){
          Velocity(M.getElem(arg.ref, arg.aniEl[i]),{translateY: "-30px", opacity: 1},
          {duration: 800, delay: i*300})
          }
          return;
        }
        for(let q=0,len=arg.aniEl.length;q<len;q++){
          Velocity( M.getAllElem('#about-us',arg.aniEl[q]),{translateY: "-30px", opacity: 1},
          {duration: 800, delay: arg.ani_delay+q*200});
        }

        
      },

      setData() {
        this.$nextTick(() => {
          // let arr = [1, 2, 3, 'james'];
          // this.data = this.data.concat(arr)// 添加数据
          // this.scroll.finishPullUp();
          // this.pullingDownUp()
        })
      },
      initScroll(){
        this.$nextTick(() => {
          new BScroll(this.$refs.wrapperd, {
            probeType: 3,//探针，获取滑动距离必备
            click: true
          });
        })
      },
      init(){
        let _this = this
        new Swiper('.swiper-banner', {
          loop: true,
          effect : 'fade',
          centeredSlides: true,
          slidesPerView: 1,     //展示1个
          slidesPerGroup: 1,    //一次滚动1个
          pagination: {
            el: '.swiper-banner-pagination',
            clickable: true,
          },
          autoplay: {
            autoplayDisableOnInteraction: false,
            delay: 4000,
            // stopOnLastSlide: true,
            // disableOnInteraction: false,
          },
          on: {
           
          }
        })
        // END
      },


      //
      open_solution(){
        // console.log(4684684)
      },


      // 第一屏 banner 文本动画
      banner_go (arg){
        for (let i = 0, len = arg.aniEl.length; i < len; i++) {
          Velocity(M.getElem(arg.ref, arg.aniEl[i]), {translateY: "20px", opacity: 1}, {
            duration: 600,
            delay: 200 + i * 200
          });
        }
      },


    },
    beforeDestroy(){
      window.removeEventListener("scroll",this.onScroll)
},
  }
</script>

<style lang="stylus">
  .wrapperd {
    position absolute
    left 0
    top 0
    width: 100%;
    height: 958px;
    overflow hidden

  }

  body {
    background #eeeeee
    overflow-x hidden
    overflow-y hidden
  }

  .body-wrapper
    .wwhl-header
      position fixed
      top 40px
      left 0
      width 100%
      overflow hidden;
      z-index 3
      &:after
        content: "";
        position: absolute;
        bottom: 0;
        left: 0px;
        right: 0px;
        height: 100%;
        z-index: -1;
      .header-wrapper
        width 1170px
        margin 0 auto
        .nav-bar
          .wwhl-logo
            float left
            .logo-img
              display block
              padding 5px 0
              width 168px
          .nav-list
            float right
            font-size 18px
            .list-item
              float left
              .item
                display block
                padding 14px 16px
                color #fff
                font-weight 500
                position relative
                &::after
                  content ""
                  position absolute
                  left 0
                  bottom 0
                  width 0
                  height 2px
                  background-color #fff
                  transition .4s
                &:hover::after
                  width 100%

    .banner-wrapper
      overflow hidden
      width 100%
      background gray
      .wrapper-empty
        width 100%
        height 600px
        background red
        position relative
        .swiper-banner

          .swiper-wrapper

            .swiper-slide

              .slide-box
                width 1170px
                .special-bg
                  display block
                .banner-msg
                  position absolute
                  top 50%
                  left 50%
                  margin-left -300px
                  width 600px
                  height 260px

                  .animate-wrapper
                    height 100%
                    width 100%
                    text-align center
                    .special-title
                      text-align center
                      font-size 38px
                      color #fff
                      padding 28px 0 0 0
                      opacity .8
                    .special-text
                      text-align center
                      font-size 18px
                      color rgba(255, 255, 255, .6)
                      margin 48px 0
                      opacity .8
                    .special-btn
                      font-size 18px
                      width 140px
                      height 40px
                      background #eee
                      line-height 40px
                      border-radius 20px
                      margin 0 auto
                      cursor pointer
                      position relative
                      overflow hidden
                      z-index 3
                      opacity .8
                      &::after
                        position absolute
                        left 0
                        top 0

                        content ""
                        background #58d4fd
                        width 20px
                        height 20px
                        border-radius 10px
                        transition all .2s
                        z-index -1
                      &:hover:after
                        content ""
                        width 100%
                        height 100%
                        color #fff
                        background #adeafe

  // 包裹轮播组件
  // .banner-wrapper
  //   position relative

  // vue-awesome-swiper样式
    .swiper-slide {
      font-size: 18px;
      color: #564;
      height 470px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      background-color: transparent !important;
      position relative
    }
  // 第二屏
    .sec-wrapper
      .wrapper-empty
        position relative
        .sec-box
          position relative
          .wrapper-bg
            position relative
            .sec-bg
              display block
          .desc-box
            position absolute
            left 0
            top 0
            width 100%
            .topic-header
              width 750px
              margin 40px auto
              .com-desc
                text-align center
                &.title
                  margin: 0 0 30px 0;
                  font-size: 34px;
                  font-weight: 300;
                  color: #ffffff;
                  text-transform: uppercase;
                  position: relative;
                  display: block;
                  padding-bottom: 20px;
                  line-height: 1.5;
                  &:after
                    content: "";
                    position: absolute;
                    display: block;
                    width: 80px;
                    height: 2px;
                    background: #52d3aa;
                    left: 50%;
                    margin-left: -40px;
                    bottom: 0;
                    background: rgba(255, 255, 255, .3);
                &.text
                  font-size 16px
                  color rgba(255, 255, 255, .8)
            .topic-containner
              .containner-empty
                width 100%
                background gray

  // 第三屏
    .thr-wrapper
      .wrapper-empty
        .thr-box
          position relative
          .thr-bg
            display block
            height 780px
          .desc-box
            position absolute
            left 0
            top 0
            width 100%
            .topic-header
              width 750px
              margin 80px auto 0
              .com-desc
                text-align center
                &.title
                  margin: 0 0 30px 0;
                  font-size: 34px;
                  font-weight: 300;
                  color: #fff;
                  text-transform: uppercase;
                  position: relative;
                  display: block;
                  padding-bottom: 20px;
                  line-height: 1.5;
                  opacity 0
                  &:after
                    content: "";
                    position: absolute;
                    display: block;
                    width: 80px;
                    height: 2px;
                    background: #52d3aa;
                    left: 50%;
                    margin-left: -40px;
                    bottom: 0;
                    background: rgba(255, 255, 255, .3);
                &.text
                  font-size 16px
                  color rgba(255, 255, 255, .8)
                  opacity 0
            .topic-containner
              width 100%
              .containner-empty
                margin 0 auto
                width 1170px
                .situation-item
                  &:after
                    display: block;
                    content: "clear";
                    height: 0;
                    clear: both;
                    overflow: hidden;
                    visibility: hidden;
                  .item-box
                    box-sizing content-box
                    width 1170px
                    &.first-box
                      .item-empty
                        padding 40px 40px 0
                        &:after
                          display: block;
                          content: "clear";
                          height: 0;
                          clear: both;
                          overflow: hidden;
                          visibility: hidden;
                        .item-cont-left
                          float left
                          .product-avatar
                            display block
                            width 280px
                            height 200px
                            border-radius 16px
                            opacity 0
                        .item-cont-right
                          float right
                          .product-desc
                            width 540px
                            .product-empty
                              padding 20px
                              .product-title
                                font-size 24px
                                color #fff
                                opacity 0
                              .product-text
                                font-size 16px
                                color #fff
                                margin 20px 0
                                opacity 0
                              .more-btn
                                text-align center
                                line-height 30px
                                width 82px
                                height 30px
                                background #eee
                                border-radius 26px
                                opacity 0
                                cursor pointer

                    &.sec-box
                      .item-empty
                        padding 20px 40px 0
                        &:after
                          display: block;
                          content: "clear";
                          height: 0;
                          clear: both;
                          overflow: hidden;
                          visibility: hidden;
                        .item-cont-left
                          float left
                          .product-desc
                            width 540px
                            .product-empty
                              padding 20px
                              .product-title
                                font-size 24px
                                color #fff
                                text-align right
                                opacity 0
                              .product-text
                                font-size 16px
                                color #fff
                                margin 20px 0
                                opacity 0
                              .more-btn
                                text-align center
                                line-height 30px
                                width 82px
                                height 30px
                                background #eee
                                border-radius 26px
                                opacity 0
                                float right
                                cursor pointer

                        .item-cont-right
                          float right
                          .product-avatar
                            display block
                            text-align right
                            width 280px
                            border-radius 16px
                            opacity 0
  // 第四屏
    .four-wrapper
      width 100%
      padding 60px 0
      transform translateY(26px)
      .wrapper-empty
        .four-box
          position relative
          .desc-box
            .topic-header
              width 750px
              margin 0 auto 60px
              .com-desc
                text-align center
                &.title
                  margin: 0 0 30px 0;
                  font-size: 34px;
                  font-weight: 300;
                  color: #333;
                  text-transform: uppercase;
                  position: relative;
                  display: block;
                  padding-bottom: 20px;
                  line-height: 1.5;
                  opacity 0
                  &:after
                    content: "";
                    position: absolute;
                    display: block;
                    width: 80px;
                    height: 2px;
                    left: 50%;
                    margin-left: -40px;
                    bottom: 0;
                    background: rgba(0, 0, 0, .3);
                &.text
                  font-size 16px
                  color #888
                  opacity 0
            .topic-containner
              width 100%
              .containner-empty
                margin 0 auto
                width 1170px
                transform translateY(20px);
                .list-item
                  height 200px
                  .item-box
                    width 292px
                    float left
                    .item-title
                      text-align: center;
                      font-size: 20px;
                      font-weight: 300;
                      color: #555;
                      opacity 0
                    .item-avatar-wrapper
                      margin 20px 0
                      .item-avatar
                        margin 0 auto
                        display block
                        border-radius 8px
                        opacity 0
                    .item-desc
                      line-height: 20px;
                      padding: 0 15px;
                      overflow: hidden;
                      font-size: 13px;
                      color: #646A75;
                      text-align: center;
                      opacity 0
  // 第五屏
    .five-wrapper
      width 100%
      padding 60px 0
      .wrapper-empty
        .five-box
          position relative
          .desc-box
            // overflow hidden
            transform translateY(30px);
            .topic-header
              width 750px
              margin 0 auto 60px
              .com-desc
                text-align center
                &.title
                  margin: 0 0 30px 0;
                  font-size: 34px;
                  font-weight: 300;
                  color: #333;
                  text-transform: uppercase;
                  position: relative;
                  display: block;
                  padding-bottom: 20px;
                  line-height: 1.5;
                  opacity 0
                  &:after
                    content: "";
                    position: absolute;
                    display: block;
                    width: 80px;
                    height: 2px;
                    left: 50%;
                    margin-left: -40px;
                    bottom: 0;
                    background: rgba(0, 0, 0, .3);
                &.text
                  font-size 16px
                  color #888
                  opacity 0
            .topic-containner
              width 100%
              height 470px
              background #1e1d27
              opacity 0
              .containner-empty
                margin 0 auto
                width 1170px
                position relative
                background #456
                .swiper-container
                  .swiper-wrapper
                    .swiper-slide
                      font-size: 18px;
                      color: #fff;
                      height 470px;
                      -webkit-box-sizing: border-box;
                      box-sizing: border-box;
                      background-color: #000;
                      .slide-content
                        width 100%
                        height 100%
                        transition .3s
                        .slide-top
                          padding-top 132px 
                          // margin 132px auto 0
                          text-align center
                          .slide-icon
                            display block
                            margin 0 auto 30px
                            border-radius 18px
                            // opacity 1
                            transition .3s
                          h3
                            font-size: 20px;
                            text-align: center;
                            margin-bottom: 35px;
                            // opacity 0.2
                            transition .3s
                        .slide-bottom
                          padding 0 40px
                          
                          p
                            color #fff
                            opacity 0.5
                            font-size 13px
                            opacity 0
                            transition .3s
                          .go-more
                            display:block
                            margin 10px auto
                            opacity 0
                            transition .3s
                            i
                              font-style italic
                        &:hover
                          background-size 116%
                          .ani_5_t_icon
                            transform translateY(-68px)
                          .ani_5_t_name
                            transition-delay:.1s;
                            color #eee
                            transform translateY(-68px)
                          .ani_5_t_exp
                            transition-delay:.2s;
                            opacity .6
                            transform translateY(-78px)
                          .go-more.ani_5_t_btn
                            opacity 1
                            transition-delay:.3s;
                            transform translateY(-78px)


  // 第六屏
    .six-wrapper
      width 100%
      padding 100px 0 60px
      background #f6f6f6
      .wrapper-empty
        .six-box
          position relative
          .desc-box
            // transform translateY(30px)
            .topic-header
              width 750px
              margin 0 auto 20px
              .com-desc
                text-align center
                &.title
                  margin: 0 0 30px 0;
                  font-size: 34px;
                  font-weight: 300;
                  color: #333;
                  text-transform: uppercase;
                  position: relative;
                  display: block;
                  padding-bottom: 20px;
                  line-height: 1.5;
                  opacity 0
                  &:after
                    content: "";
                    position: absolute;
                    display: block;
                    width: 80px;
                    height: 2px;
                    left: 50%;
                    margin-left: -40px;
                    bottom: 0;
                    background: rgba(0, 0, 0, .3);
                &.text
                  font-size 16px
                  color #888
                  opacity 0
            .topic-containner
              width 100%
              .containner-empty
                margin 0 auto
                width 1170px
                .list-item
                  // height 200px
                  &:after
                    content: ''; 
                    display: block; 
                    height: 0; 
                    clear: both; 
                    visibility: hidden; 
                  .item-box
                    width 292px
                    float left
                    .item-avatar-wrapper
                      margin 20px 0
                      height 197px
                      width 260px
                      border-radius 18px
                      opacity 0
                      overflow hidden
                      .item-avatar
                        margin 0 auto
                        display block
                        transition .6s
                        overflow hidden
                        
                        &:hover
                          transform scale(1.8)
                    .item-desc
                      line-height: 20px;
                      padding: 0 15px;
                      overflow: hidden;
                      font-size: 13px;
                      color: #646A75;
                      text-align: center;
                      opacity 0
  // 第七屏
    .seven-wrapper
      width 100%
      padding 80px 0
      background-image url('~static/web/images/contact-us/us-bg.jpg')
      position relative
      z-index 2
      &:after
        content: "";
        position: absolute;
        bottom: 0;
        left: 0px;
        right: 0px;
        background: rgba(0, 0, 0, 0.9);
        height: 100%;
        z-index: -1;
      .wrapper-empty
        .seven-box
          position relative
          .desc-box
            .topic-header
              width 750px
              margin 0 auto 20px
              h3
                text-align center
                font-size 23px
                color rgba(255, 255, 255, .8)
                margin 10px 0 0 0
              .com-desc
                text-align center
                &.title
                  margin: 0 0 10px 0;
                  font-size: 34px;
                  font-weight: 300;
                  color: #fff;
                  text-transform: uppercase;
                  position: relative;
                  display: block;
                  padding-bottom: 20px;
                  line-height: 1.5;
                  &:after
                    content: "";
                    position: absolute;
                    display: block;
                    width: 180px;
                    height: 1px;
                    left: 50%;
                    margin-left: -90px;
                    bottom: 4px;
                    background: rgba(255, 255, 255, .3);
                &.text
                  font-size 14px
                  color #888
            .topic-containner
              width 100%
              .top-line
                width 880px
                border-top 1px dashed rgba(255, 255, 255, .4)
                margin 0 auto 20px
              .containner-empty
                margin 0 auto
                width 1170px
                .cont-box
                  margin 0 auto;
                  width 580px
                  overflow hidden
                  .connect-msg
                    float right
                    .connect-list
                      li
                        p
                          font-size: 14px;
                          color: #707682;
                          height: 30px;
                          line-height: 30px;
                          padding-left: 40px;
                          margin-bottom: 9px;


</style>

