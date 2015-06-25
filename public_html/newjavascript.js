
// func for showing decremating buttons
function showButtons() {
    $('#show').show();
};

function showButtons1() {
    $('#show1').show();
};

function showButtons2() {
    $('#show2').show();
};

// func for hiding decrement buttons
$("#show").click(function () {
    child = $(this).parent().children(".qt");
    if (parseInt(child.html()) < 2) {
        $("#show").hide();
    }
});

$("#show1").click(function () {
    child = $(this).parent().children(".qt");
    if (parseInt(child.html()) < 2) {
        $("#show1").hide();
    }
});

$("#show2").click(function () {
    child = $(this).parent().children(".qt");
    if (parseInt(child.html()) < 2) {
        $("#show2").hide();
    }
});

var check = false;

function changeVal(el) {

    //var pro1 = String(el.parent().children("#pro1").html());

    var qt = parseFloat(el.parent().children(".qt").html());
    var price = parseFloat(el.parent().children(".price").html());
    var eq = Math.round(price * qt * 100) / 100;

    el.parent().children(".full-price").html(eq + "€");

    changeTotal();

    //check if quantity is out of stock
    if (qt > 5) {
        $(".btn").one("click", function () {
            alert('Тhe selected quantity for product is out of stock');
        });
    }
}
//var price = 0;
function changeTotal() {

    var price = 0;

    $(".full-price").each(function (index) {
        price += parseFloat($(".full-price").eq(index).html());
    });

    price = Math.round(price * 100) / 100;
    var fullPrice = Math.round((price) * 100) / 100;

    if (price === 0) {
        fullPrice = 0;
    }

    $(".total span").html(fullPrice);

}
// func when qty is empty n' ajax request
/*$(document).ready(function () {

    $(".remove").click(function () {
        var el = $(this);
        el.parent().parent().addClass("removed");
        window.setTimeout(
          function () {
              el.parent().parent().slideUp('fast', function () {
                  el.parent().parent().remove();
                  if ($(".product").length === 0) {
                      if (check) {                        
                                  
//$(document).ready(function(){
    $("#ajax").click(function(){
        $.ajax({url: "testAjax.html", success: function(result){
            $("#ajaxtest").html(result);
        }});
    });
//}); 
                                                                                                  
                      } else {
                          $("#cart").html("<h1>Your shopping cart is empty!</h1>");
                          changeTotal();
                      }
                  }
                changeTotal();
              });
          }, 200);
    });*/

//
// simple ajax requst and cheking if cart is empty or not
$(document).ready(function () {

    $(".remove").click(function () {
        var el = $(this);
        el.parent().parent().addClass("removed");
        window.setTimeout(
          function () {
              el.parent().parent().slideUp('fast', function () {
                  el.parent().parent().remove();
                  if ($(".product").length === 0) {
                      
                      $("#cart").html("<h1 style='background: lightgreen;'>Your shopping cart is empty!</h1>");
                        changeTotal();
                  }else{
                      
                        $("#ajax").click(function(){
                            $.ajax({url: "testAjax.html", success: function(result){
                            $("#ajaxtest").html(result);
                            }});
                        });
                  }
                changeTotal();
              });
          }, 200);
    });

// adding products button functionallity

    $(".qt-plus").click(function () {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);

        $(this).parent().children(".full-price").addClass("added");

        var el = $(this);
        window.setTimeout(function () { el.parent().children(".full-price").removeClass("added"); changeVal(el); }, 150);
    });
// removing products button func
    $(".qt-minus").click(function () {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 0) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

        var el = $(this);
        window.setTimeout(function () { el.parent().children(".full-price").removeClass("minused"); changeVal(el); }, 150);
    });

    window.setTimeout(function () { $(".is-open").removeClass("is-open"); }, 1200);
    
// confirm order button func
  $(".btn").click(function () {
      //check = true;
       // $(".remove").click();
                        if($(".product").length === 0)
                        {
                            $("#cart").html("<h1>Your shopping cart is empty!</h1>");
                            changeTotal();
                        }else{
                            
                            $.ajax({url: "testAjax.html", success: function(result){
                            $("#ajaxtest").html(result);
                            }});
                            }
                    
                    });
                
});





