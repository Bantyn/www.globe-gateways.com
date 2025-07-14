//home page
const home=async (req, res) => {
    try{
        res.status(200).send("Welcome to the best MERN stack app");
    } catch (error) {
        console.log(error);
    }
}

//Register page
const register=async(req, res) => {
    try{
        res.send("Welcome to Register Page");
    }catch (error) {
        res.status(400).send("page not found");
    }
    res.send("Welcome to Register Page");
}

module.exports={home,register};
