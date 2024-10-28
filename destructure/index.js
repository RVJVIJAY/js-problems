const actor="vijay";
 const obj={[getactor()]:"tvk",["thalapathy"+actor]:2026,"startedcarrer":1990}
function getactor(){
    return "vijay"
}
 let {[getactor()]:name,["thalapathy"+actor]:year,startedcarrer}=obj; //destructing object with dynamic name chageing with (: it menans alternte name or :->as chage the key name for particular period )

 console.log(name +"&"+year+"&"+startedcarrer);