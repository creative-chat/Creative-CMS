$(document).ready(function(){
  $("#submit").click(function(){
    var keyword = document.getElementById('search').value;
    ajax_logs(keyword);
	console.log(keyword);
  });
});

function ajax_logs(keyword)
{

	$.ajax({
	    url: "http://localhost/CreativeMVC/index.php?l=web&c=index&m=index",
	    method:"POST",
	    data:{keyword: keyword},
	    dataType:"JSON",
	    success:function(data)
	    {
	      console.log(data);

	      $('#logs_content').empty();

	      if (data == null) 
	      {
	        $("#logs_content").html('<div>No Data !</div>');
	      } else
	      {
	        document.getElementById("logs_content").innerHTML = logs_content(data);
	      }
	    }
	  });
}

var html = '';
function logs_content(data)
{
	html += '';
	for (var key in data)
	{
		html += '<div>'+data[key]['id']+' | '+data[key]['title']+'</div>';
	}
	
	return html;
}