let sourceData=[{
	product:"手机",
	region:"华东",
	sale:[120,100,140,160,180,185,190,210,230,245,255,270]
},{
	product:"手机",
	region:"华北",
	sale:[80,70,90,110,130,145,150,160,170,185,190,200]
},{
	product:"手机",
	region:"华南",
	sale:[220,200,240,250,260,270,280,295,310,335,355,380]
},{
	product:"笔记本",
	region:"华东",
	sale:[50,60,80,110,30,20,70,30,420,30,20,20]
},{
	product:"笔记本",
	region:"华北",
	sale:[30,35,50,70,20,15,30,50,710,130,20,20]
},{
	product:"笔记本",
	region:"华南",
	sale:[80,120,130,140,70,75,120,90,550,120,110,100]
},{
	product:"智能音箱",
	region:"华东",
	sale:[10,30,4,5,6,5,4,5,6,5,5,25]
},{
	product:"智能音箱",
	region:"华北",
	sale:[15,50,15,15,12,11,11,12,12,14,12,40]
},{
	product:"智能音箱",
	region:"华南",
	sale:[10,40,10,6,5,6,8,6,6,6,7,26]
}]

var region=document.getElementById("region-select");
var product=document.getElementById("product-select");
var wrapper=document.getElementById("table-wrapper");

newTable("dataTable1");
newTable("dataTable2");

region.onchange=function(){
	insertData(showData1(region.value,product.value),document.getElementById("dataTable2"));
	//insertData(showData2(region.value),document.getElementById("dataTable1"));
};

product.onchange=function(){
	insertData(showData1(region.value,product.value),document.getElementById("dataTable2"));
};

function showData1(reg,pro){
	for(var i=0;i<sourceData.length;i++){
		if(sourceData[i].region==reg && sourceData[i].product==pro){
			return sourceData[i].sale;
		}
	}
}

function showData2(reg){
	var dataList=new Array();
	for(var i=0;i<sourceData.length;i++){
		if(sourceData[i].region==reg){
			dataList.push(sourceData[i].sale);
		}
	}
	return dataList;
}

function newTable(tableId){
	var table=document.createElement("table");
	var thead=document.createElement("thead");
	for(var i=0;i<14;i++){
		var td=document.createElement("td");
		if(i==0){
			td.innerText="商品";
		}else if(i==1){
			td.innerText="地区";
		}else{
			td.innerText=(i-1)+"月";
		}
		thead.appendChild(td);
	}
	table.appendChild(thead);
	
	var tbody=document.createElement("tbody");
	var tr=document.createElement("tr");
	for(var i=0;i<14;i++){
		var td=document.createElement("td");
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
	table.appendChild(tbody);
	wrapper.appendChild(table);
	table.id=tableId;
	table.className="table";
}

function insertData(list,table){
	var tbody=table.getElementsByTagName("tbody")[0];
	/*if(list instanceof Array){
		for(var i=1;i<list.length;i++){
			var tr=document.createElement("tr");
			for(var j=0;j<14;j++){
				var td=document.createElement("td");
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		var trData=tbody.getElementsByTagName("tr");
		for(var i=0;i<trData.length;i++){
			var tdData=trData[i].getElementsByTagName("td");
			for(var j=0;j<tdData.length;j++){
				if(i==0){
					tdData[i].innerText="";	
				}else if(i==1){
					tdData[i].innerText=region.value;	
				}else{
					tdData[i].innerText=list[i][j-2];
				}	
			}
		}
	}else{*/
		var tdData=tbody.getElementsByTagName("td");
		for(var i=0;i<tdData.length;i++){
			if(i==0){
				tdData[i].innerText=product.value;	
			}else if(i==1){
				tdData[i].innerText=region.value;	
			}else{
				tdData[i].innerText=list[i-2];
			}	
		}
	//}
}

