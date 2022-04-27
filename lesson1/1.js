//////////////// random số ///////////////////////////////
function choso()
{
    var a = Math.round(Math.random()*10); // round dùng để làm tròn
    var b = Math.round(Math.random()*10);
    var c = Math.round(Math.random()*10);
    document.getElementById("a").value=a;
    document.getElementById("b").value=b; 
    document.getElementById("c").value=c; 
    var btn = document.getElementById("btngiai");
    btn.disabled = false; 
    btn.className = 'nut';
} 
function check()
{
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    if(a.value!=""&&b.value!=""&&c.value!="") document.querySelector('btngiai').disabled = false;
    var btn = document.getElementById("btngiai");
    btn.disabled = false; 
    btn.className = 'nut';
}
function checknumber(a,b,c)
{
    return isNaN(a)  || isNaN(b)  || isNaN(c) ;
}
///////////////////////////////// phuong trình bậc 2 ///////////////////
var ptb2 = {
    giai:function()
    {
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
        if(a > 10 || b > 10 || c > 10)
        {
            alert("You must enter a number less than 10");
            var btn = document.getElementById("btngiai");
            btn.disabled = false; 
            btn.className = 'nut';
        }
        if(checknumber(a,b,c) == true)
        {
            alert("Please enter the number!!!");
            var btn = document.getElementById("btngiai");
            btn.disabled = false; 
            btn.className = 'nut';
            
        }
        if(a == 0)
        {
            // ptb1
            if( b == 0)
            {
                if(c == 0)
                {
                    document.getElementById("kq").innerHTML="<p>Equation with infinite solutions</p>";
                }
                else
                {
                    document.getElementById("kq").innerHTML="<p>The equation has no solution</p>";
                }
            }
            else
            {
                var x = -c/b;
                str = `<p>Equation has solution: ${x.toFixed(2)}</p>`;
                document.getElementById("kq").innerHTML=str;
            }
        }
        else
        {
            var delta = b*b - 4*a*c;
            if (delta < 0)
            {
                // ptvn
                document.getElementById("kq").innerHTML="<p>The equation has no solution</p>";
            }
            else if(delta == 0)
            {
                // kép
                var x = -b/(2*a);
                str = `<p>Equation with double roots: ${x.toFixed(2)}</p>`;
                document.getElementById("kq").innerHTML=str;
            }
            else
            {
                // 2 nghiệm
                var x1 = (-b - Math.sqrt(delta))/(2*a );
                var x2 = (-b + Math.sqrt(delta))/(2*a ); 
                var str = ` <p> The equation has 2 distinct solutions </p>
                            <p> X <sub>1</sub> = ${x1.toFixed(2)} </p> 
                            <p> X <sub>2</sub> = ${x2.toFixed(2)} </p> 
                            `;
                document.getElementById("kq").innerHTML=str;
            }
        }
        btn  = document.getElementById("btngiai");
        btn.className="nut_khoa";
        btn.disabled=true;
    }
}
///////////////////// đếm //////////////////////////////////
var soLanGiai = 0;
function dem()
{
    soLanGiai++;
    document.getElementById("soLanGiai").innerHTML=soLanGiai;
}
///////////////////// thời gian /////////////////////
function tg()
{
    var d = new Date();
    var nam = d.getFullYear();
    var thang = d.getMonth()+1;
    var ngay = d.getDate();
    var gio = d.getHours();
    var phut = d.getMinutes();
    var giay = d.getSeconds();
    var str = `Now: ${ngay}/${thang}/${nam} ${gio}:${phut}:${giay}`;
    document.getElementById("dongho").innerHTML = str;
}
setInterval("tg()", 1000); // 1s nó chạy 1 lần


// lướt ảnh
// var images = [
//     "lesson1/anh/30.webp",
//     "lesson1/anh/31.webp",
//     "lesson1/anh/32.webp",
//     "lesson1/anh/33.webp",
//     "lesson1/anh/34.webp",
//     "lesson1/anh/35.webp",
//     "lesson1/anh/36.webp",
//     "lesson1/anh/37.webp",
//     "lesson1/anh/38.webp"
// ]
var images = [];
var maximage = 9;
for(var i = 0; i < maximage; i++)
{
    // images[i] = new Image();
    images[i] = "lesson1/anh/" + i +".webp";
}
var note = [
    "Moonlight eyes",
    "Light in the deep alley",
    "Field of my heart",
    "Damn chicken",
    "The sun in my heart",
    "Moonlight path",
    "The night hill cries",
    "Heart Gate",
    "Night sky"
]
var index = 0;
function next()
{
    index++;
    if(index >= images.length) index = 0;
    var pic = document.getElementById("picture");
    pic.src = images[index];
    document.getElementById("demanh").innerHTML = index + 1 +"/" + images.length;
    document.getElementById("note").innerHTML = note[index];
}
function prev()
{
    index--;
    if(index < 0) index = images.length - 1;
    var pic = document.getElementById("picture");
    pic.src = images[index];
    document.getElementById("demanh").innerHTML = index + 1 +"/" + images.length;
    document.getElementById("note").innerHTML = note[index];
}
setInterval("next()",5000);