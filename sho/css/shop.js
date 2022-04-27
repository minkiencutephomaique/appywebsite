// gọi onchange để có sự thay đổi value tức là sự thay đổi về giá trị
function exchangePrice()
{
    var arrayPrict = document.getElementsByName("prict");
    var obj = document.getElementById("money");
    selectionMoney = obj.value;
    for( var i = 0; i < arrayPrict.length; i++)
    {
        prict = parseFloat(arrayPrict[i].innerText);
        if(prict < selectionMoney )
        {
            arrayPrict[i].parentNode.style.display="";
        }
        else
        {
            arrayPrict[i].parentNode.style.display = "none";
        }

    }
    sum();
}


function clickCheckBox(i)
{
    var arrayAmount = document.getElementsByName("cupNumber");
    arrayAmount[i].disabled = !arrayAmount[i].disabled;
    if(arrayAmount[i].disabled == true)
    {
        arrayAmount[i].value = 0;
        arrayAmount[i].parentNode.nextElementSibling.innerText="";
    }
    sum();
}   

function intoMoney(obj)
{
    var number = obj.value;
    var prict = obj.parentNode.previousElementSibling.innerText;
    obj.parentNode.nextElementSibling.innerText = number * prict;
    sum();
}

function sum()
{
    total = 0;
    var arrayMoney  = document.getElementsByName("dolar");
    for( i = 0; i <  arrayMoney.length; i++)
    {
        if(arrayMoney[i].parentNode.style.display == "")
        {
            prict = arrayMoney[i].innerText;
            total+=Number(prict);
        }
        
    }
    document.getElementById("sum").innerHTML=total;
} 



