import React, { useState, useEffect } from 'react';
// import { 
//   User, 
//   Mail, 
//   Search, 
//   Plus, 
//   Edit, 
//   Trash2, 
//   Grid, 
//   List, 
//   ChevronLeft, 
//   ChevronRight,
//   Eye,
//   EyeOff,
//   Loader,
//   X
// } from 'lucide-react'; 
// SVG Icons
const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M5 12h14"/>
    <path d="M12 5v14"/>
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="3,6 5,6 21,6"/>
    <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
  </svg>
);

const ListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="8" y1="6" x2="21" y2="6"/>
    <line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <line x1="3" y1="6" x2="3.01" y2="6"/>
    <line x1="3" y1="12" x2="3.01" y2="12"/>
    <line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="15,18 9,12 15,6"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="9,18 15,12 9,6"/>
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const LoaderIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="2" x2="12" y2="6"/>
    <line x1="12" y1="18" x2="12" y2="22"/>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
    <line x1="2" y1="12" x2="6" y2="12"/>
    <line x1="18" y1="12" x2="22" y2="12"/>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);


// Simulated Redux store with React hooks
const useStore = () => {
  const [state, setState] = useState({
    user: null,
    token: null,
    users: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    searchTerm: '',
    viewMode: 'list' // 'list' or 'card'
  });

  const dispatch = (action) => {
    setState(prev => {
      switch (action.type) {
        case 'SET_LOADING':
          return { ...prev, loading: action.payload };
        case 'SET_USER':
          return { ...prev, user: action.payload };
        case 'SET_TOKEN':
          return { ...prev, token: action.payload };
        case 'SET_USERS':
          return { ...prev, users: action.payload };
        case 'SET_ERROR':
          return { ...prev, error: action.payload };
        case 'SET_CURRENT_PAGE':
          return { ...prev, currentPage: action.payload };
        case 'SET_TOTAL_PAGES':
          return { ...prev, totalPages: action.payload };
        case 'SET_SEARCH_TERM':
          return { ...prev, searchTerm: action.payload };
        case 'SET_VIEW_MODE':
          return { ...prev, viewMode: action.payload };
        case 'ADD_USER':
          return { 
            ...prev, 
            users: [...prev.users, { ...action.payload, id: Date.now() }] 
          };
        case 'UPDATE_USER':
          return {
            ...prev,
            users: prev.users.map(user => 
              user.id === action.payload.id ? action.payload : user
            )
          };
        case 'DELETE_USER':
          return {
            ...prev,
            users: prev.users.filter(user => user.id !== action.payload)
          };
        case 'LOGOUT':
          return {
            ...prev,
            user: null,
            token: null,
            users: []
          };
        default:
          return prev;
      }
    });
  };

  return [state, dispatch];
};

// Mock API Service (simulating ReqRes API behavior)
const mockUsers = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg"
  }
];

let userIdCounter = 7;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const apiService = {
  login: async (email, password) => {
    await delay(1000); // Simulate network delay
    
    // Valid credentials for demo
    if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
      return { token: 'QpwL5tke4Pnpja7X4' };
    }
    
    throw new Error('Invalid credentials');
  },
  
  getUsers: async (page = 1) => {
    await delay(800); // Simulate network delay
    
    const perPage = 6;
    const totalUsers = mockUsers.length;
    const totalPages = Math.ceil(totalUsers / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    
    return {
      page,
      per_page: perPage,
      total: totalUsers,
      total_pages: totalPages,
      data: mockUsers.slice(startIndex, endIndex)
    };
  },
  
  createUser: async (userData) => {
    await delay(500); // Simulate network delay
    
    const newUser = {
      ...userData,
      id: userIdCounter++,
      createdAt: new Date().toISOString()
    };
    
    mockUsers.push(newUser);
    return newUser;
  },
  
  updateUser: async (id, userData) => {
    await delay(500); // Simulate network delay
    
    const userIndex = mockUsers.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      mockUsers[userIndex] = {
        ...mockUsers[userIndex],
        ...userData,
        updatedAt: new Date().toISOString()
      };
      return mockUsers[userIndex];
    }
    
    throw new Error('User not found');
  },
  
  deleteUser: async (id) => {
    await delay(500); // Simulate network delay
    
    const userIndex = mockUsers.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      mockUsers.splice(userIndex, 1);
      return true;
    }
    
    return false;
  }
};

