const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        if (!email) {
          return done(null, false);
        }

        // For now, pass Google profile information forward.
        // We'll connect this to MongoDB/JWT in the next step.
        return done(null, {
          googleId: profile.id,
          email,
          name: profile.displayName
        });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

module.exports = passport;