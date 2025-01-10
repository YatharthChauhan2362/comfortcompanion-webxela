/*
  # Initial Schema Setup
  
  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `password` (text)
      - `role` (text)
      - `created_at` (timestamp)
    - `orders`
      - `id` (uuid, primary key) 
      - `user_id` (uuid, foreign key)
      - `status` (text)
      - `total` (numeric)
      - `created_at` (timestamp)
    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key)
      - `product_id` (text)
      - `quantity` (integer)
      - `price` (numeric)
    - `payments`
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key)
      - `amount` (numeric)
      - `status` (text)
      - `payment_intent_id` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password text NOT NULL,
  role text NOT NULL DEFAULT 'customer',
  created_at timestamptz DEFAULT now()
);

-- Orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  status text NOT NULL DEFAULT 'pending',
  total numeric NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Order items table
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  product_id text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  price numeric NOT NULL DEFAULT 0
);

-- Payments table
CREATE TABLE payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  payment_intent_id text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Orders are viewable by owner"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Order items are viewable by order owner"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Payments are viewable by order owner"
  ON payments
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = payments.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Insert admin user
INSERT INTO users (email, password, role)
VALUES ('admin@cc.com', crypt('admin', gen_salt('bf')), 'admin');