const express = require("express");
const path = require("path");
const hbs = require("hbs");
const LogInCollection = require("./mongo");
const port = process.env.PORT || 3000;

const app = express();

// Set up express to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define paths for views and static files
const templatePath = path.join(__dirname, '../tempelates');
const publicPath = path.join(__dirname, '../public');

// Set view engine and views path
app.set('view engine', 'hbs');
app.set('views', templatePath);

// Serve static files
app.use(express.static(publicPath));

// Register partials if necessary
// hbs.registerPartials(partialsPath); // Uncomment and define partialsPath if needed

// Route to render signup page
app.get('/signup', (req, res) => {
    res.render('signup');
});

// Route to render login page
app.get('/login', (req, res) => {
    res.render('login');
});

// Route to handle signup
// Route to handle signup
app.post('/signup', async (req, res) => {
  const name= req.body.name;
  const password= req.body.password;
  try {
      // Check if user already exists
      const existingUser = await LogInCollection.findOne({ name });

      if (existingUser) {
          return res.status(409).send("User already exists");
      }

      // Create a new user
      const newUser = new LogInCollection({ name, password });
      await newUser.save();

      // Stay on the signup page
      res.status(201).render('signup');
  } catch (error) {
      console.error(error);
      res.status(500).send("Error during signup");
  }
});


// Route to handle login
app.post('/login', async (req, res) => {
  const name= req.body.name;
  const password= req.body.password;
    try {
        // Find the user in the database
        const user = await LogInCollection.findOne({ name });

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Check if the password is correct
        if (user.password === password) {
            // Render home page with user's name
            res.status(200).sendFile(path.join(publicPath, 'index.html'));
        } else {
            res.status(401).send("Incorrect password");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error during login");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
