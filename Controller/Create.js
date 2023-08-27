const products = require("../Models/Products.js")
const signup = require("../Models/Signup.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds to use
 
const plaintextPassword = 'user_password';
// const plaintextPassword = "user_password"; // Password from user input
const hashedPasswordFromDB = 'hashed_password_from_database'; // Hashed password retrieved from the database


const encryptPassword = async (value) =>{
     bcrypt.hash(value, saltRounds, (err, hash) => {
        return hash
        // if (err) {
        //     return err
        //     // console.error('Error hashing password:', err);
        // } else {
        //     return hash
        //     // console.log('Hashed Password:', hash);
        //     // Store the 'hash' value in your database
        // }
    });
}

const encryptCompare = () => {
    bcrypt.compare(plaintextPassword, hashedPasswordFromDB, (err, result) => {
        if (err) {
            console.error('Error comparing passwords:', err);
        } else {
            if (result) {
                console.log('Passwords match');
            } else {
                console.log('Passwords do not match');
            }
        }
    });
}





function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'),
    encryptedData: encrypted.toString('hex') };
}

const login = async(req,res) => {
    console.log("khgkbkbg");

    const {username, password} = req.body

    if(username == "Lokesh"){
        console.log(1);
        if(password == "9575154582"){
            console.log(2);
            let jwtSecretKey = "fdgdcbdfbfdbd";
            let data = {
                time: Date()
            }
          
            const token = jwt.sign(data, jwtSecretKey);

            var encrypted = encrypt("Hello World!");
            console.log("Encrypted Text: " + encrypted.encryptedData);
          
            // res.send(token);
            return res.status(200).json({ message: 'Data Lokesh successfully.', code: 200, jwttocken: token });
        }else{
            console.log(3);
        }
    }else{
        console.log(4);
    }

}

const register = async(req,res)=> {

    const {username, email, password} = req.body
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (username == "") {

    } else if (email == "") {
        console.log("dfsdfdsfdsfdsfsdfsdfdsfds");
    }  else if(password == "") {

    } else {

        const newUser = new signup({
            username: 'john_doe',
            email: 'john@example.com',
            password: 'hashed_password_here'
          });

          newUser.save()

        // const data = await signup.create({
        //     username : username,
        //     email : email,
        //     password : password
        // })
        // console.log(data);
        console.log("username", await encryptPassword(username));
        console.log("email", await encryptPassword(email));
        console.log("password", await encryptPassword(password));
        return res.status(200).json({ message: 'Register Successfully.', code: 200 });
       
       
        
        
    }
    
}

const addNote = async(req,res) => {
    const {content,title} = req.body

    
    const movie =  await products.save({
        
        "title": title,
        "content": content,
        
    })
    // console.log(skdks.title)
    console.log(movie)
    // res.json(movie);
    // console.log(req.body);
    return res.status(200).json({ message: 'Data Lokesh successfully.', code: 200 });
    
    // console.log(res);
}

module.exports = {
    login,
    register,
    addNote
}