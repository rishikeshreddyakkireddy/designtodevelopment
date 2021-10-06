function backgroundBlur(x) {

    if(x==1)
    {
        document.getElementsByClassName("card2")[0].style.opacity="0";
        document.getElementsByClassName("card3")[0].style.opacity="0";
        document.getElementsByClassName("card2")[0].style.left="90%";
        document.getElementsByClassName("card3")[0].style.left="180%";

        document.getElementsByTagName("h2")[0].style.display="inline";
        document.getElementsByTagName("h2")[1].style.display="inline";
        document.getElementsByTagName("h2")[2].style.display="inline";
        document.getElementsByTagName("h2")[3].style.display="inline";

        document.getElementsByTagName("button")[0].style.display="block";
        document.getElementsByClassName("info1")[0].style.display="block";

        document.getElementsByClassName("mask1")[0].style.visibility="visible";
        document.getElementsByClassName("mask2")[0].style.visibility="visible";
        document.getElementsByClassName("mask3")[0].style.visibility="visible";

    }
    
    else if(x==11)
    {
        document.getElementsByClassName("card2")[0].style.opacity="1";    
        document.getElementsByClassName("card3")[0].style.opacity="1";   
        document.getElementsByClassName("card2")[0].style.left="25%";
        document.getElementsByClassName("card3")[0].style.left="45%"; 

        document.getElementsByTagName("h2")[0].style.display="block";
        document.getElementsByTagName("h2")[1].style.display="block";
        document.getElementsByTagName("h2")[2].style.display="block";
        document.getElementsByTagName("h2")[3].style.display="block";

        document.getElementsByTagName("button")[0].style.display="none";
        document.getElementsByClassName("info1")[0].style.display="none";

        document.getElementsByClassName("mask1")[0].style.visibility="hidden";
        document.getElementsByClassName("mask2")[0].style.visibility="hidden";
        document.getElementsByClassName("mask3")[0].style.visibility="hidden";


    }

    else if(x==2)
    {
        document.getElementsByClassName("card1")[0].style.opacity="0";
        document.getElementsByClassName("card3")[0].style.opacity="0";
        document.getElementsByClassName("card1")[0].style.left="-90%";
        document.getElementsByClassName("card3")[0].style.left="90%";

        document.getElementsByTagName("h2")[4].style.display="inline";
        document.getElementsByTagName("h2")[5].style.display="inline";
        document.getElementsByTagName("h2")[6].style.display="inline";
        document.getElementsByTagName("h2")[7].style.display="inline";

        document.getElementsByTagName("button")[1].style.display="block";
        document.getElementsByClassName("info2")[0].style.display="block";

        document.getElementsByClassName("mask1")[0].style.visibility="visible";
        document.getElementsByClassName("mask2")[0].style.visibility="visible";
        document.getElementsByClassName("mask3")[0].style.visibility="visible";

    }
    
    else if(x==22)
    {
        document.getElementsByClassName("card1")[0].style.opacity="1";    
        document.getElementsByClassName("card3")[0].style.opacity="1";  
        document.getElementsByClassName("card1")[0].style.left="5%";
        document.getElementsByClassName("card3")[0].style.left="45%"; 
        
        document.getElementsByTagName("h2")[4].style.display="block";
        document.getElementsByTagName("h2")[5].style.display="block";
        document.getElementsByTagName("h2")[6].style.display="block";
        document.getElementsByTagName("h2")[7].style.display="block";

        document.getElementsByTagName("button")[1].style.display="none";
        document.getElementsByClassName("info2")[0].style.display="none";

        document.getElementsByClassName("mask1")[0].style.visibility="hidden";
        document.getElementsByClassName("mask2")[0].style.visibility="hidden";
        document.getElementsByClassName("mask3")[0].style.visibility="hidden";

    }
    
    else if(x==3)
    {
        document.getElementsByClassName("card1")[0].style.opacity="0";
        document.getElementsByClassName("card2")[0].style.opacity="0";
        document.getElementsByClassName("card1")[0].style.left="-90%";
        document.getElementsByClassName("card2")[0].style.left="-50%"; 

        document.getElementsByTagName("h2")[8].style.display="inline";
        document.getElementsByTagName("h2")[9].style.display="inline";
        document.getElementsByTagName("h2")[10].style.display="inline";
        document.getElementsByTagName("h2")[11].style.display="inline";

        document.getElementsByTagName("button")[2].style.display="block";
        document.getElementsByClassName("info3")[0].style.display="block";

        document.getElementsByClassName("mask1")[0].style.visibility="visible";
        document.getElementsByClassName("mask2")[0].style.visibility="visible";
        document.getElementsByClassName("mask3")[0].style.visibility="visible";

    }
    
    else if(x==33)
    {
        document.getElementsByClassName("card1")[0].style.opacity="1";    
        document.getElementsByClassName("card2")[0].style.opacity="1";  
        document.getElementsByClassName("card1")[0].style.left="5%";
        document.getElementsByClassName("card2")[0].style.left="25%"; 
        
        document.getElementsByTagName("h2")[8].style.display="block";
        document.getElementsByTagName("h2")[9].style.display="block";
        document.getElementsByTagName("h2")[10].style.display="block";
        document.getElementsByTagName("h2")[11].style.display="block";

        document.getElementsByTagName("button")[2].style.display="none";
        document.getElementsByClassName("info3")[0].style.display="none";


        document.getElementsByClassName("mask1")[0].style.visibility="hidden";
        document.getElementsByClassName("mask2")[0].style.visibility="hidden";
        document.getElementsByClassName("mask3")[0].style.visibility="hidden";

    }
}