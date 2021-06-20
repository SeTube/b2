//您自己的js代码写到下面
var icydmApp =new Vue({
    el:'#arc_toolbar_report',
    data:{
        updata:''
    },
    methods:{
        icydmVote(up){
            b2ContentFooter.vote('up');
            b2SingleMeta.postData.up=b2ContentFooter.postData.up
        }

    }
})
var icydmUpinfo =new Vue({
    el:'#v_upinfo',
    data:{
        updata:''
    },
    mounted(){

    },
    methods:{
         icydmFollowingAc(){
            b2SingleMeta.followingAc();
        }
    }
})

var icydmChange =new Vue({
    el:'#multi_page',
    data:{
        list:0,
        show:false,
        style:'list'
    },
    methods:{
         icydmSelect(index,event){
           	this.list=index
				 /*if(postType5.videos){
					 if(!postType5.user.allow){
				  		 postType5.show = true
					 }
					 if(!postType5.user.allow && postType5.videos[index].view){
						 postType5.videoUrl=postType5.videos[index].view
						 postType5.showViews=true
					 }else{
						 postType5.videoUrl=postType5.videos[index].url
						 postType5.showViews=false
					 }
			 }*/
			 if(postType5.videos){
                 if(!postType5.user.allow && postType5.videos[index].view){
                     postType5.showViews=true
                 }else{
                     postType5.showViews=false
                 }
             }
             postType5.select(index)
        },
        goSelect(){
            this.$scrollTo('#comments', 3000, {offset: -500})
        },
        icydmExpand(){
            document.getElementById("icydm_content").style.cssText=""
            this.show=true
            if(this.show){
                this.$refs.icydmexpand.classList.value='m-video-part-panel-content part-slide-enter'
            setTimeout(() =>{
                this.$refs.icydmexpand.classList.value="m-video-part-panel-content part-slide-enter-active part-slide-enter-to"
            },30)
            setTimeout(() =>{
                this.$refs.icydmexpand.classList.remove("part-slide-enter-active", 'part-slide-enter-to')
            },300);
            }
        }
    }
})

var icydm_tabInfo = new Vue ({
    el: "#icydm_tabInfo",
    data: {
        tabwidth:'',
        type:''
    },
    mounted(){
        if(!this.$refs.icydmTabInfo)return;
        this.tabwidth=this.$refs.icydmTabInfo.offsetWidth/4
    },
    methods:{
        tabClick(t){
           if(t=='comments' && t!==this.type){
               this.tabwidth=this.tabwidth*3
               this.type=t
               document.getElementById("icydm_comments").style.cssText = 'transform: translate3d(0%, 0px, 0px); transition-duration: 0.3s;';
               document.getElementById("icydm_content").style.cssText = 'transform: translate3d(-100%, 0px, 0px); transition-duration: 0.3s;height: 0;';

           }else if(t=='info' && t!==this.type){
               this.tabwidth=this.tabwidth/3
               this.type=t
               document.getElementById("icydm_comments").style.cssText = 'transform: translate3d(100%, 0px, 0px); transition-duration: 0.3s;height: 0;';
               document.getElementById("icydm_content").style.cssText = 'transform: translate3d(0%, 0px, 0px); transition-duration: 0.3s;';
           }
        }
        
    }
    
  });
 
 var icydmTitle =new Vue({
    el:'#icydm_title',
    data:{
        show:false
    },
    methods:{
            icydmTitleUp(){
                this.show=!this.show
                if(this.show){
                    vDesc.height=vDesc.offHeight
                }else{
                    vDesc.height='0px'
                }
        }
    }
})

var vDesc =new Vue({
    el:'#v_desc',
    data:{
        offHeight:'',
        height:''
    },
    mounted(){
        this.offHeight =  this.$el.offsetHeight+'px'
        if(this.offHeight){
            this.height='0px'
        }
    }
})

if(document.querySelectorAll('mark').length > 0){
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          observer.unobserve(entry.target)
        }
      })
    })
    document.querySelectorAll('mark').forEach(mark => {
      observer.observe(mark)
    })
}