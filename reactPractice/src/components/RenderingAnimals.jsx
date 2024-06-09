function List(props) {
    // getting animal list from an API (if we are using API)
    if (!props.animals) {
        return <div>Loading...</div>
    }
    // Checking if there are any animals in the database
    if (props.animals.length === 0) {
        return <div>There are no animals in the list!</div>
    }
    // If there are, we return them
    return(
        <ul>
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

// OTHER WAYS TO CONDITIONALLY RENDER IT:
// using ternary operators
// function List(props) {
//     return (
//         <>
//         {!props.animals ? (
//             <div>Loading...</div>
//         ) : props.animals.length > 0 ? (
//             <ul>
//                 {props.animals.map((animal) => {
//                     return <li key={animal}>{animal}</li>;
//                 })}
//             </ul>
//         ) : (
//             <div>There are no animals in the list!</div>
//         )}
//         </>
//     );
// }

// using && operators
// function List(props) {
//     return (
//         <>
//         {!props.animals && <div>Loading...</div>}
//         {props.animals && props.animals.length > 0 && (
//             <ul>
//                 {props.animals.map((animal) => {
//                     return <li key={animal}>{animal}</li>;
//                 })}
//             </ul>
//         )}
//         {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
//         </>
//     );
// }

export default function AnimalApp() {
    const animals = [];

    return(
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    )
}