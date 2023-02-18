import react from 'react';
import './InputStyle.css';

function Input() {
    return (
        <>
      <form className = 'form'>
        <label>Company:
          <input type="text" placeholder='Google!'/>
        </label>
        <label>Role:
          <input type="text" placeholder='SWE!'/>
        </label>
        <label>Status:
          <input type="text" placeholder='Submitted!'/>
        </label>
      </form>
      <div className = 'submitButton'>
        <input type="submit" Submit/>
      </div>
      </>
    )
  }

export default Input;
