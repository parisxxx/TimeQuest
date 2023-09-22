const endDate="1 January 2024 12:00 AM";

document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll("input");

// const clock=() =>{

// }
function clock()
{
    const end=new Date(endDate);
    const now=new Date();
    console.log(end, now)

    //time in seconds
    const diff=(end-now)/1000;
    //if time ends as 0000 stops
    if(diff<0)
    {
        return;
    }



    //CONVERT INTO DAYS
    // const days=();
    inputs[0].value=(Math.floor(diff/(3600*24)));
    //hours()
    inputs[1].value=(Math.floor(diff/(60*60)%24));
    //minutes()
    inputs[2].value=(Math.floor(diff/(60)%60));

    //seconds()
    inputs[3].value=(Math.floor(diff)%60);

}

//initial call
clock()
setInterval
(
   () =>{
    clock()
},
1000
)


//1 day=24hours
//24hours=24*60mins
//24*60*60 seconds
