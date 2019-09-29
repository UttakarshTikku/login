module.exports = {
    
    validateFormData: (data) => {
        console.log(data);
    },
    
    checkPasswordStrength: (password, data) => {
        let errors = [];
        let warnings = [];
        if(password.length < 8) errors.push("Must be atleast 8 characters");
        if(!hasNumber(password)) errors.push("Must contain numbers");
        if(!hasUpperCase(password)) errors.push("Must contain upper case alphabets");
        if(!hasLowerCase(password)) errors.push("Must contain lower case alphabets");
        if(!hasSpecialCharacters(password)) errors.push("Must contain special characters");
        if(common_substrings(password, data.name) > 4) warnings.push("Avoid using name in password");
        if(common_substrings(password, data.email) > 4) warnings.push("Avoid using email in password");
        let passwordAnalysis = {};
        passwordAnalysis["errors"] = errors;
        passwordAnalysis["warnings"] = warnings;
        return passwordAnalysis;
    }
}

const hasNumber = (value) => {
    return new RegExp(/[0-9]/).test(value);
}

const hasUpperCase = (value) => {
    return new RegExp(/[A-Z]/).test(value);
}

const hasLowerCase = (value) => {
    return new RegExp(/[a-z]/).test(value);
}

const hasSpecialCharacters = (value) => {
    return new RegExp(/[!@#$%^&*)(+=._-]/).test(value);
}

const common_substrings = (first, second, percent) => {
    if (first === null || second === null || typeof first === 'undefined' || typeof second === 'undefined') {
      return 0;
    }
  
    first += '';
    second += '';
  
    var pos1 = 0,
      pos2 = 0,
      max = 0,
      firstLength = first.length,
      secondLength = second.length,
      p, q, l, sum;
  
    max = 0;
  
    for (p = 0; p < firstLength; p++) {
      for (q = 0; q < secondLength; q++) {
        for (l = 0;
          (p + l < firstLength) && (q + l < secondLength) && (first.charAt(p + l) === second.charAt(q + l)); l++)
        ;
        if (l > max) {
          max = l;
          pos1 = p;
          pos2 = q;
        }
      }
    }
  
    sum = max;
  
    if (sum) {
      if (pos1 && pos2) {
        sum += this.similar_text(first.substr(0, pos1), second.substr(0, pos2));
      }
  
      if ((pos1 + max < firstLength) && (pos2 + max < secondLength)) {
        sum += this.similar_text(first.substr(pos1 + max, firstLength - pos1 - max), second.substr(pos2 + max,
          secondLength - pos2 - max));
      }
    }
  
    if (!percent) {
      return sum;
    } else {
      return (sum * 200) / (firstLength + secondLength);
    }
  }