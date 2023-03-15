
interface progressProp{
    bgcolor: string;
    completed: number


} 
export const ProgressBar = ({bgcolor, completed}:progressProp) => {
    
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#D8D6D4",
      borderRadius: 50,
      
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      
    }
  
    
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
       
        </div>
      </div>
    );
  };
  
 