// Login Component
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      const response = await apiService.login(email, password);
      onLogin(response.token);
    } catch (error) {
      setErrors({ general: 'Invalid credentials' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
        <div className="mx-auto h-12 w-12 text-blue-500 mb-4 flex justify-center">
            <UserIcon />
          </div>
         
          <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          
          {errors.general && (
            <div className="text-red-600 text-sm text-center">{errors.general}</div>
          )}
          
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? <LoaderIcon className="animate-spin mr-2 w-4 h-4" /> : null}
            {loading ? 'Signing in...' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
};

// User Modal Component
const UserModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        avatar: user.avatar || ''
      });
    } else {
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        avatar: ''
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = 'First name is required';
    if (!formData.last_name) newErrors.last_name = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      const userData = {
        ...formData,
        id: user?.id || Date.now()
      };
      onSave(userData);
      onClose();
    } catch (error) {
      setErrors({ general: 'Failed to save user' });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">
            {user ? 'Edit User' : 'Create User'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <XIcon />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={formData.first_name}
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.first_name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.first_name && <p className="mt-1 text-sm text-red-600">{errors.first_name}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.last_name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.last_name && <p className="mt-1 text-sm text-red-600">{errors.last_name}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Avatar URL (Optional)
            </label>
            <input
              type="url"
              value={formData.avatar}
              onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {errors.general && (
            <div className="text-red-600 text-sm">{errors.general}</div>
          )}
          
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center"
            >
              {loading ? <LoaderIcon className="animate-spin mr-2 w-4 h-4" /> : null}
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Users Dashboard Component
const UsersDashboard = ({ onLogout }) => {
  const [state, dispatch] = useStore();
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  useEffect(() => {
    loadUsers();
  }, [state.currentPage]);

  const loadUsers = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await apiService.getUsers(state.currentPage);
      dispatch({ type: 'SET_USERS', payload: response.data });
      dispatch({ type: 'SET_TOTAL_PAGES', payload: response.total_pages });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load users' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleCreateUser = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleSaveUser = async (userData) => {
    try {
      if (editingUser) {
        await apiService.updateUser(editingUser.id, userData);
        dispatch({ type: 'UPDATE_USER', payload: userData });
      } else {
        await apiService.createUser(userData);
        dispatch({ type: 'ADD_USER', payload: userData });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to save user' });
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await apiService.deleteUser(userId);
      dispatch({ type: 'DELETE_USER', payload: userId });
      setShowDeleteConfirm(null);
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to delete user' });
    }
  };

  const filteredUsers = state.users.filter(user =>
    user.first_name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
    user.last_name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  const UserCard = ({ user }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar || `https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}&background=random`}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => handleEditUser(user)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => setShowDeleteConfirm(user.id)}
          className="p-2 text-red-600 hover:bg-red-50 rounded-md"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );

  const UserRow = ({ user }) => (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            src={user.avatar || `https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}&background=random`}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {user.first_name} {user.last_name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {user.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {user.first_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {user.last_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => handleEditUser(user)}
          className="text-blue-600 hover:text-blue-900 mr-3"
        >
          Edit
        </button>
        <button
          onClick={() => setShowDeleteConfirm(user.id)}
          className="text-red-600 hover:text-red-900"
        >
          Delete
        </button>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="h-8 w-8 text-blue-500 mr-3">
                <UserIcon />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative"> 
            <div className="absolute left-3 top-3 h-4 w-4 text-gray-400">
                <SearchIcon />
              </div>
             
              <input
                type="text"
                placeholder="Search users..."
                value={state.searchTerm}
                onChange={(e) => dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value })}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleCreateUser}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
            >
              <PlusIcon />
              Create User
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => dispatch({ type: 'SET_VIEW_MODE', payload: 'list' })}
              className={`p-2 rounded-md ${
                state.viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ListIcon />
            </button>
            <button
              onClick={() => dispatch({ type: 'SET_VIEW_MODE', payload: 'card' })}
              className={`p-2 rounded-md ${
                state.viewMode === 'card' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <GridIcon />
            </button>
          </div>
        </div>

        {/* Loading */}
        {state.loading && (
          <div className="flex justify-center items-center py-12">
            <LoaderIcon className="animate-spin mr-2 w-4 h-4" />
          </div>
        )}

        {/* Users Display */}
        {!state.loading && (
          <>
            {state.viewMode === 'card' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            ) : (
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        First Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Name
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <UserRow key={user.id} user={user} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Page {state.currentPage} of {state.totalPages}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: state.currentPage - 1 })}
              disabled={state.currentPage === 1}
              className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: state.currentPage + 1 })}
              disabled={state.currentPage === state.totalPages}
              className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* User Modal */}
      <UserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        user={editingUser}
        onSave={handleSaveUser}
      />

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-medium mb-4">Delete User</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this user? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteUser(showDeleteConfirm)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    // In a real app, you'd store the token securely
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <UsersDashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;