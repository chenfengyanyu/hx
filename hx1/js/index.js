var link = "home";
$(document).ready(function(){

		$("#changeCont").attr("class","content");
		$("#conRight").load("web/"+link+".html");
		
		$(".new_pro .np_02").bind("click",function(){
			$(".new_pro .np_02").each(function(i){
				 $(this).removeClass("curr" );
			});
			$(this).addClass("curr" );
			link = $(this).attr("name");
			$("#conRight").load("web/"+link+".html");
		});
	});

var $o = new Object();
//基础方法
$o.base = {
	e:function(a,f){
		for(var i=0,j=a.length;i<j;i++){f.call(a[i],i);}
	}
}
//幻灯片
$o. slide = function (id,arg){
	var arg = arg||{},
		t = document.getElementById(id),
		a = t.getElementsByTagName("a"),
		lis = [],
		cl = arg.color||'#f30',
		ctm = arg.time*1000||2000,
		w = t.clientWidth,
		h = t.clientHeight,
		b = ['<ul style="margin:0; padding:0; list-style:none; display:block; position:absolute; bottom:10px; right:10px;">'],
		index = 0,
		$$ = null,
		$ = null;
		function change(i){
			if(!!$$){clearTimeout($$);}
			index = !isNaN(i)?i:index+1;
			if(index >= a.length){index = 0;}
			$o.base.e(lis,function(k){if(k == index){c(1,this);}else{c(0,this)}});
			var to = - index*h;
			if(a[0].offsetTop == to){
				return;
			}else{
				if(!!$){clearInterval($);}
				$ = setInterval(function(){
					var ot = a[0].offsetTop;
					v = Math[to<ot?'floor':'ceil']((to - ot)*0.2);
					if(ot == to){clearInterval($);$=null;st();}
					ot += v;
					a[0].style.marginTop = ot + "px";
				},80)
			};
		}
		function c(b,o){
			o.style.backgroundColor = !!b?cl:"#fff";
			o.style.color = !!b?"#fff":cl;
		}
		function st(){
			if(!!$$)clearTimeout($$);
			$$ = setTimeout(function(){change()},ctm);
		}
		with(t.style){overflow = 'hidden';position = 'relative';}
		$o.base.e(a,function(n){
			this.style.display = "block";
			with(this.firstChild.style){borderWidth = '0';width = w + 'px';height = h + 'px';}
			b.push('<li style="width:20px; height:20px; line-height:20px; display:block; float:left; margin-left:5px; border:1px solid ' + cl + '; background-color:#fff; color:' + cl +'; font-size:14px; text-align:center; cursor:pointer;">' + (n+1) + '</li>');	
		});
		b.push('</ul>');
		t.innerHTML += b.join("");
		lis = t.getElementsByTagName("li");
		$o.base.e(lis,function(n){
			if(n == index){c(1,this)}
			this.onmouseover = function(){
				if(n!=index)change(n);
			}
		});
		st();
}

myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_fancy'//风格
});


var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 















