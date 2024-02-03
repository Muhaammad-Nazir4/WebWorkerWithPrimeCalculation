# Web Worker Prime Number Calculation

## Project Description

This project demonstrates the effectiveness of web workers by tackling the computation of the 40,000th prime number—a task known to be time-consuming on most machines and programming languages.

## How to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Muhaammad-Nazir4/WebWorkerWithPrimeCalculation
2. **Navigate to the project directory:**
   ```bash
   cd web-worker-prime-calculation
4. **Open Project in a web browser:**
    Run "npm start" in the project directory in terminal.
5. **Open the browser's developer tools and check the console for logs.**
   Check logs for calculations with web workers and not webworkers.
   
## Performance Findings
### Scenario 1: Web Worker
- The web page remains responsive during the prime calculation script execution.
- Demonstrates the effectiveness of web workers in preventing the main thread from becoming blocked.
### Scenario 2: Main Thread
- The page becomes unresponsive during script execution.
- Illustrates potential performance issues when executing resource-intensive computations on the main thread.
- 
## Challenges Faced and Solutions
### Synchronization

Ensuring proper synchronization between the main thread and the web worker was challenging. This was addressed by:
- Carefully handling data exchange.
- Using appropriate messaging techniques.

### Debugging

Debugging code within a web worker environment can be challenging. The following approach facilitated effective debugging:
- Leveraging browser developer tools.
- Utilizing logging messages for better insight.

## References and Resources
- Mozilla Developer Network (MDN) - Web Workers
- Stack Overflow discussions on web worker best practices and common issues.
## Conclusion
The project underscores the importance of leveraging web workers for computationally intensive tasks to maintain a responsive user interface. 
Offloading such tasks to dedicated worker threads enhances the overall user experience. 
Challenges faced, such as synchronization and debugging, were overcome through careful implementation and debugging practices.
