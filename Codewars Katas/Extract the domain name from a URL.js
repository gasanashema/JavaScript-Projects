/**
 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
 */

function domainName(url){

    let remHttp = url.includes("//",0)? url.split("//") :  url.split(".");
    
    if(remHttp[0].includes("http",0)){
           let remWww = remHttp[1].split(".");
           if(remWww[0].toLowerCase()=="www"){
            return remWww[1];
            }else{
                return remWww[0]; 
            }            
    }
    if(remHttp.length>=2 && remHttp[0].toLowerCase()!="www"){
        return remHttp[1];
    }
    if(remHttp[0].toLowerCase()=="www"){
             return remHttp[1];
    }

  }

  console.log(domainName("www.xakep.ru"));

  