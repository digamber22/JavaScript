// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

  // switch is key  and lock concept , 
const month = "march"              // key = month  , cases or values is lock ;
                                 // without break , print all condition after correct condition except default ;
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}