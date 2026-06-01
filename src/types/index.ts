export interface User {
  id: string;
  email: string;
  username: string;
  balance: number;
  avatar?: string;
  createdAt: string;
  verified: boolean;
  role: 'user' | 'admin';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: 'nokos' | 'email';
  active: boolean;
  image?: string;
}

export interface Transaction {
  id: string;
  userId: string;
  productId: string;
  amount: number;
  status: 'pending' | 'success' | 'failed';
  createdAt: string;
  description: string;
}

export interface Deposit {
  id: string;
  userId: string;
  amount: number;
  method: 'qris' | 'dana' | 'gopay';
  status: 'pending' | 'success' | 'failed';
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  read: boolean;
  createdAt: string;
}
