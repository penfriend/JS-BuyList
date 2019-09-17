
$(function () {
    
    
    let ITEM_TEMPLATE = $(".bl-row-template").html();
    let LIST = $(".bl-list");
    let NUMBER_OF_ITEMS = 0;
    let HOLDER_PRODUCTS_REST = $(".bl-holder-product-rest");
    let HOLDER_PRODUCTS_BOUGHT = $(".bl-holder-product-bought");
    let RIGHT_PANEL_PRODUCT = $(".box-for-rest-product").html();
     
    /******* action on button "Add An Item" *****************************/
    $(".bl-button-add").click(function () 
    {
        let input = $(".product-input");
        let value = input.val();
        one(value);
    });
    
    function one(value){
        let node = $(ITEM_TEMPLATE);
        let node_right_panel = $(RIGHT_PANEL_PRODUCT);
        if(value)
        {
     
            $(".bl-row-template").find(".bl-product").text(value);
           $(".box-for-rest-product").find(".bl-rest-product").text(value); 
            let n = node.find(".bl-label").html();
            ITEM_TEMPLATE = $(".bl-row-template").html();
            RIGHT_PANEL_PRODUCT=$(".box-for-rest-product").html();
            node = $(ITEM_TEMPLATE);
            node_right_panel = $(RIGHT_PANEL_PRODUCT);
            /****************** action on button "Delete An Item" ******************************/
            node.find(".bl-buttonDelete").click(function(){
                node.remove();
                node_right_panel.remove();
                if(NUMBER_OF_ITEMS>=0){ 
                                NUMBER_OF_ITEMS=NUMBER_OF_ITEMS-1;
                            }
                let count1=68+49*NUMBER_OF_ITEMS;
                LIST.css("height", count1+"px");
            });
            /********************** end of the action on button "Delete An Item" ******************************/
            
            /****************** action on button "Bought An Item" ******************************/

            node.find(".bl-buttonBought").click(function(){                 
                if(node.find(".bl-product").hasClass("state-bought-product")){
                    node.find(".bl-buttonBought").text("Куплено");
                    node.find(".bl-buttonDelete").show();
                    node.find(".bl-minus").show();
                    node.find(".bl-plus").show();
                    $(this).css("width", "80px");
                    node.find(".bl-product").removeClass("state-bought-product");
                    node.find(".bl-product").attr("contenteditable", true);
                    HOLDER_PRODUCTS_REST.append(node_right_panel);
                }
                else{
                    node.find(".bl-minus").hide();
                    node.find(".bl-plus").hide();
                    node.find(".bl-buttonDelete").hide();
                    node.find(".bl-buttonBought").text("Не куплено");
                    node.find(".bl-product").addClass("state-bought-product");
                    $(this).css("width", "100px");
                    node.find(".bl-product").attr("contenteditable", false);
                    HOLDER_PRODUCTS_BOUGHT.append(node_right_panel);
                }
            }); 
            /********************** end of the action on button "Bought An Item" ******************************/
          
            /****************** action on button "Plus Number Of Items" ******************************/
            node.find(".bl-plus").click(function(){
                n++;  
                console.log("blplus n= "+n);
                if(n>1){
                    node.find(".bl-label").html(n);
                    node.find(".bl-minus").attr("disabled", false);
                    node.find(".bl-minus").addClass("state-active");
                    node_right_panel.find(".bl-label-rest").html(n);
                }
            });
            /********************** end of the action on button "Plus Number Of Items" ******************************/
            
            /****************** action on button "Minus Number Of Items" ******************************/
            node.find(".bl-minus").click(function(){
                console.log("blminusdo n= "+n);
                n--;    
                console.log("blminus n= "+n);
                node.find(".bl-label").html(n);
                node_right_panel.find(".bl-label-rest").html(n);
                if(n==1){
                    node.find(".bl-label").html(n);
                    node_right_panel.find(".bl-label-rest").html(n);
                    $(this).removeClass("state-active");
                    $(this).attr("disabled", true);
                }
                if(n>1){
                    $(this).attr("disabled", false);
                }
            });
            /********************** end of the action on button "Minus Number Of Items" ******************************/
            
            LIST.append(node);
            HOLDER_PRODUCTS_REST.append(node_right_panel);
            
            $(".product-input").val("");
            NUMBER_OF_ITEMS=NUMBER_OF_ITEMS+1;
            let count=68+49*NUMBER_OF_ITEMS;
            LIST.css("height", count+"px");
            $(".product-input").focus();
        }
  }
  /******* end of the action on button "Add An Item" *****************************/
    one("Помідори");
    one("Печиво");
    one("Сир");
});
