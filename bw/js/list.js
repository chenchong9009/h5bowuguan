var baseURL = 'http://www.zdxbwg.com/api/bwlist'
var page1 = 1;
var limit1 = 10;
function ajax1(page1,limit1) {

  $.ajax({
    type: "post",
    url: baseURL,
    dataType: "json",
    data: {
        page: page1,
        limit:limit1
    },
    success: function (data) { //提交成功执行
        console.log(data,data.data.list)
       
    //   console.log(data.data)
      var str2="";  
      var fenye = ""  
      $.each(data.data.list,function(i,n){  
           
            //  str+= ` <div class="list_div">
            //  <a href="info.html?id=`+n.id+`">
            //     <div class="list_div_img"> <img class="w100 img_list" src="`+n.wwimg+`" alt=""></div>
            //     <div class="list_div_tit1">`+n.title+`</div>
            //     <div class="list_div_tit2">`+n.shiqi+`</div>
            //     <div class="list_div_tit2">`+n.year+`</div>
            //  </a>
            //  </div> `
             str2+=`

             <div class="list_div block wow fadeIn animated" data-wow-delay="0.`+ i+`s" style="visibility: visible; animation-delay: 0.`+ i+`s; animation-name: fadeIn;">
                            <a href="info.html?id=`+n.id+`">
                                <div class="list_div_img"> <img class="w100 img_list" src="`+n.wwimg+`" alt=""></div>
                               <div class="list_idv_zong">
                                  <div class="list_div_tit1">`+n.title+`</div>
                                  <div class="list_div_tit2">`+n.type+`</div>
                                  <div class="list_div_tit2">`+n.year+`</div>
                               </div>
                            </a>
                        </div> 

            
             `
             var geshu = data.data.list.length;
             fenye = `  <div class="jiazai" onClick="dainji()">加载更多</div>`
      // window.location.href="xiangqing.html?id="+n.id+"";
      }); 
      
      console.log(limit1)
      if(data.data.list.length <= 0 ){
        fenye=`<div class="jiazai2" >没有可刷新的数据啦</div>`
        $(".guding1").show()
      }else if(data.data.list.length<limit1){
        fenye=`<div class="jiazai2" >没有可刷新的数据啦</div>`
        $(".guding1").show()
      }
         
       
      $(".info_list_zong").append(str2); 
      $('.block').smoove({
        offset: '20%'
      });
      $(".info_list_zong").append(fenye);  
     
    },
    error: function (data) { //提交失败执行
        alert(data.message)
    }
  })
 
};
ajax1(page1,limit1);

function dainji(){
 $('.jiazai').remove()
  page1 += 1;
  // .list_div:nth-child(even) .list_idv_zong

  // $(".list_div:nth-child(even) .list_idv_zong")
  
  ajax1(page1,limit1)
  console.log('jiaza')
}