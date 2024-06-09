// function Item({ name, isPacked }) {
//     // Conditional branches. Even though the code is correct, it could make code harder to maintain. What if you want to change the classname? You'd have to do it in two places in the code!

//     // if (isPacked) {
//     //     return <li className="item">{name} ✔</li>;
//     // }
//     // return <li className="item">{name}</li>

//     // Hence, you can write:

//     // return(
//     //     <li className="item">
//     //         {isPacked ? name + " ✔" : name}
//     //     </li>
//     // );
//     // Can read it as "if isPacked is true, then (?) render name + ✔, otherwise (:) render name".

//     // OR another shortcut:
//     // return (
//     //     <li className="item">
//     //         {name} {isPacked && "✔"}
//     //     </li>
//     // );
//     // You can read this as "if isPacked, then (&&) render the checkmark, otherwise, render nothing"

//     // OR:
//     // let itemContent = name;
//     // if (isPacked) {
//     //     itemContent = name + "✔";
//     // }
//     // return (
//     //     <li className="item">
//     //         {itemContent}
//     //     </li>
//     // );
// }

// export default function PackingList(){
//     return (
//         <section>
//             <h1>Sally Ride&#39;s packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }

// PRACTICE EXERCISES:

function Item({ name, importance }) {
    return (
      <li className="item">
        {name}
        {(importance > 0) && <i>(Importance: {importance})</i>}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride&#39;s Packing List</h1>
        <ul>
          <Item 
            importance={9} 
            name="Space suit" 
          />
          <Item 
            importance={0} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            importance={6} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }