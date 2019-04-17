import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';
import './PasswordStrengthMeter.css';

class PasswordStrengthMeter extends Component {
    
  render() {
    const testedResult = zxcvbn(this.props.password);
    return (
        <div className="password-strength-meter">
            <progress
                className={`password-strength-meter-progress strength-${testedResult.score}`}
                value={testedResult.score}
                max="4"
            />    
            <br />
            <label className="password-strength-meter-label">
            {this.props.password && (<>
              <strong>Password strength:</strong> {this.createPasswordLabel(testedResult)}
              </>)}
         
            </label>
        </div>
    );
  }
  createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        return 'Muy Débil';
      case 1:
        return 'Débil';
      case 2:
        return 'Fácil';
      case 3:
        return 'Buena';
      case 4:
        return 'Fuerte';
      default:
        return 'Muy Débil';
    }
  }
}

export default PasswordStrengthMeter;