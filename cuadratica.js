
	var divi=document.getElementById('div1');
	var divd=document.getElementById('div2');
	var bcuad=document.getElementById('hd1');
	var bquees=document.getElementById('hd2');
	var bsoluc=document.getElementById('hd3');
	var dcuad=document.getElementById('hdd1');
	var dcuad=document.getElementById('hdd1');
	var dquees=document.getElementById('hdd2');
	var dsoluc=document.getElementById('hdd3');
	var dmostrar=document.getElementById('r1');
	var a=document.getElementById('va');
	var b=document.getElementById('vb');
	var c=document.getElementById('vc');

var cuad=function () {

	
	dcuad.className="hd1";
	dquees.className="oculto";
	dsoluc.className="oculto";
	
}

var quees=function () {

	
	dcuad.className="oculto";
	dquees.className="hd2";
	dsoluc.className="oculto";
	
}


var soluc=function () {

	dcuad.className="oculto";
	dquees.className="oculto";
	dsoluc.className="hd3";
	
}

var resolver=function () {

	var sa=a.value;
	var sb=b.value;
	var sc=c.value;

	var suma=parseFloat(sa)+parseFloat(sb)+parseFloat(sc);

	var draiz=parseFloat(sb)*parseFloat(sb)-4*parseFloat(sa)*parseFloat(sc);

	var raiz=Math.sqrt(draiz);

	var sraiz=0-parseFloat(sb)+raiz;
	var rraiz=0-parseFloat(sb)-raiz;

	var	x1=parseFloat(sraiz)/(2*parseFloat(sa));
	var x2=parseFloat(rraiz)/(2*parseFloat(sa));

	dmostrar.innerHTML=(" x1="+x1+"; <br> x2="+x2+";");
}
