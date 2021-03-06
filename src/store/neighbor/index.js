import axios from "axios";

export default({
  namespaced: true,
  state: {
    // tTitle: "",
    // tDet:'',
    tId:'',
    details:{data:{data:[]}},
    post:{data:{data:[]}},
    collection:{data:{data:[]}},
    ll:0,
    art: [
      {
        id: 1,
        name: "张哲禹", //发帖人姓名
        header: "https://profile.csdnimg.cn/2/D/8/2_adrian503", //发帖人头像
        time: '2019/7/18 13:11:59',//date.toLocaleString(), //帖子发表时间
        title: "门口的濮思凡猪肉真新鲜", //帖子题目
        body:
          "中国日报网11月12日电 11月10日至12日，习近平主席对希腊进行国事访问。这是中国国家主席时隔11年再次访希，对中希关系发展具有承前启后、继往开来的历史意义。希腊政要接受中国日报记者采访时表示，通过此访中希两国关系会进一步全面发展，合作的步子会越迈越大，中国也在携手帮助参与共建“一带一路”的国家，支持它们走自己的发展道路，实现可持续发展。希腊前总理乔治·帕潘德里欧表示，我们欢迎习近平主席，对他的来访感到非常高兴，我的理解是，习主席会继续通过改革来促进对外开放，并继续推动中国经济的全球化，但与此同时，也要应对一些重大挑战，需要我们共同面对的挑战，同时还要帮助共同参与到“一带一路”建设中的国家，支持他们走自己的发展道路，并实现可持续发展，所以我认为这些决策是习主席作出的非常重要的决定。", //帖子正文
        urls: [
          "https://pic3.zhimg.com/50/v2-4eb670d6ffe4f3b3cc7e7026c10c491d_hd.jpg",
          "https://pic3.zhimg.com/50/v2-4eb670d6ffe4f3b3cc7e7026c10c491d_hd.jpg",
          "https://pic3.zhimg.com/50/v2-4eb670d6ffe4f3b3cc7e7026c10c491d_hd.jpg"
        ],
        goodJob: 67,
        watch: 66
      },
      {
        id: 2,
        name: "孙笑川",
        header: "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=9deb088237dbb6fd255be220311fcc25/c75c10385343fbf27e201a5abe7eca8065388fbf.jpg",
        time: '2019/7/18 13:11:59',//date.toLocaleString(),
        title: "你再骂？这个人真是有病",
        body:
          "孙笑川，微博名为“带带大师兄”（四川口音将大念作带），此前是斗鱼知名直播间“抽象工作室”（房间号6324）中的一名直播员。由于自我感觉拿到牛头、锤石后的发挥堪比冠军辅助MATA，再加上自己网恋被骗8000块的梗，在一段时间内将游戏ID改为网恋教父丶MATA川。虽然其游戏水平一般，但却在斗鱼拥有着相当可观的人气。一方面是因为他口才好，能聊天，凡事不管懂不懂都能强行分析一波。另一方面是因为他火爆的性格，时不时就会在直播过程中与弹幕“开战”，并且多次依靠炫酷的喷人技巧将带节奏的水友骂得还不了嘴。（对具体操作感兴趣的读者可以去B站搜索Show time自行感受，由于画面过于火爆就不在这里展示了。） 在这个过程中，孙笑川以及抽象工作室创造了一系列的口嗨梗，这让6324直播间几乎成为了直播圈梗文化的发源地。大家如今见到的大多数梗，都是从6324出来的。 例如NM$L、带秀、Tony 、把你的闪现然而时间一长，发言无下限的他也成为了众多黑粉的集火目标。尤其是那些被孙笑川喷过的水友们，他们群策群力，想出了一种相当无厘头的方式来捉弄他，那就是著名的@带带大师兄。操作起来倒也不难，实际上就是在微博的热点事件（当然，最好是负面）下方留言，尽可能的将祸水东引至孙笑川的微博，起到让他背锅的效果。",
        urls: [
          "http://5b0988e595225.cdn.sohucs.com/images/20180511/73c49e2f4c5f4b528851255085ee3e0b.jpeg",
          "http://5b0988e595225.cdn.sohucs.com/images/20180511/8773f81fcc04485bb71f0bb734fba02e.jpeg",
          "http://5b0988e595225.cdn.sohucs.com/images/20180511/32efd5c4ec9849b7a327f9a2318a5799.jpeg"
        ],
        goodJob: 67,
        watch: 66
      }
    ]
  },
  mutations: {
    MainBody(state,result) {
      state.details = result;
  },
  Post(state,result){
    state.post = result;
  },
  Collection(state,result){
    state.collection = result;
    // console.log(state.collection)
    console.log(result)
  },
  },
  actions: {
  appendMainBody(context,tId){
    console.log(tId)
    axios.get(`/post/postDetail?tId=${tId}`).then((result) => {
      context.commit('MainBody',result);
    })  
  },
  appendPostAll(context,uId){
  axios.get("/post/postDetailAll?uId=1").then((result) => {
      context.commit('Post',result);
    })
  },
  
  // appendMyPost(context,uId){
  //   axios.get(`/post/postDetailAll?uId=${uId}`).then((result) => {
  //       context.commit('Post',result);
  //     })
  //   },
  appendMyCollection(context,uId){
    axios.get(`/post/mycollection?uId=${uId}`).then((result) => {
        context.commit('Collection',result);
        // console.log(result)
      })
    },
    sendPost(context,post){
      // console.log('cscsc')
      axios.get(`/post/postDetailAll?uId=${post.uId}&tTitle=${post.tTitle}&tDet=${post.tDet}&tImg=${post.tImg}`).then((result) => {
        // context.commit('Collection',result);
        console.log(result)
      })
      },
    addGoodnum(context,good){
      console.log('点赞')
      axios.get(`/post/addGood?tId=${good.tId}&tGoodnum=${good.tGoodnum}`).then((result) => {
          // context.commit('Collection',result);
          // console.log(result)
        })
      },
      addSeenum(context,good){
        console.log('浏览')
        axios.get(`/post/addSee?tId=${good.tId}&tGoodnum=${good.tSeenum}`).then((result) => {
            // context.commit('Collection',result);
            console.log(result)
          })
        },
        addCollection(context,good){
          console.log('收藏')
          axios.get(`/post/collection?uId=${good.uId}&tId=${good.tId}`).then((result) => {
              // context.commit('Collection',result);
              // console.log(result)
            })
          },
          changeCon(context,good){
            console.log('改变私密状态')
            axios.get(`/post/changeCon?tId=${good.tId}&tCon=${good.tCon}`).then((result) => {
                // context.commit('Collection',result);
                console.log(result)
              })
            },
  },
  modules: {
  }
})
