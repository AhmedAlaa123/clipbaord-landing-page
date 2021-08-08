

//this method used to setting dark mode or light mode
export default function SetDarkMode(isDark)
{
    let body=document.querySelector('body'); // select body element
    let footer=document.querySelector('footer') //seleecting footer
    if(isDark) // checking if parammter is true setting dark mode if false setting light mode
    {
        // Dark Mode Here

        body.style.background='#000' // making body back ground to black
        footer.style.background='transparent' //making footer background transperant
    }else{
        // Light Mode Here
        body.style.background='transparent' // making body backgrtound transperant
        footer.style.background='var(--grayishblue-)'  // making footer background grayishblue

    }
}