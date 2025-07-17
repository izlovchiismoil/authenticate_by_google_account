import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import GoogleStrategy from "passport-google-oauth20";

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());

app.use(passport.session());

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },
        (accessToken, refreshToken, profile, done) => done(null, profile)
    )
);

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));


app.use(express.json());
app.use(cors());


app.get("/api/v1", (req, res) => {
    return res.send(`<a href="/api/v1/auth/google/register">Register by Google</a>`);
});

app.get("/api/v1/auth/google/register", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/api/v1/auth/google/callback", passport.authenticate("google", { failureRedirect: "/api/v1" }), (req, res) => {
    return res.redirect("/profile");
});

app.get("/profile", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/api/v1");
    }
    return res.send(`Welcome ${req.user.displayName}`);
});

app.get("/logout", (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect("/api/v1");
    });
});

const port = process.env.PORT || 3000;


app.listen(port || 3000, () => {
    console.log(`Server is running on port = ${port}`);
});