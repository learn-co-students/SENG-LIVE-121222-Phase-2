const Header = ({ isDarkMode, handleClick }) => {
  // console.log(useState());

  // Array Destructuring Assigmnment 
  // const [isDarkMode, setDarkMode] = useState(false);
  
  // Declare Our Helper Function
  // const handleClick = () => {
  //   setDarkMode(!isDarkMode);
  // }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>
        { isDarkMode ? "Light Mode" : "Dark Mode" }
      </button>
    </header>
  );
}

export default Header;
