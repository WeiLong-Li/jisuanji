var button1= document.getElementsByTagName('button');
var p= document.getElementsByTagName('p')[0];
var symbolb=false;
// 记录符号
var symbol=null;
// 记录输入a的值，b的值，结果，结果保存；
var anum=0,bnum=0,result=0,resultcookie=0;
for(var i=0;i<button1.length;i++){
    button1[i].onclick=function(){
        if(this.innerText =='='){
            
            console.log(anum,bnum);
            // 如果相加
            if(symbol == '+'){
                add(anum,bnum)
                console.log(this.innerText)
            // 相减
            } else if(symbol == '-'){
                subtract(anum,bnum)
             // 相乘
            } else if(symbol == '*'){
                Multiplication(anum,bnum)
            // 相除
            } else if(symbol == '/'){
                Divide(anum,bnum)
            }
            console.log(result);
            resultcookie=result;
            result=0;
            anum=0;
           bnum=0;
            symbolb=false;
        }else{
            // 计算机初始化
            if(this.innerText  == 'AC'){
                result=0;
                resultcookie=0;
                anum=0;
                bnum=0;
                p.innerText='';
                return;
            // 计算机清零但保留结果result
            } else if(this.innerText == 'CE'){
                result=0;
                resultcookie=0;
                anum=0;
                bnum=0;
                p.innerText=result;
                return;
            } else if
            (this.innerText =='+' || this.innerText == '-' || this.innerText == '*'  || this.innerText == '/'){
                symbol = this.innerText;
                p.innerText=symbol;
                symbolb = true;
            }else{
                if(symbolb == false){
                    anum += this.innerText;
                    anum = Number(anum);
                    console.log(anum);
                    p.innerText= anum;
                }else{
                    if(anum == 0){
                        anum=resultcookie;
                    }
                    bnum += this.innerText;
                    bnum = Number(bnum);
                    console.log(bnum);
                    p.innerText =bnum;
                }
            }
        }
    }
}
// 加法
function add(){
    result = anum + bnum;
    p.innerText = result;
};
// 减法
function subtract(){
    result = anum - bnum;
    p.innerText = result;
};
function Multiplication(){
    result = anum * bnum;
    p.innerText = result;
};
function  Divide(){
    result = anum / bnum;
    p.innerText = result;
};