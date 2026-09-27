/**
 * jeDate 演示
 */
    var enLang = {                            
        name  : "en",
        month : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        weeks : [ "SUN","MON","TUR","WED","THU","FRI","SAT" ],
        times : ["Hour","Minute","Second"],
        timetxt: ["Time","Start Time","End Time"],
        backtxt:"Back",
        clear : "Clear",
        today : "Now",
        yes   : "Confirm",
        close : "Close"
    }
    
for (i = 1; i < 22; i++) { 
var tiid,start_tiid,end_ttid;
tiid=i;
if ( i < 10)  tiid= "0" + tiid;

start_tiid= "#bgTimes" + tiid;
end_ttid= "#endTimes" + tiid;
    //左边多类选择
    jeDate(start_tiid,{
        format: "YYYY-MM-DD hh:mm",
        isinitVal:true,
        isTime:false,
        initDate:[{hh:"0",mm:"-6",ss:"0"},true],   //初始化日期加0个月
        festival: false,
        theme:{ bgcolor:"#00A1CB",color:"#ffffff", pnColor:"#00CCFF"},
        shortcut:[
            {name:"现在",val:{ss:0}},
            {name:"10分钟前",val:{mm:-10}},
            {name:"20分钟前",val:{mm:-20}},
            {name:"30分钟前",val:{mm:-10}},
            {name:"2小时前",val:{hh:-2}},
            {name:"8小时前",val:{hh:-8}},
            {name:"12小时前",val:{hh:-12}},
            {name:"1天前",val:{DD:-1}},
            {name:"2天前",val:{DD:-2}},
            {name:"7天前",val:{DD:-7}},
            {name:"15天前",val:{DD:-15}},
            {name:"一年前",val:{DD:-365}}
        ],
        donefun:function (obj) {
            //alert(jeDate.getLunar(obj.date[0]).cW);
        }
    });

    jeDate(end_ttid,{
        format: "YYYY-MM-DD hh:mm",
        isinitVal:true,
        isTime:false,
        initDate:[{hh:"0"},true],   //初始化日期加0个月
        festival: false,
        theme:{ bgcolor:"#00A1CB",color:"#ffffff", pnColor:"#00CCFF"},
        shortcut:[
            {name:"10分钟前",val:{mm:-10}},
            {name:"20分钟前",val:{mm:-20}},
            {name:"30分钟前",val:{mm:-10}},
            {name:"2小时前",val:{hh:-2}},
            {name:"8小时前",val:{hh:-8}},
            {name:"12小时前",val:{hh:-12}},
            {name:"1天前",val:{DD:-1}},
            {name:"2天前",val:{DD:-2}},
            {name:"7天前",val:{DD:-7}},
            {name:"15天前",val:{DD:-15}},
            {name:"一年前",val:{DD:-365}}
        ],
        donefun:function (obj) {
            //alert(jeDate.getLunar(obj.date[0]).cW);
        }
    });



 }




  




    
    