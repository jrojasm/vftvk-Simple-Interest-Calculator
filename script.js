function compute()
{
    var principal = document.getElementById("principal").value;
    var rate =  document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will recive an amount of "+amount+"\<br\>in the year "+year+"</br>"
}
function updateRate() {
        var rateval = ocument.getElementById("rate").value;
        document.getElementById('rate_val').innerHTML=val+"%";

}

        
