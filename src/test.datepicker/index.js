define(function(require,exports,module){
    var $ = require("jquery");

    //小部件
    require("src/common.jui.widget/index");

    //base
    require("src/common.jui.base/index");
    require("src/common.jui.datepicker/index");

    /*$( "#datepicker" ).datepicker({
    	showCalendar: true,
    	//changeMonth: true,
    	//changeYear: true,
    	showButtonPanel: true,
        //dateFormat: "yy-mm",
    	onClose: function(selectedDate ){
            //console.log(JSON.stringify(selectedDate,null,2));
    		//$( "#datepicker").val($(".ui-datepicker-year").val()+"-"+ formatDate(Number($(".ui-datepicker-month").val())+1));
    	}
    });*/

    $( "#datepicker" ).datepicker();

    function formatDate(n){
    	return (n>9) ? n : "0"+n;
    }
});