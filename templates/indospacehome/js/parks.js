function convert_area()
{
	var conrule_x = document.getElementById("area_conv_x").value;
	var conrule_y = document.getElementById("area_conv_y").value;
	var objValue = document.getElementById("area_param").value;
	if(isNaN(objValue)){
		document.getElementById("area_result").value ='';
		return;
	}
	switch (conrule_x)
	{
		case "0":
			switch (conrule_y)
			{
				case "0":
				document.getElementById("area_result").value = objValue;
				break;

				case "1":
				document.getElementById("area_result").value = objValue * 10.76391;
				break;

				case "2":
				document.getElementById("area_result").value = objValue / 35.5831749;
				break;
			}
		break;

		case "1":
			switch (conrule_y)
			{
				case "0":
				document.getElementById("area_result").value = objValue / 10.76391;
				break;

				case "1":
				document.getElementById("area_result").value = objValue;
				break;

				case "2":
				document.getElementById("area_result").value = objValue / 3.30578512;
				break;
			}
		break;

		case "2":
			switch (conrule_y)
			{
				case "0":
				document.getElementById("area_result").value = 35.5831749 * objValue;
				break;

				case "1":
				document.getElementById("area_result").value = objValue * 3.30578512;
				break;

				case "2":
				document.getElementById("area_result").value = objValue;
				break;
			}
		break;
	}
	document.getElementById("area_result").value = toFloat(document.getElementById("area_result").value,2);
}

function toFloat(f,s)
{   
	var re=/^[\d]+[\.]{0,1}[\d]*$/;   
	if (!re.test(f)){return false;}
	var t = Math.pow(10,s);
	var val = Math.round(f*t);
	var dort = val-Math.floor(val/t)*t;
	for (i=s;i>1;i--)
	{
		if (dort<Math.pow(10,i-1))
		{
			dort='0'+dort;
		}
	}
	return ((s>0)?(Math.floor(val/t) + "." + dort):(Math.floor(val/t)));
}
