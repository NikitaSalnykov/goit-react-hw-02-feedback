export const getColor = name => {
     switch (name) {
        case "Good":
             return "#00c83c";
         
        case "Neutral":
             return "#83a7ef"
         
        case "Bad":
             return "#fb6868"
         
         default: 
             return "silver"
     }
    }