// Deliverable 3: Demonstrate the unmounting and cleanup 
// phase of a component through `useEffect`

    // Return a cleanup function inside the `useEffect` 
    // with a console.log()

    // Open up the devtools to observe when the cleanup 
    // will occur during the stages of Component Lifecycle

import { useState, useEffect } from 'react';

// Mounting Phase
const Timer = () => {
    
    // Create timerCount State to Keep Track of Time Interval
    const [timerCount, setTimerCount] = useState(0);
    
    // Implement useEffect Hook to Automatically Fire Off
    // Timer Counter
    useEffect(() => {
        // Use an Empty Dependency Array
            // Because We Only Need the Incrementation
            // Behavior To Fire Off Once

        // Function Declarations
        
            const consoleLog = () => {
                console.log("Page Clicked!");
            }

            const clearBehaviors = () => {
                console.log("Clean Up Function Fired Off!");
                
                // Clean Up setInterval
                clearInterval(intervalId);

                // Clean Up Click Event Listener
                document.removeEventListener("click", consoleLog);
            }

        // Adding Event Listeners (Another Behavior to Be Cleaned Up)
        document.addEventListener("click", consoleLog);

        // setInterval => Will Continue to Run Independently
        // of Component Lifecycle
        const intervalId = setInterval(() => {

            console.log("Interval Fired Off!");

            // Updating Phase
            // setTimerCount(timerCount => timerCount + 1);
            setTimerCount(prevCount => prevCount + 1);
        }, 1000);

        // Clean Up Behavior
        return () => {
            clearBehaviors();

            // Add Any Additional Behaviors
        }
    }, []);

    return (
        <h2>Timer: {timerCount} </h2>
    );
}

export default Timer;