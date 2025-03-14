/* This is for MySQL */
CREATE TABLE clients (
  client_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  address1 VARCHAR(255) NULL,
  address2 VARCHAR(255) NULL,
  city VARCHAR(100) NULL,
  state CHAR(2) NULL,  -- Standard two-letter abbreviation
  zip_code CHAR(10) NULL,  -- U.S. ZIP code format
  primary_phone VARCHAR(20) NULL,
  cell1 VARCHAR(15) NULL,
  cell2 VARCHAR(15) NULL,
  email VARCHAR(255) NOT NULL UNIQUE,  -- Ensure unique emails
  password_hash VARCHAR(255) NOT NULL,  -- Store hashed passwords
  token VARCHAR(2048) NULL,  -- Used for authentication, password reset, etc.
  role ENUM('admin', 'user') NOT NULL DEFAULT 'user',  -- Role-based access
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Auto-set when created
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  
  PRIMARY KEY (client_id),
  INDEX (email),  -- Faster searches on email
  INDEX (primary_phone)  -- Useful for phone lookups
);


-- CREATE TABLE students (
--   student_id BIGINT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR(255) NULL,
--   last_name VARCHAR(255) NULL,
--   age VARCHAR(255) NULL,
--   address1 VARCHAR(255) NULL,
--   address2 VARCHAR(255) NULL,
--   city VARCHAR(255) NULL,
--   state VARCHAR(255) NULL,
--   zip_code VARCHAR(255) NULL,
--   token TEXT NULL,
--   date VARCHAR(255) NULL,
--   phone VARCHAR(255) NULL,
--   user_id BIGINT,
--   FOREIGN KEY(user_id) REFERENCES users(user_id),
--   PRIMARY KEY (student_id)
-- );

-- CREATE TABLE zman_goal (
--   zman_goal_id BIGINT NOT NULL AUTO_INCREMENT,
--   zman VARCHAR(255),
--   zman_starts_ends JSON NULL,
--   closed_weeks JSON NULL,
--   bus_price VARCHAR (255) NULL,
--   wash_price VARCHAR (255) NULL,
--   total_zman_weeks VARCHAR (255) NULL,
--   total_zman_goal VARCHAR (255) NULL,
--   total_bus_goal VARCHAR (255) NULL,
--   total_wash_goal VARCHAR (255) NULL,
--   user_id BIGINT
--   FOREIGN KEY(user_id) REFERENCES users(user_id)
--   PRIMARY KEY (zman_goal_id)
-- );

-- CREATE TABLE payments (
--   payment_id BIGINT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR (255) NULL,
--   last_name VARCHAR (255) NULL,
--   payment_type VARCHAR (255) NULL,
--   cash VARCHAR (255) NULL,
--   checks VARCHAR (255) NULL,
--   credit_card VARCHAR (255) NULL,
--   bus_amount VARCHAR(255) NULL,
--   wash_amount VARCHAR(255) NULL,
--   total_paid VARCHAR (255) NULL,
--   pay_date VARCHAR (255) NULL,
--   token TEXT NULL,
--   student_id BIGINT,
--   user_id BIGINT,
--   FOREIGN KEY(student_id) REFERENCES students(student_id),
--   FOREIGN KEY(user_id) REFERENCES users(user_id),
--   PRIMARY KEY (payment_id)
-- );

-- CREATE TABLE Withdrawals (
--   withdrawal_id BIGINT NOT NULL AUTO_INCREMENT,
--   amount VARCHAR(255) NULL,
--   withdrawal_to VARCHAR (255) NULL,
--   date VARCHAR(255) NULL,
--   hebrew_date VARCHAR (255) NULL,
--   user_id BIGINT,
--   FOREIGN KEY(user_id) REFERENCES users(user_id),
--   PRIMARY KEY (Withdrawal_id)
-- );

-- CREATE TABLE old_students (
--   student_id BIGINT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR(255) NULL,
--   last_name VARCHAR(255) NULL,
--   age VARCHAR(255) NULL,
--   address1 VARCHAR(255) NULL,
--   address2 VARCHAR(255) NULL,
--   city VARCHAR(255) NULL,
--   state VARCHAR(255) NULL,
--   zip_code VARCHAR(255) NULL,
--   token TEXT NULL,
--   phone VARCHAR(255) NULL,
--   date VARCHAR(255) NULL,
--   PRIMARY KEY (student_id)
-- );

-- CREATE TABLE old_zman_goal (
--   zman_goal_id BIGINT NOT NULL AUTO_INCREMENT,
--   zman VARCHAR(255),
--   zman_starts_ends JSON NULL,
--   closed_weeks JSON NULL,
--   bus_price VARCHAR (255) NULL,
--   wash_price VARCHAR (255) NULL,
--   total_zman_weeks VARCHAR (255) NULL,
--   total_zman_goal VARCHAR (255) NULL,
--   total_bus_goal VARCHAR (255) NULL,
--   total_wash_goal VARCHAR (255) NULL,
--   PRIMARY KEY (zman_goal_id)
-- );

-- CREATE TABLE old_payments (
--   payment_id BIGINT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR (255) NULL,
--   last_name VARCHAR (255) NULL,
--   payment_type VARCHAR (255) NULL,
--   cash VARCHAR (255) NULL,
--   checks VARCHAR (255) NULL,
--   credit_card VARCHAR (255) NULL,
--   bus_amount VARCHAR(255) NULL,
--   wash_amount VARCHAR(255) NULL,
--   total_paid VARCHAR (255) NULL,
--   pay_date VARCHAR (255) NULL,
--   token TEXT NULL,
--   date VARCHAR(255) NULL,
--   student_id BIGINT,
--   FOREIGN KEY(student_id) REFERENCES students(student_id),
--   PRIMARY KEY (payment_id)
-- );