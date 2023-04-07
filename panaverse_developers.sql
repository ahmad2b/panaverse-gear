CREATE TABLE panaverse_developers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash CHAR(64) NOT NULL, -- hashed password for security reasons
  public_name VARCHAR(100), -- nullable field for public name, if the user wants to display a different name
  public_email VARCHAR(100), -- nullable field for public email, if the user wants to display a different email
  bio TEXT, -- nullable field for a short bio
  profile_picture VARCHAR(255), -- nullable field for storing profile picture URL
  is_email_public BOOLEAN DEFAULT FALSE, -- flag to show if email should be public or not
  is_name_public BOOLEAN DEFAULT FALSE, -- flag to show if name should be public or not
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


