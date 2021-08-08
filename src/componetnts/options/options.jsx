import React from "react";
import SetDarkMode from "../setDarkMode";
import './options.css'
class Options extends React.Component {
    state={
        isDark:false
    }

    // this metho is work before rendering the component
    componentDidMount()
    {
        // selecting isDark item from localstorage
       var isDarkMode=localStorage.getItem('isDark')
       if(isDarkMode!==null) // checking if the localstorage contain this item
       {

           const bool=isDarkMode==='true'?true:false // parsing the string value to boolean beacause localstorage return string value for 'false' 'true' 
           this.setState({isDark:bool}) // setting the state by the localstorage value
           
           SetDarkMode(bool) // this method imported from setDarkMode.js is used to start the dark mode or close it.
       }

    }

    // this method used for handling checkbox change  
    handelChange=(e)=>{
    const isDark=e.target.checked // changed value
    
       this.setState({isDark}) //setting the state with isDark value
    
       localStorage.setItem('isDark',isDark) // storing the isDark value in local storage
       SetDarkMode(isDark) //changing the mode
    }
    // this method used for open and close option menu
    handelClick=(e)=>{
        
        var option=document.querySelector('.options') // select option menu
         var gearIcon=document.querySelector('.options .gear .fa')   // select gear icon to make it spin if menu is opened and not spin if menu is closed
        if(option.classList.contains('open')) // check if menu has open class to it
        {
            
            option.classList.remove('open'); // remove open class to make the menu close
            gearIcon.classList.remove('fa-spin') // remove spin class from gearicon to make it not spin
        }    
        else 
        {
            
           
            option.classList.add('open'); // adding open class to the menu to make menu open
            gearIcon.classList.add('fa-spin') // adding spin class to gear icon to make it spin

        }
     

    }
    render(){
        return(
            <div className='options '>
             <input type='checkbox' id='darkMode' checked={this.state.isDark} onChange={this.handelChange}/>
             <label htmlFor='darkMode'>Dark Mode</label>  
             <span className='gear' onClick={this.handelClick}><i className='fa fa-gear fa-2x '></i></span>                  
            </div>
        );
    }
}
export default Options;