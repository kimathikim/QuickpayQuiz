create extension if not exists "uuid-ossp";

create table if not exists clients (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  address text,
  city text,
  country text,
  zip text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists invoices (
  id uuid default gen_random_uuid() primary key,
  invoice_number text not null,
  date text not null,
  client text not null,
  amount numeric not null,
  status text check (status in ('Pending', 'Draft', 'Paid')) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert dummy clients
insert into clients (name, email, address, city, country, zip) values
('Juma Ochieng', 'juma.ochieng@email.com', '45 Moi Avenue', 'Nairobi', 'Kenya', '00100'),
('Wanjiku Kimani', 'wanjiku.kimani@email.com', '12 Kenyatta Lane', 'Nakuru', 'Kenya', '20100'),
('Kiptoo Rotich', 'kiptoo.rotich@email.com', '78 Oginga Odinga St', 'Eldoret', 'Kenya', '30100'),
('Sarah Jenkins', 'sarah.j@email.com', '123 Oxford Street', 'London', 'United Kingdom', 'W1D 1LL'),
('Hiroshi Tanaka', 'hiroshi.t@email.com', '4-2-8 Shiba Park', 'Tokyo', 'Japan', '105-0011'),
('Amara Diop', 'amara.diop@email.com', '55 Rue de la République', 'Dakar', 'Senegal', '10200');
