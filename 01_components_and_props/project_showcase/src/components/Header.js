const Header = ({ firstName, lastName, age }) => {
    
    // props => A JS Object
    // console.log(props);

    // const { firstName, lastName, age } = props;
    
    
    // TypeError: Cannot assign to read only property 'firstName' 
    // of object
    // props.firstName = "Jacob";

    // const FullName = () => {
    //     if (lastName === "Smith") {
    //         let newFirstName = firstName;
    //         newFirstName = "John";
    //     } else {
    //         let newFirstName = firstName;
    //     }

    //     return (
    //         <p>{newFirstName} {lastName} </p>
    //     )
    // }

    // const firstName = props.firstName;
    // const lastName = props.lastName;
    // const age = props.age;
    
    return (
        <>
            <h3>Header Component</h3>
            <p>{firstName} {lastName}</p>
            <p>{age}</p>
        </>
    );
}

export default Header;