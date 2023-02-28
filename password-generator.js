let generator = require("generate-password")
const callback = ()=>{
    let password = generator.generate({
        length: 10,
        numbers: true
    });
    console.log(password);
};
callback();