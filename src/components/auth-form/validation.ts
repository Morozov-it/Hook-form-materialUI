enum required {
    login = 'login is required',
    password = 'password is required',
}

export const loginValidation = {
    required: required.login,
    validate: (value: string) => {
        if (value.match(/[а-яА-Я]/)) {
            return "login can't contain russian symbols" 
        }
        return true
        //return !(value === '1') || 'error message'
    },
    minLength: {
        value: 2,
        message: 'Min length is 2 symbol'
    }
}
export const passwordValidation = {
    required: required.password,
    validate: (value: string) => {
        if (value.match(/[а-яА-Я]/)) {
            return "login can't contain russian symbols" 
        }
        if (value.match(/[-+*/=]/)) {
                return "login can't contain -+*/= symbols" 
            }
        return true
        //return !(value === '1') || 'error message'
    },
    minLength: {
        value: 2,
        message: 'Min length is 2 symbol'
    }
}